#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "package.json",
  "bin/install.mjs",
  "README.md",
  "skills/zoomlion-ui/SKILL.md",
  "skills/zoomlion-ui/references/zoomlion-ui-skill.md",
  "skills/zoomlion-ui/references/zoomlion-design-assets.md",
  "skills/zoomlion-ui/references/zoomlion-ui-checklist.md",
  "skills/zoomlion-ui/references/implementation-playbook.md",
  "skills/zoomlion-ui/references/brand-evidence-notes.md",
  "skills/zoomlion-ui/examples/homepage-refactor.prompt.md",
  "skills/zoomlion-ui/examples/product-page.prompt.md",
  "skills/zoomlion-ui/examples/ui-audit.prompt.md",
  "skills/zoomlion-ui/examples/dashboard-refactor.prompt.md",
  "skills/zoomlion-ui/examples/component-library.prompt.md",
  "skills/zoomlion-ui/scripts/validate-design-tokens.mjs",
  "plugins/zoomlion-ui/.codex-plugin/plugin.json",
  "plugins/zoomlion-ui/.claude-plugin/plugin.json",
  ".agents/plugins/marketplace.json",
  ".claude-plugin/marketplace.json"
];

const errors = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
}

const packagePath = path.join(root, "package.json");
if (fs.existsSync(packagePath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    if (!pkg.bin || pkg.bin["zoomlion-ui-skill"] !== "./bin/install.mjs") {
      errors.push("package.json must expose bin.zoomlion-ui-skill = ./bin/install.mjs");
    }
    if (!pkg.scripts || !pkg.scripts.validate) {
      errors.push("package.json must define scripts.validate");
    }
  } catch (error) {
    errors.push(`package.json is not valid JSON: ${error.message}`);
  }
}

const skillPath = path.join(root, "skills/zoomlion-ui/SKILL.md");
if (fs.existsSync(skillPath)) {
  const skill = fs.readFileSync(skillPath, "utf8");
  if (!/^---[\s\S]*?name:\s*zoomlion-ui[\s\S]*?description:/m.test(skill)) {
    errors.push("SKILL.md must include frontmatter with name and description");
  }

  const referenceMatches = [...skill.matchAll(/`(references\/[^`]+)`/g)].map((match) => match[1]);
  for (const ref of referenceMatches) {
    const refPath = path.join(root, "skills/zoomlion-ui", ref);
    if (!fs.existsSync(refPath)) errors.push(`SKILL.md references missing file: ${ref}`);
  }
}

if (errors.length > 0) {
  console.error("Zoomlion UI Agent Skill validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Zoomlion UI Agent Skill validation passed.");
