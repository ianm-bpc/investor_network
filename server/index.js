const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { loadEnvFile } = require("../backend/env");

const APP_ROOT = path.join(__dirname, "..");
const ENV_INFO = loadEnvFile(path.join(APP_ROOT, ".env"));

const { addInteraction, addPortfolioCompanies, findFirm, getState, httpError } = require("../backend/store");
const {
  activeGraphSubset,
  buildGraphIndex,
  findCompanyFirms,
  getOwners,
  graphStats,
  searchEntities,
  sortFirmPriority,
  warmIntroPathsForFirm
} = require("../backend/graph");
const { answerOwnerCoverage, answerQuestion, answerWarmIntro } = require("../backend/query");
const { maybeEnhanceWithLlm } = require("../backend/llm");
const { extractPortfolioCandidates, normalize } = require("../backend/utils");

const PORT = Number(process.env.PORT || 4321);
const STATIC_FILES = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/app.js", "app.js"],
  ["/styles.css", "styles.css"],
  ["/README.md", "README.md"]
]);

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }
    await serveStatic(response, url.pathname);
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      error: error.message || "Internal server error"
    });
  }
});

server.listen(PORT, () => {
  console.log(`Investor Network listening on http://localhost:${PORT}`);
});

async function handleApi(request, response, url) {
  const method = request.method || "GET";
  const { firms, store } = await getState();
  const index = buildGraphIndex(firms);

  if (method === "GET" && url.pathname === "/api/health") {
    sendJson(response, 200, {
      ok: true,
      stats: graphStats(index, firms),
      config: publicConfig()
    });
    return;
  }

  if (method === "GET" && url.pathname === "/api/docs") {
    sendJson(response, 200, apiDocs());
    return;
  }

  if (method === "GET" && url.pathname === "/api/bootstrap") {
    sendJson(response, 200, {
      firms,
      interactions: store.interactions,
      portfolioAdditions: store.portfolioAdditions,
      owners: getOwners(firms),
      stats: graphStats(index, firms)
    });
    return;
  }

  if (method === "GET" && url.pathname === "/api/graph") {
    sendJson(response, 200, activeGraphSubset(index, firms, {
      scope: url.searchParams.get("scope") || "priority",
      owner: url.searchParams.get("owner") || "all",
      selectedId: url.searchParams.get("selectedId") || ""
    }));
    return;
  }

  if (method === "GET" && url.pathname === "/api/search") {
    sendJson(response, 200, {
      results: searchEntities(index, url.searchParams.get("q") || "").slice(0, Number(url.searchParams.get("limit") || 15))
    });
    return;
  }

  if (method === "GET" && url.pathname.startsWith("/api/firms/")) {
    const firm = findFirm(firms, decodeSegment(url.pathname, "/api/firms/"));
    if (!firm) throw httpError(404, "Firm not found");
    sendJson(response, 200, { firm });
    return;
  }

  if (method === "GET" && url.pathname.startsWith("/api/connectivity/company/")) {
    const company = decodeSegment(url.pathname, "/api/connectivity/company/");
    const relatedFirms = findCompanyFirms(index, company).sort(sortFirmPriority);
    sendJson(response, 200, {
      company,
      firms: relatedFirms,
      paths: relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company))
    });
    return;
  }

  if (method === "GET" && url.pathname.startsWith("/api/connectivity/owner/")) {
    const owner = decodeSegment(url.pathname, "/api/connectivity/owner/");
    sendJson(response, 200, answerOwnerCoverage(index, owner));
    return;
  }

  if (method === "GET" && url.pathname === "/api/interactions") {
    const firm = url.searchParams.get("firm");
    const owner = url.searchParams.get("owner");
    const interactions = store.interactions.filter((touch) => {
      const firmMatch = !firm || normalize(touch.firm) === normalize(firm);
      const ownerMatch = !owner || normalize(touch.owner) === normalize(owner);
      return firmMatch && ownerMatch;
    });
    sendJson(response, 200, { interactions });
    return;
  }

  if (method === "POST" && url.pathname === "/api/interactions") {
    const body = await readJsonBody(request);
    const interaction = await addInteraction(body);
    sendJson(response, 201, { interaction });
    return;
  }

  if (method === "POST" && url.pathname === "/api/portfolio-refresh/diff") {
    const body = await readJsonBody(request);
    const firm = findFirm(firms, body.firmName || body.firm);
    if (!firm) throw httpError(404, "Firm not found");
    const candidates = extractPortfolioCandidates(body.text || "");
    const currentKeys = new Set(firm.portfolio.map(normalize));
    const allCompanyMap = new Map();
    for (const [company, investorFirms] of index.companyToFirms.entries()) {
      allCompanyMap.set(normalize(company), investorFirms);
    }
    const netNew = candidates.filter((name) => !currentKeys.has(normalize(name)));
    const knownElsewhere = netNew
      .filter((name) => allCompanyMap.has(normalize(name)))
      .map((name) => ({ name, firms: allCompanyMap.get(normalize(name)).map((item) => item.name) }));
    sendJson(response, 200, { firmName: firm.name, candidates, netNew, knownElsewhere });
    return;
  }

  if (method === "POST" && url.pathname === "/api/portfolio-refresh/add") {
    const body = await readJsonBody(request);
    const result = await addPortfolioCompanies(body);
    sendJson(response, 201, result);
    return;
  }

  if (method === "POST" && url.pathname === "/api/ask") {
    const body = await readJsonBody(request);
    const question = String(body.question || "").trim();
    if (!question) throw httpError(400, "question is required");
    const deterministicAnswer = answerQuestion({
      question,
      firms,
      index,
      interactions: store.interactions
    });
    let answer = deterministicAnswer;
    if (body.useLlm !== false) {
      try {
        answer = await maybeEnhanceWithLlm({ question, deterministicAnswer });
      } catch (error) {
        answer = {
          ...deterministicAnswer,
          llm: {
            enabled: false,
            reason: "LLM request failed; returned deterministic graph answer.",
            error: sanitizeUpstreamError(error.message)
          }
        };
      }
    }
    sendJson(response, 200, answer);
    return;
  }

  if (method === "GET" && url.pathname.startsWith("/api/warm-intros/")) {
    const company = decodeSegment(url.pathname, "/api/warm-intros/");
    sendJson(response, 200, answerWarmIntro(index, company));
    return;
  }

  throw httpError(404, "API route not found");
}

