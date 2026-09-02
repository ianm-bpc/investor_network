const fs = require("node:fs");

function loadEnvFile(filePath, options = {}) {
  if (!fs.existsSync(filePath)) {
    return { loaded: false, path: filePath, count: 0 };
  }

  const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  let count = 0;
  for (const line of raw.split(/\r?\n/)) {
    const parsed = parseEnvLine(line);
    if (!parsed) continue;
    if (!options.override && process.env[parsed.key] !== undefined) continue;
    process.env[parsed.key] = parsed.value;
    count += 1;
  }

  return { loaded: true, path: filePath, count };
}

function parseEnvLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return null;

  const match = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(trimmed);
  if (!match) return null;

  const key = match[1];
  let value = match[2].trim();
  const quote = value[0];
  if ((quote === "\"" || quote === "'") && value.endsWith(quote)) {
    value = value.slice(1, -1);
    if (quote === "\"") {
      value = value
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\t/g, "\t")
        .replace(/\\"/g, "\"")
        .replace(/\\\\/g, "\\");
    }
  } else {
    value = value.replace(/\s+#.*$/, "").trim();
  }

  return { key, value };
}

module.exports = {
  loadEnvFile,
  parseEnvLine
};
