function splitRespectingParens(value) {
  if (!value) return [];
  const parts = [];
  let current = "";
  let depth = 0;
  for (const char of value) {
    if (char === "(") depth += 1;
    if (char === ")" && depth > 0) depth -= 1;
    if (char === "," && depth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseFirmRows(raw) {
  return raw.trim().split(/\n+/).map((row, index) => {
    const [
      firm = "",
      contacts = "",
      owners = "",
      type = "",
      location = "",
      portfolio = "",
      relationshipPriority = "",
      strategicPriority = "",
      highPriority = ""
    ] = row.split("|");

    return {
      id: `firm:${slug(firm)}`,
      sourceIndex: index,
      name: firm.trim(),
      contacts: splitRespectingParens(contacts),
      owners: splitRespectingParens(owners).map((owner) => owner.trim()).filter(Boolean),
      types: splitRespectingParens(type.replace(/\s+\/\s+/g, ", ")),
      locations: splitLocations(location),
      portfolio: splitRespectingParens(portfolio),
      relationshipPriority: Number(relationshipPriority) || null,
      strategicPriority: Number(strategicPriority) || null,
      highPriority: /^yes$/i.test(highPriority.trim())
    };
  }).filter((firm) => firm.name);
}

function splitLocations(value) {
  return String(value || "")
    .split(/\s+\/\s+/)
    .map((location) => location.trim())
    .filter(Boolean);
}

function extractPortfolioCandidates(text) {
  const boilerplate = new Set([
    "portfolio",
    "companies",
    "company",
    "investments",
    "team",
    "news",
    "about",
    "contact",
    "current",
    "realized",
    "selected",
    "view all",
    "learn more"
  ]);

  return dedupeByName(
    String(text || "")
      .replace(/https?:\/\/\S+/g, " ")
      .split(/[\n\r\t;,]+/)
      .map((part) => part.replace(/\s{2,}/g, " ").trim())
      .map((part) => part.replace(/^[\-\u2022*]\s*/, "").trim())
      .filter((part) => part.length >= 2 && part.length <= 64)
      .filter((part) => !boilerplate.has(normalize(part)))
      .filter((part) => /[a-zA-Z]/.test(part))
      .filter((part) => !/^(www\.|copyright|privacy|terms)/i.test(part))
  );
}

function dedupeByName(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = normalize(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item.trim ? item.trim() : item);
  }
  return out;
}

function appendMap(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

function slug(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "blank";
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = {
  appendMap,
  dedupeByName,
  extractPortfolioCandidates,
  normalize,
  parseFirmRows,
  slug,
  splitLocations,
  splitRespectingParens
};
