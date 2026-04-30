#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const args = process.argv.slice(2);

const command = args[0] || "install";
const target = getArg("--target", "both");
const scope = getArg("--scope", "user");

if (["-h", "--help", "help"].includes(command)) {
  printHelp();
  process.exit(0);
}

if (command !== "install") {
  console.error(`Unknown command: ${command}`);
  printHelp();
  process.exit(1);
}

if (!["both", "codex", "claude"].includes(target)) {
  console.error(`Invalid --target: ${target}. Use both, codex, or claude.`);
  process.exit(1);
}

if (!["user", "project"].includes(scope)) {
  console.error(`Invalid --scope: ${scope}. Use user or project.`);
  process.exit(1);
}

const sourceSkill = path.join(repoRoot, "skills", "zoomlion-ui");
const sourceSkillFile = path.join(sourceSkill, "SKILL.md");

if (!fs.existsSync(sourceSkillFile)) {
  console.error(`Missing skill file: ${sourceSkillFile}`);
  console.error("The package is incomplete. Please reinstall from the repository.");
  process.exit(1);
}

const destinations = [];

if (target === "both" || target === "codex") {
  destinations.push({
    name: "Codex",
    path:
      scope === "project"
        ? path.resolve(process.cwd(), ".agents", "skills", "zoomlion-ui")
        : path.join(os.homedir(), ".agents", "skills", "zoomlion-ui")
  });
}

if (target === "both" || target === "claude") {
  destinations.push({
    name: "Claude Code",
    path:
      scope === "project"
        ? path.resolve(process.cwd(), ".claude", "skills", "zoomlion-ui")
        : path.join(os.homedir(), ".claude", "skills", "zoomlion-ui")
  });
}

for (const dest of destinations) {
  fs.rmSync(dest.path, { recursive: true, force: true });
  copyDir(sourceSkill, dest.path);
  console.log(`Installed zoomlion-ui skill for ${dest.name}: ${dest.path}`);
}

console.log("");
console.log("Done.");
console.log("");
console.log("Use in Codex:");
console.log("  $zoomlion-ui Refactor this page into a Zoomlion-inspired product center UI.");
console.log("");
console.log("Use in Claude Code:");
console.log("  /zoomlion-ui Refactor this page into a Zoomlion-inspired product center UI.");

function getArg(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] || fallback;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function printHelp() {
  console.log(`Zoomlion UI Agent Skill installer

Usage:
  npx github:kongxinshitou/zoomlion-ui-agent-skill install --target both --scope user

Options:
  --target  both | codex | claude   Default: both
  --scope   user | project          Default: user

Destinations:
  Codex user:        ~/.agents/skills/zoomlion-ui
  Codex project:     ./.agents/skills/zoomlion-ui
  Claude user:       ~/.claude/skills/zoomlion-ui
  Claude project:    ./.claude/skills/zoomlion-ui
`);
}
