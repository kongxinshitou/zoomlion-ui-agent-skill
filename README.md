# Zoomlion UI Agent Skill

Unofficial Zoomlion-inspired UI design skill for **Codex** and **Claude Code**.

This repository packages a reusable frontend/UI skill that helps AI coding agents design, refactor, and review industrial brand pages inspired by 中联重科 / Zoomlion visual language: green technology, high-end manufacturing, engineering machinery, internationalization, ESG, reliability, and professional enterprise UI.

> Disclaimer: This project is community-made and is **not affiliated with, endorsed by, or sponsored by Zoomlion**. Zoomlion trademarks, logos, and official brand assets belong to their respective owners. Use this repository as an implementation aid and verify brand-critical output against official brand guidelines.

## What this skill does

- Installs a `zoomlion-ui` skill for Codex and/or Claude Code.
- Provides design rules, tokens, component guidance, prompt templates, and checklists.
- Helps agents refactor UI without changing business logic.
- Encourages consistent industrial, green, high-end manufacturing visual direction.

## One-command install

Install for both Codex and Claude Code:

```bash
npx github:kongxinshitou/zoomlion-ui-agent-skill install --target both --scope user
```

Install only for Codex:

```bash
npx github:kongxinshitou/zoomlion-ui-agent-skill install --target codex --scope user
```

Install only for Claude Code:

```bash
npx github:kongxinshitou/zoomlion-ui-agent-skill install --target claude --scope user
```

Install into the current project instead of your user profile:

```bash
npx github:kongxinshitou/zoomlion-ui-agent-skill install --target both --scope project
```

## Installed paths

| Target | User scope path | Project scope path |
|---|---|---|
| Codex | `~/.agents/skills/zoomlion-ui` | `.agents/skills/zoomlion-ui` |
| Claude Code | `~/.claude/skills/zoomlion-ui` | `.claude/skills/zoomlion-ui` |

## Usage

### Codex

```txt
$zoomlion-ui Refactor src/pages/Home.tsx into a Zoomlion-inspired industrial homepage. Keep business logic unchanged.
```

### Claude Code

```txt
/zoomlion-ui Refactor src/pages/products/page.tsx into a Zoomlion-inspired product center UI. Keep API calls and props unchanged.
```

## Recommended project setup

For a real frontend project, add this to `AGENTS.md` or `CLAUDE.md`:

```md
## Zoomlion UI rules

When working on 中联重科 / Zoomlion themed UI, product pages, news pages, service pages, ESG pages, investor pages, marketing pages, industrial dashboards, or engineering machinery interfaces, use the installed `zoomlion-ui` skill.

Preserve business logic. Apply the visual tokens, component rules, motion rules, and checklist from the skill. Avoid generic SaaS blue-purple gradients, cute illustration styles, cyberpunk neon, luxury black-gold, and unrelated consumer app aesthetics.
```

## Repository structure

```txt
.
├─ bin/install.mjs
├─ install.sh
├─ package.json
├─ skills/zoomlion-ui/
│  ├─ SKILL.md
│  ├─ references/
│  ├─ examples/
│  └─ scripts/
├─ plugins/zoomlion-ui/
│  ├─ .codex-plugin/plugin.json
│  ├─ .claude-plugin/plugin.json
│  └─ skills/zoomlion-ui/
├─ .agents/plugins/marketplace.json
├─ .claude-plugin/marketplace.json
└─ scripts/validate-repo.mjs
```

## Manual install

```bash
mkdir -p ~/.agents/skills ~/.claude/skills
cp -R skills/zoomlion-ui ~/.agents/skills/zoomlion-ui
cp -R skills/zoomlion-ui ~/.claude/skills/zoomlion-ui
```

## Development

Validate repository structure:

```bash
npm run validate
```

Test project-scope install locally:

```bash
node bin/install.mjs install --target both --scope project --force --dry-run
```

## License

MIT. Brand names and trademarks are not covered by this license.
