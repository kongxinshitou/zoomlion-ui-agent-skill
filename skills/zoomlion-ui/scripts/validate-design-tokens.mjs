#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());
const exts = new Set([".css", ".scss", ".sass", ".less", ".tsx", ".jsx", ".ts", ".js", ".vue", ".html"]);
const ignoreDirs = new Set(["node_modules", ".git", "dist", "build", ".next", ".nuxt", "coverage"]);

const signals = [
  { name: "CSS variable --zl-green", pattern: /--zl-green\b/ },
  { name: "Reference green #AACE39", pattern: /#AACE39/i },
  { name: "Tailwind zl-green", pattern: /\bzl-green\b/ },
  { name: "Zoomlion keyword", pattern: /zoomlion|中联重科/i }
];

const warnings = [
  { name: "Generic SaaS blue-purple gradient", pattern: /from-(blue|sky|indigo|violet|purple)-\d+\s+to-(purple|violet|fuchsia|pink)-\d+/ },
  { name: "Excessive neon/glow wording", pattern: /neon|cyberpunk|glow-?xl/i },
  { name: "Very large playful radius", pattern: /rounded-(3xl|full)/ }
];

const files = [];
walk(root);

const foundSignals = new Map(signals.map((item) => [item.name, 0]));
const foundWarnings = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const signal of signals) {
    if (signal.pattern.test(text)) foundSignals.set(signal.name, foundSignals.get(signal.name) + 1);
  }
  for (const warning of warnings) {
    if (warning.pattern.test(text)) foundWarnings.push({ file: path.relative(root, file), name: warning.name });
  }
}

console.log(`Scanned ${files.length} files under ${root}`);
console.log("\nZoomlion token signals:");
for (const [name, count] of foundSignals) {
  console.log(`- ${name}: ${count > 0 ? `found in ${count} file(s)` : "not found"}`);
}

if (foundWarnings.length) {
  console.log("\nPotential visual anti-patterns:");
  for (const warning of foundWarnings) console.log(`- ${warning.file}: ${warning.name}`);
} else {
  console.log("\nNo obvious anti-patterns found.");
}

const anySignal = [...foundSignals.values()].some((count) => count > 0);
if (!anySignal) {
  console.log("\nResult: no Zoomlion token signal found yet. Consider adding tokens from references/zoomlion-design-assets.md.");
  process.exitCode = 1;
} else {
  console.log("\nResult: token signal found.");
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoreDirs.has(entry.name)) walk(path.join(dir, entry.name));
    } else if (entry.isFile() && exts.has(path.extname(entry.name))) {
      files.push(path.join(dir, entry.name));
    }
  }
}