async function serveStatic(response, pathname) {
  const fileName = STATIC_FILES.get(pathname);
  if (!fileName) {
    sendJson(response, 404, { error: "Not found" });
    return;
  }
  const filePath = path.join(APP_ROOT, fileName);
  const body = await fs.readFile(filePath);
  response.writeHead(200, {
    "Content-Type": contentType(fileName),
    "Cache-Control": "no-store"
  });
  response.end(body);
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 2_000_000) throw httpError(413, "Request body too large");
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw httpError(400, "Request body must be valid JSON");
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(`${JSON.stringify(payload, null, 2)}\n`);
}

function contentType(fileName) {
  if (fileName.endsWith(".html")) return "text/html; charset=utf-8";
  if (fileName.endsWith(".css")) return "text/css; charset=utf-8";
  if (fileName.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (fileName.endsWith(".md")) return "text/markdown; charset=utf-8";
  return "application/octet-stream";
}

function decodeSegment(pathname, prefix) {
  return decodeURIComponent(pathname.slice(prefix.length));
}

function apiDocs() {
  return {
    endpoints: [
      "GET /api/health",
      "GET /api/bootstrap",
      "GET /api/graph?scope=priority|all|owner&owner=AB",
      "GET /api/search?q=Flare",
      "GET /api/firms/:firmName",
      "GET /api/connectivity/company/:companyName",
      "GET /api/connectivity/owner/:owner",
      "GET /api/interactions?firm=TenEleven&owner=AB",
      "POST /api/interactions",
      "POST /api/portfolio-refresh/diff",
      "POST /api/portfolio-refresh/add",
      "POST /api/ask"
    ],
    llm: {
      requiredEnv: ["LLM_API_KEY", "LLM_MODEL"],
      optionalEnv: ["LLM_BASE_URL"],
      envFileLoaded: ENV_INFO.loaded,
      note: "LLM calls use an OpenAI-compatible /chat/completions API. Without env vars, /api/ask returns deterministic graph answers."
    }
  };
}

function publicConfig() {
  return {
    envFileLoaded: ENV_INFO.loaded,
    port: PORT,
    llmConfigured: Boolean(process.env.LLM_API_KEY && process.env.LLM_MODEL),
    llmModel: process.env.LLM_MODEL || null,
    llmBaseUrl: process.env.LLM_BASE_URL || "https://api.openai.com/v1"
  };
}

function sanitizeUpstreamError(message) {
  const text = String(message || "");
  const jsonStart = text.indexOf("{");
  if (jsonStart >= 0) {
    try {
      const parsed = JSON.parse(text.slice(jsonStart));
      return parsed.error?.message || parsed.message || "Upstream model request failed.";
    } catch {
      // Fall through to the generic text sanitizer.
    }
  }
  return text.replace(/Bearer\s+[A-Za-z0-9._-]+/g, "Bearer [redacted]").slice(0, 300) || "Upstream model request failed.";
}
