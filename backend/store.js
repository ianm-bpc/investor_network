const fs = require("node:fs/promises");
const fsSync = require("node:fs");
const path = require("node:path");
const { dedupeByName, normalize, parseFirmRows } = require("./utils");

const DATA_DIR = path.join(__dirname, "..", "data");
const SEED_PATH = path.join(DATA_DIR, "seed-firms.psv");
const STORE_PATH = path.join(DATA_DIR, "store.json");

const EMPTY_STORE = {
  portfolioAdditions: {},
  interactions: []
};

async function getState() {
  await ensureStore();
  const [seedRaw, store] = await Promise.all([
    fs.readFile(SEED_PATH, "utf8"),
    readStore()
  ]);
  const seedFirms = parseFirmRows(seedRaw);
  const firms = mergeLocalPortfolio(seedFirms, store.portfolioAdditions);
  return { firms, seedFirms, store };
}

async function readStore() {
  await ensureStore();
  try {
    const parsed = JSON.parse(await fs.readFile(STORE_PATH, "utf8"));
    return {
      portfolioAdditions: parsed.portfolioAdditions || {},
      interactions: Array.isArray(parsed.interactions) ? parsed.interactions : []
    };
  } catch {
    return { ...EMPTY_STORE };
  }
}

async function ensureStore() {
  if (!fsSync.existsSync(DATA_DIR)) await fs.mkdir(DATA_DIR, { recursive: true });
  if (!fsSync.existsSync(STORE_PATH)) await writeStore(EMPTY_STORE);
}

async function writeStore(store) {
  const tempPath = `${STORE_PATH}.${process.pid}.tmp`;
  await fs.writeFile(tempPath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
  await fs.rename(tempPath, STORE_PATH);
}

function mergeLocalPortfolio(baseFirms, additions) {
  return baseFirms.map((firm) => {
    const local = additions[firm.name] || [];
    const localNames = local.map((item) => item.name || item).filter(Boolean);
    const merged = dedupeByName([...firm.portfolio, ...localNames]);
    return { ...firm, portfolio: merged, localPortfolio: local };
  });
}

async function addInteraction(payload) {
  const { firms, store } = await getState();
  const firm = findFirm(firms, payload.firm);
  if (!firm) throw httpError(404, `Unknown firm: ${payload.firm || ""}`);

  const owner = String(payload.owner || "").trim();
  const type = String(payload.type || "Touchpoint").trim();
  const note = String(payload.note || "").trim();
  const date = normalizeDate(payload.date);
  if (!owner) throw httpError(400, "owner is required");

  const interaction = {
    id: `touch:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
    owner,
    firm: firm.name,
    type,
    date,
    note,
    createdAt: new Date().toISOString()
  };

  store.interactions.unshift(interaction);
  store.interactions = store.interactions.slice(0, 1000);
  await writeStore(store);
  return interaction;
}

async function addPortfolioCompanies(payload) {
  const { firms, store } = await getState();
  const firm = findFirm(firms, payload.firmName || payload.firm);
  if (!firm) throw httpError(404, `Unknown firm: ${payload.firmName || payload.firm || ""}`);

  const sourceUrl = String(payload.sourceUrl || "").trim();
  const names = dedupeByName(Array.isArray(payload.companies) ? payload.companies : []);
  const existing = new Set(firm.portfolio.map(normalize));
  const additions = names.filter((name) => !existing.has(normalize(name)));

  if (!store.portfolioAdditions[firm.name]) store.portfolioAdditions[firm.name] = [];
  const localExisting = new Set(store.portfolioAdditions[firm.name].map((item) => normalize(item.name)));
  const records = additions
    .filter((name) => !localExisting.has(normalize(name)))
    .map((name) => ({
      name,
      sourceUrl,
      addedAt: new Date().toISOString()
    }));

  store.portfolioAdditions[firm.name].push(...records);
  await writeStore(store);
  return { firmName: firm.name, added: records };
}

function findFirm(firms, value) {
  const key = normalize(value);
  return firms.find((firm) => normalize(firm.name) === key || firm.id === value);
}

function normalizeDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw httpError(400, "date must be parseable");
  return date.toISOString().slice(0, 10);
}

function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = {
  addInteraction,
  addPortfolioCompanies,
  findFirm,
  getState,
  httpError,
  readStore
};
