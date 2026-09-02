const assert = require("node:assert/strict");
const test = require("node:test");
const path = require("node:path");
const { loadEnvFile } = require("../backend/env");

const appRoot = path.join(__dirname, "..");
const envInfo = loadEnvFile(path.join(appRoot, ".env"));
const baseUrl = (process.env.LLM_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
const model = process.env.LLM_MODEL;
const apiKey = process.env.LLM_API_KEY;
const localPort = Number(process.env.PORT || 4321);
let modelIdsCache = null;

test(".env loads required OpenAI configuration", () => {
  assert.equal(envInfo.loaded, true, ".env should exist and load");
  assert.ok(apiKey, "LLM_API_KEY is required");
  assert.ok(model, "LLM_MODEL is required");
  assert.ok(/^https?:\/\//.test(baseUrl), "LLM_BASE_URL must be an HTTP(S) URL");
});

test("OpenAI-compatible API base URL and key are reachable", async () => {
  const response = await openAiFetch("/models", {
    method: "GET"
  });
  assert.equal(response.ok, true, formatOpenAiFailure("models list", response));
  assert.ok(Array.isArray(response.body?.data), "models list should include a data array");
});

test("configured model can be requested from the OpenAI-compatible API", async () => {
  const response = await openAiFetch(`/models/${encodeURIComponent(model)}`, {
    method: "GET"
  });
  let message = formatOpenAiFailure("model lookup", response);
  if (!response.ok && response.status === 404) {
    const closeMatches = closeModelMatches(model, await getVisibleModelIds());
    if (closeMatches.length) {
      message += ` Close visible model IDs: ${closeMatches.join(", ")}`;
    }
  }
  assert.equal(response.ok, true, message);
});

test("chat completions accepts the configured model", async () => {
  const response = await openAiFetch("/chat/completions", {
    method: "POST",
    body: {
      model,
      messages: [
        {
          role: "user",
          content: "Reply with exactly: ok"
        }
      ],
      max_completion_tokens: 8
    }
  });

  assert.equal(response.ok, true, formatOpenAiFailure("chat completion", response));
  assert.ok(response.body?.choices?.[0]?.message?.content, "response should include assistant content");
});

test("local /api/ask remains usable with the configured inference path", async (t) => {
  const response = await fetch(`http://localhost:${localPort}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: "What warm introductions could we leverage to get in touch with Mattermost?"
    })
  }).catch((error) => ({ networkError: error }));

  if (response.networkError) {
    t.skip(`local server is not running on http://localhost:${localPort}`);
    return;
  }

  const body = await response.json();
  assert.equal(response.ok, true, `local /api/ask failed: ${body.error || response.status}`);
  assert.equal(body.title, "Warm Paths to Mattermost");
  assert.ok(Array.isArray(body.paths), "graph answer should include paths");
  if (body.llm?.enabled === false) {
    t.diagnostic(`LLM fallback reason: ${body.llm.error || body.llm.reason}`);
  }
});

async function openAiFetch(pathname, options = {}) {
  const response = await fetch(`${baseUrl}${pathname}`, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = { raw: text.slice(0, 300) };
  }

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    body
  };
}

async function getVisibleModelIds() {
  if (modelIdsCache) return modelIdsCache;
  const response = await openAiFetch("/models", { method: "GET" });
  modelIdsCache = response.body?.data?.map((item) => item.id).filter(Boolean) || [];
  return modelIdsCache;
}

function closeModelMatches(value, ids) {
  const key = String(value || "").toLowerCase();
  const familyMatches = ids.filter((id) => id.toLowerCase().startsWith(`${key}-`)).sort();
  if (familyMatches.length) return familyMatches.slice(0, 10);

  const prefix = key.replace(/[-.]?[^-.]*$/, "");
  return ids
    .filter((id) => id.toLowerCase().startsWith(prefix || key.slice(0, 5)))
    .sort()
    .slice(0, 10);
}

function formatOpenAiFailure(operation, response) {
  const message = response.body?.error?.message || response.body?.message || response.statusText || "unknown error";
  const code = response.body?.error?.code || response.body?.error?.type || "no_code";
  return `${operation} failed with HTTP ${response.status} (${code}): ${message}`;
}
