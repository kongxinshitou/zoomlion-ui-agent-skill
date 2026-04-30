---
name: zoomlion-ui
description: Use this skill when designing, refactoring, auditing, or generating frontend UI for 中联重科 / Zoomlion themed websites, product pages, news pages, ESG pages, service pages, investor pages, industrial dashboards, engineering machinery interfaces, or high-end manufacturing brand pages.
---

# Zoomlion UI Skill

Use this skill to make frontend UI conform to a Zoomlion / 中联重科 inspired industrial, technological, global, green, high-end manufacturing visual style.

## Read first

Before making UI decisions, read these references as needed:

- `references/zoomlion-ui-skill.md`
- `references/zoomlion-design-assets.md`
- `references/zoomlion-ui-checklist.md`

## Core rules

1. Preserve existing business logic, routes, API calls, data structures, and component props unless the user explicitly asks for functional changes.
2. Apply a Zoomlion-inspired visual direction:
   - industrial
   - technological
   - international
   - green / ESG
   - high-end manufacturing
   - reliable and professional
3. Use Aurora Green as the primary CTA/accent color, with Star Gray, Gravel Gray, white, and industrial neutral backgrounds.
4. Prefer clear hierarchy, restrained shadows, strong product imagery, precise grid layouts, and professional spacing.
5. Avoid generic SaaS blue-purple gradients, cute illustrations, cyberpunk neon, luxury black-gold, over-rounded mobile-app styles, and unrelated consumer visuals.
6. After code changes, run the checklist in `references/zoomlion-ui-checklist.md`.

## Frontend implementation defaults

- Prefer CSS variables or Tailwind theme tokens instead of one-off hardcoded colors.
- Keep UI changes isolated from data-fetching, routing, state management, and domain logic.
- For React/Vue pages, refactor visual structure into reusable Header, Hero, Card, ProductCard, NewsCard, DataCard, Footer, and Section components when appropriate.
- Use restrained transitions: 180ms-240ms, ease-out, subtle translate/scale/shadow changes only.
- Use responsive grids: 12-column desktop, 2-4 column cards on desktop, 1 column on mobile.

## Output format

When modifying code, report:

- Files changed
- Brand rules applied
- Components adjusted
- Checklist result
- Remaining manual review risks
