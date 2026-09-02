const {
  findCompanyFirms,
  getOwners,
  getPriorityFirms,
  getStaleness,
  priorityText,
  sortFirmPriority,
  warmIntroPathsForFirm
} = require("./graph");
const { normalize } = require("./utils");

function answerQuestion({ question, firms, index, interactions }) {
  const normalized = normalize(question);
  const company = findMention(normalized, [...index.companyToFirms.keys()]);
  const firm = findMention(normalized, firms.map((item) => item.name));
  const owner = findMention(normalized, getOwners(firms));

  if (/(warm|intro|introduction|get in touch|reach)/.test(normalized) && company) {
    return answerWarmIntro(index, company);
  }
  if (/(who|which firms|invested|investor|co investor|co-investor)/.test(normalized) && company) {
    return answerCompanyInvestors(index, company);
  }
  if (/(portfolio|companies|investments)/.test(normalized) && firm) {
    return answerFirmPortfolio(firms, firm);
  }
  if (/(cover|coverage|connectivity|firms|know|knows)/.test(normalized) && owner) {
    return answerOwnerCoverage(index, owner);
  }
  if (/(priority|highest priority|top|firmwide)/.test(normalized)) {
    return answerPriorityFirms(firms);
  }
  if (/(stale|recent touch|fresh|freshness|no recent)/.test(normalized)) {
    return answerFreshness(firms, interactions);
  }
  if (firm) return answerFirmPortfolio(firms, firm);
  if (company) return answerCompanyInvestors(index, company);
  if (owner) return answerOwnerCoverage(index, owner);

  return {
    title: "No Entity Matched",
    body: ["I could not match a firm, company, or owner in the graph."],
    paths: [],
    entities: {},
    evidence: []
  };
}

function answerWarmIntro(index, company) {
  const relatedFirms = findCompanyFirms(index, company).sort(sortFirmPriority);
  const paths = relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company));
  return {
    title: `Warm Paths to ${company}`,
    body: paths.length
      ? [`${paths.length} owner-to-firm paths are available through ${relatedFirms.length} investor firms.`]
      : [`${relatedFirms.length} investor firms are linked to ${company}, but no BPC owner is assigned in the seed data.`],
    paths,
    entities: { company, firms: relatedFirms.map((firm) => firm.name) },
    evidence: relatedFirms.map(firmEvidence)
  };
}

function answerCompanyInvestors(index, company) {
  const relatedFirms = findCompanyFirms(index, company).sort(sortFirmPriority);
  return {
    title: `Known Investors in ${company}`,
    body: relatedFirms.length
      ? relatedFirms.map((firm) => `${firm.name}: ${firm.contacts.join(", ") || "no named contact"}; owners ${firm.owners.join(", ") || "unassigned"}.`)
      : [`No known investor firms are linked to ${company}.`],
    paths: relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company)),
    entities: { company, firms: relatedFirms.map((firm) => firm.name) },
    evidence: relatedFirms.map(firmEvidence)
  };
}

function answerFirmPortfolio(firms, firmName) {
  const firm = firms.find((item) => normalize(item.name) === normalize(firmName));
  return {
    title: `${firmName} Portfolio Signals`,
    body: firm?.portfolio.length
      ? [`${firm.portfolio.join(", ")}`]
      : [`No portfolio companies are seeded for ${firmName}.`],
    paths: [],
    entities: { firm: firmName },
    evidence: firm ? [firmEvidence(firm)] : []
  };
}

function answerOwnerCoverage(index, owner) {
  const ownerFirms = (index.ownerToFirms.get(owner) || []).sort(sortFirmPriority);
  return {
    title: `${owner} Coverage`,
    body: ownerFirms.length
      ? ownerFirms.map((firm) => `${firm.name}: ${priorityText(firm)}; ${firm.contacts.length} named contacts.`)
      : [`No firms are assigned to ${owner}.`],
    paths: [],
    entities: { owner, firms: ownerFirms.map((firm) => firm.name) },
    evidence: ownerFirms.map(firmEvidence)
  };
}

function answerPriorityFirms(firms) {
  const top = getPriorityFirms(firms).slice(0, 10);
  return {
    title: "Top Priority Firms",
    body: top.map((firm) => `${firm.name}: ${priorityText(firm)}; owners ${firm.owners.join(", ") || "unassigned"}.`),
    paths: [],
    entities: { firms: top.map((firm) => firm.name) },
    evidence: top.map(firmEvidence)
  };
}

function answerFreshness(firms, interactions) {
  const stale = getPriorityFirms(firms).filter((firm) => getStaleness(interactions, firm.name).isStale).slice(0, 15);
  return {
    title: "Priority Freshness Gaps",
    body: stale.map((firm) => `${firm.name}: ${getStaleness(interactions, firm.name).label}; owners ${firm.owners.join(", ") || "unassigned"}.`),
    paths: [],
    entities: { firms: stale.map((firm) => firm.name) },
    evidence: stale.map((firm) => ({ ...firmEvidence(firm), staleness: getStaleness(interactions, firm.name) }))
  };
}

function firmEvidence(firm) {
  return {
    firm: firm.name,
    owners: firm.owners,
    contacts: firm.contacts,
    portfolio: firm.portfolio,
    priority: priorityText(firm),
    types: firm.types,
    locations: firm.locations
  };
}

function findMention(normalizedQuestion, candidates) {
  const scored = candidates
    .map((candidate) => {
      const key = normalize(candidate);
      const score = normalizedQuestion.includes(key) ? key.length : 0;
      return { candidate, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.candidate || null;
}

module.exports = {
  answerCompanyInvestors,
  answerFirmPortfolio,
  answerFreshness,
  answerOwnerCoverage,
  answerPriorityFirms,
  answerQuestion,
  answerWarmIntro,
  firmEvidence
};
