---
name: zoomlion-ui
description: Design, refactor, review, or generate frontend UI for 中联重科 / Zoomlion inspired websites and apps. Use for Zoomlion-themed corporate pages, product centers, product details, news centers, ESG/sustainability pages, service/support pages, investor pages, international pages, engineering machinery dashboards, industrial IoT/admin screens, and high-end manufacturing marketing pages. Apply industrial, technological, green, international, reliable, professional visual rules while preserving business logic.
---

# Zoomlion UI

Use this Skill to make frontend UI align with a Zoomlion / 中联重科 inspired industrial brand direction: engineering machinery, intelligent manufacturing, green technology, international service, stable enterprise credibility, and high-end equipment.

This is an unofficial implementation aid. Do not claim it is an official Zoomlion brand manual. For production brand-critical work, ask the user to verify against official VI/brand guidelines.

## Progressive loading

Start with this file. Read additional files only when needed:

- `references/zoomlion-ui-skill.md` — complete design and frontend rules.
- `references/zoomlion-design-assets.md` — colors, typography, CSS variables, Tailwind config, reusable UI patterns.
- `references/zoomlion-ui-checklist.md` — audit checklist and acceptance criteria.
- `references/implementation-playbook.md` — step-by-step workflows for auditing, refactoring, and generating UI.
- `references/brand-evidence-notes.md` — evidence notes, assumptions, and usage caveats.
- `examples/*.prompt.md` — copyable prompts for common tasks.

## Use this Skill when

- The user mentions 中联重科, Zoomlion, engineering machinery, construction equipment, industrial equipment, intelligent manufacturing, ESG/green manufacturing, international service networks, product centers, or heavy-equipment corporate websites.
- The task is to improve visual quality, make UI more brand-aligned, create a design system, refactor Tailwind/CSS, review a page, or generate UI components/pages.
- The user asks for a professional industrial enterprise style rather than a generic SaaS style.

## Do not use this Skill when

- The user wants unrelated consumer, entertainment, gaming, fashion, luxury, cute, cartoon, or cyberpunk visual styles.
- The task is purely backend logic, database schema, algorithmic work, DevOps, or API integration with no UI impact.
- The user explicitly requests a different brand system.

## Non-negotiable rules

1. Preserve existing business logic, routes, API calls, data fetching, state management, permissions, form validation, analytics, and component props unless the user explicitly asks for functional changes.
2. Make UI changes through tokens, class names, layout, component composition, copy hierarchy, and visual states first.
3. Prefer reusable design primitives over one-off styling.
4. Avoid inventing official brand claims, proprietary logos, or unreleased assets.
5. If official brand assets are absent, use neutral placeholders and clearly mark them as replaceable.
6. After edits, run the checklist in `references/zoomlion-ui-checklist.md` and report pass/risk items.

## Visual direction summary

Aim for:

- Industrial strength without visual clutter.
- Green technology as a precise accent, not a full-page flood.
- High-end manufacturing confidence: strong grid, sharp hierarchy, restrained motion.
- International enterprise clarity: bilingual-friendly typography and predictable navigation.
- Product-first presentation: machinery imagery, model/category names, parameters, service links.

Avoid:

- Generic SaaS blue-purple gradients.
- Cute illustrations or cartoon mascots as the main visual language.
- Cyberpunk neon glow and excessive glassmorphism.
- Luxury black-gold styling.
- Over-rounded consumer app cards and playful bouncy animation.
- Full-page bright green backgrounds that reduce readability.

## Core tokens

Use these defaults unless the project already defines equivalent tokens:

```css
:root {
  --zl-green: #AACE39;
  --zl-green-hover: #99BA2F;
  --zl-green-active: #86A526;
  --zl-star-gray: #383842;
  --zl-gravel-gray: #6B6F76;
  --zl-text: #1F2329;
  --zl-text-secondary: #5F6670;
  --zl-muted: #8A9199;
  --zl-bg: #F5F7F4;
  --zl-section: #F7F8FA;
  --zl-card: #FFFFFF;
  --zl-border: #E5E8EB;
  --zl-footer: #262A31;
  --zl-radius-card: 8px;
  --zl-radius-button: 6px;
  --zl-shadow-card-hover: 0 12px 32px rgba(31, 35, 41, 0.10);
  --zl-motion-fast: 180ms;
  --zl-motion-base: 220ms;
}
```

## Component defaults

- Header: white or transparent-on-hero, horizontal enterprise nav, product/service mega menu, green active underline.
- Hero: large machinery/manufacturing/global-service visual area, dark gradient overlay, strong title, green primary CTA, neutral secondary CTA.
- Product card: image, category/model name, short description, 2–4 key parameters, restrained border, green hover/CTA.
- News card: date/category/title/summary, optional image, title turns green on hover, image scale 1.02–1.05.
- Data card: large number, unit, short label, small green accent line/dot.
- Table/admin UI: clean borders, light gray header, compact density, green primary actions, semantic status colors only.
- Footer: dark industrial gray, structured link columns, contact/service/global info, restrained contrast.

## Motion defaults

- Duration: 180–240ms for hover/focus; 300–500ms for scroll-in sections.
- Easing: `ease-out` or `cubic-bezier(0.2, 0, 0.2, 1)`.
- Hover: translateY(-1px to -4px), subtle shadow, image scale no more than 1.05.
- Avoid bouncing, long parallax, flashing, neon glow, and motion that hides content.

## Workflows

### If auditing UI

1. Read `references/zoomlion-ui-checklist.md`.
2. Inspect relevant files and screenshots if available.
3. Output P0/P1/P2 issues with concrete fixes.
4. Do not edit code unless the user asks.

### If refactoring UI

1. Identify framework and styling system.
2. Preserve logic and public component APIs.
3. Add/map tokens.
4. Refactor layout, then components, then states and motion.
5. Run lint/typecheck/build if available and safe.
6. Report changed files and checklist result.

### If generating new UI

1. Ask only if critical inputs are missing; otherwise make reasonable assumptions.
2. Build responsive layout with clear desktop/tablet/mobile behavior.
3. Include accessible focus states and semantic HTML.
4. Use replaceable placeholder imagery if official images are unavailable.
5. Provide integration notes for tokens and assets.

## Required final report after code changes

Include:

- Files changed.
- Brand rules applied.
- Preserved logic/props/routes/API notes.
- Checklist summary: pass, partial, needs manual review.
- Any assumptions or assets that need official confirmation.
