# Component Library Prompt

Use `zoomlion-ui` to create or refactor reusable UI primitives for a Zoomlion-inspired frontend.

## Goal

Build a small reusable component set that gives the project a consistent industrial enterprise design language.

## Components to include when relevant

- `ZlButton`: primary, secondary, ghost, disabled, loading
- `ZlCard`: default, hoverable, product, news, data/KPI
- `ZlSectionHeader`: eyebrow, title, description, CTA
- `ZlProductCard`: image, category/model, description, parameters, CTA
- `ZlNewsCard`: date, category, title, summary, image
- `ZlDataCard`: number, unit, label, trend/status
- `ZlBadge`: success, warning, danger, info, neutral
- `ZlTable`: enterprise table density, header, row hover, status badge
- `ZlHero`: title, subtitle, CTA group, image/overlay slot

## Constraints

- Match the existing framework and styling system.
- Do not introduce a new UI library unless the project already uses it or the user asks.
- Prefer design tokens over hardcoded colors.
- Keep components accessible: semantic elements, keyboard focus, ARIA only when needed.
- Preserve existing component exports if refactoring.

## Visual rules

- Radius: restrained, usually 6–12px.
- Shadow: subtle; stronger only on hover.
- Motion: 180–240ms hover/focus transitions.
- Color: green primary accent, industrial gray/white surfaces, semantic colors only for semantic states.

## Required output

Report components created/changed, token strategy, usage examples, validation commands, and checklist result.
