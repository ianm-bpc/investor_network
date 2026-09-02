const { appendMap, normalize, slug } = require("./utils");

const TOUCH_STALE_DAYS = 90;

function buildGraphIndex(firms) {
  const nodes = new Map();
  const links = [];
  const companyToFirms = new Map();
  const investorToFirms = new Map();
  const ownerToFirms = new Map();

  function addNode(id, label, type, data = {}) {
    if (!nodes.has(id)) nodes.set(id, { id, label, type, ...data });
    return nodes.get(id);
  }

  function addLink(source, target, type, weight = 1) {
    links.push({ source, target, type, weight });
  }

  for (const firm of firms) {
    addNode(firm.id, firm.name, "firm", { firm });
    for (const owner of firm.owners) {
      const ownerId = `owner:${slug(owner)}`;
      addNode(ownerId, owner, "owner", { owner });
      addLink(ownerId, firm.id, "covers", firm.highPriority ? 2.2 : 1.4);
      appendMap(ownerToFirms, owner, firm);
    }
    for (const investor of firm.contacts) {
      const investorId = `investor:${slug(investor)}:${slug(firm.name)}`;
      addNode(investorId, investor, "investor", { investor, firmName: firm.name });
      addLink(firm.id, investorId, "contact", 0.8);
      appendMap(investorToFirms, investor, firm);
    }
    for (const company of firm.portfolio) {
      const companyId = `company:${slug(company)}`;
      addNode(companyId, company, "company", { company });
      addLink(firm.id, companyId, "portfolio", firm.highPriority ? 1.7 : 1.1);
      appendMap(companyToFirms, company, firm);
    }
  }

  return { nodes, links, companyToFirms, investorToFirms, ownerToFirms };
}

function activeGraphSubset(index, firms, options = {}) {
  const scope = options.scope || "priority";
  const owner = options.owner || "all";
  const selectedId = options.selectedId || "";
  let includedFirmIds = new Set();

  if (scope === "all") {
    includedFirmIds = new Set(firms.map((firm) => firm.id));
  } else if (scope === "owner" && owner !== "all") {
    includedFirmIds = new Set(firms.filter((firm) => firm.owners.includes(owner)).map((firm) => firm.id));
  } else if (selectedId) {
    const neighborIds = new Set([selectedId]);
    for (const link of index.links) {
      if (link.source === selectedId) neighborIds.add(link.target);
      if (link.target === selectedId) neighborIds.add(link.source);
    }
    for (const id of neighborIds) {
      const node = index.nodes.get(id);
      if (node?.type === "firm") includedFirmIds.add(id);
    }
    if (!includedFirmIds.size) {
      for (const link of index.links) {
        if (neighborIds.has(link.source) || neighborIds.has(link.target)) {
          const sourceNode = index.nodes.get(link.source);
          const targetNode = index.nodes.get(link.target);
          if (sourceNode?.type === "firm") includedFirmIds.add(sourceNode.id);
          if (targetNode?.type === "firm") includedFirmIds.add(targetNode.id);
        }
      }
    }
  } else {
    includedFirmIds = new Set(getPriorityFirms(firms).map((firm) => firm.id));
  }

  const includedNodeIds = new Set([...includedFirmIds]);
  for (const link of index.links) {
    if (includedFirmIds.has(link.source) || includedFirmIds.has(link.target)) {
      includedNodeIds.add(link.source);
      includedNodeIds.add(link.target);
    }
  }
  if (selectedId) includedNodeIds.add(selectedId);

  const nodes = [...includedNodeIds].map((id) => index.nodes.get(id)).filter(Boolean);
  const links = index.links.filter((link) => includedNodeIds.has(link.source) && includedNodeIds.has(link.target));
  return { nodes, links };
}

function graphStats(index, firms) {
  return {
    firms: firms.length,
    nodes: index.nodes.size,
    links: index.links.length,
    companies: [...index.nodes.values()].filter((node) => node.type === "company").length,
    investors: [...index.nodes.values()].filter((node) => node.type === "investor").length,
    owners: getOwners(firms).length
  };
}

function getOwners(firms) {
  return [...new Set(firms.flatMap((firm) => firm.owners))].sort((a, b) => a.localeCompare(b));
}

function searchEntities(index, query) {
  const normalized = normalize(query);
  if (!normalized) return [];
  return [...index.nodes.values()]
    .map((node) => ({ node, score: matchScore(normalize(node.label), normalized) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.node.label.localeCompare(b.node.label))
    .map((item) => item.node);
}

function matchScore(label, query) {
  if (label === query) return 100;
  if (label.startsWith(query)) return 80;
  if (label.includes(query)) return 55;
  const tokens = query.split(" ");
  const matched = tokens.filter((token) => token && label.includes(token)).length;
  return matched ? matched * 12 : 0;
}

function findCompanyFirms(index, company) {
  const key = normalize(company);
  return [...index.companyToFirms.entries()]
    .filter(([name]) => normalize(name) === key)
    .flatMap(([, relatedFirms]) => relatedFirms);
}

function warmIntroPathsForFirm(firm, company) {
  const contacts = firm.contacts.length ? firm.contacts : ["Relevant investor TBD"];
  return firm.owners.flatMap((owner) => contacts.slice(0, 3).map((contact) => [owner, firm.name, contact, company]));
}

function getPriorityFirms(firms) {
  return firms.filter((firm) => firm.highPriority || firm.relationshipPriority === 1 || firm.strategicPriority === 1).sort(sortFirmPriority);
}

function sortFirmPriority(a, b) {
  const aScore = priorityScore(a);
  const bScore = priorityScore(b);
  if (aScore !== bScore) return bScore - aScore;
  return a.name.localeCompare(b.name);
}

function priorityScore(firm) {
  return (firm.highPriority ? 10 : 0) + (4 - (firm.relationshipPriority || 4)) + (4 - (firm.strategicPriority || 4));
}

function priorityText(firm) {
  const parts = [];
  if (firm.highPriority) parts.push("firmwide");
  if (firm.relationshipPriority) parts.push(`rel ${firm.relationshipPriority}`);
  if (firm.strategicPriority) parts.push(`strat ${firm.strategicPriority}`);
  return parts.join(" / ") || "unranked";
}

function getStaleness(interactions, firmName) {
  const touches = getFirmTouches(interactions, firmName);
  if (!touches.length) return { isStale: true, days: 9999, label: "No touch logged" };
  const last = new Date(touches[0].date);
  const days = Math.floor((Date.now() - last.getTime()) / 86400000);
  return { isStale: days > TOUCH_STALE_DAYS, days, label: `${days} days ago` };
}

function getFirmTouches(interactions, firmName) {
  return interactions
    .filter((touch) => normalize(touch.firm) === normalize(firmName))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

module.exports = {
  activeGraphSubset,
  buildGraphIndex,
  findCompanyFirms,
  getFirmTouches,
  getOwners,
  getPriorityFirms,
  getStaleness,
  graphStats,
  priorityScore,
  priorityText,
  searchEntities,
  sortFirmPriority,
  warmIntroPathsForFirm
};
