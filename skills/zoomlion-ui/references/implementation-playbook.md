# Implementation Playbook

This playbook tells Codex, Claude Code, or another coding agent how to apply the `zoomlion-ui` Skill safely in real frontend projects.

## Workflow A: UI audit only

Use when the user asks to review, inspect, critique, or find problems.

1. Identify framework and styling system.
   - React, Vue, Next.js, Nuxt, Vite, plain HTML, etc.
   - Tailwind, CSS modules, SCSS, styled-components, shadcn/ui, Ant Design, Element Plus, etc.
2. Read relevant UI files only.
3. Read `references/zoomlion-ui-checklist.md`.
4. Compare current UI against:
   - Brand direction
   - Color
   - Typography
   - Layout
   - Components
   - Imagery
   - Motion
   - Accessibility
   - Business logic safety
5. Do not modify code unless the user explicitly asks.
6. Output P0/P1/P2 issues and concrete fixes.

Recommended output:

```md
## Audit result

### P0
- ...

### P1
- ...

### P2
- ...

### Suggested implementation order
1. ...
2. ...
```

## Workflow B: UI refactor

Use when the user asks to improve, optimize, redesign, or refactor an existing UI.

1. Determine the affected files.
2. Locate business logic and UI-only layers.
3. Preserve:
   - API calls
   - Routes
   - Props
   - State shape
   - Validation
   - Permission logic
   - Analytics/tracking
4. Add or map design tokens.
5. Refactor layout before details:
   - Container
   - Grid
   - Section rhythm
   - Responsive behavior
6. Refactor components:
   - Header
   - Hero
   - Product card
   - News card
   - Data card
   - Form/table
   - Footer
7. Add interaction states:
   - Hover
   - Active
   - Focus
   - Disabled
   - Loading if applicable
8. Run available checks when safe:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
   - Project-specific tests
9. Report changed files and checklist result.

## Workflow C: Generate a new page/component

Use when the user asks to create UI from scratch.

1. Infer page type:
   - Homepage
   - Product center
   - Product detail
   - News center
   - ESG page
   - Service support
   - Investor relations
   - Dashboard/admin
2. Use the appropriate layout recipe below.
3. Build with semantic HTML and responsive structure.
4. Use placeholder images only when real assets are absent.
5. Mark placeholder images as replaceable.
6. Include accessible focus states and alt text.

## Page recipes

### Corporate homepage

Recommended structure:

1. Header / navigation
2. Hero banner with machinery/manufacturing imagery
3. Product categories
4. Technology / intelligent manufacturing section
5. Data achievements module
6. News center
7. Service/global network module
8. ESG or green development module
9. Footer

### Product center

Recommended structure:

1. Header
2. Compact page hero / breadcrumb
3. Product category tabs or sidebar
4. Product grid
5. Featured product or solution banner
6. Service/parts CTA
7. Footer

Product card must include:

- Image
- Product/category name
- Short description
- 2–4 parameters if available
- CTA

### Product detail

Recommended structure:

1. Breadcrumb
2. Product hero: image + name + category + CTA
3. Key parameters
4. Features/advantages
5. Application scenarios
6. Gallery or video
7. Downloads/service CTA
8. Related products

### News center

Recommended structure:

1. Page hero
2. Featured news
3. Category filters
4. News list/grid
5. Pagination
6. Footer

### ESG / sustainability

Recommended structure:

1. Page hero with green/manufacturing imagery
2. ESG pillars
3. Metrics/data cards
4. Initiatives/stories
5. Reports/downloads
6. Footer

### Service support

Recommended structure:

1. Service hero
2. Quick actions: service request, parts, dealer lookup, manuals
3. Global service network
4. Support categories
5. FAQ/contact
6. Footer

### Investor relations

Recommended structure:

1. Conservative header and page hero
2. Stock/announcement/module if available
3. Financial reports
4. Governance
5. Investor contact
6. Document list/table

### Industrial dashboard/admin

Recommended structure:

1. App shell/sidebar/header
2. KPI cards
3. Equipment status table
4. Filters/search
5. Map/chart/panel layout
6. Activity logs/alerts

Style:

- Compact, professional, clear hierarchy.
- Green for primary actions and positive/active states.
- Semantic status colors for equipment state.
- Avoid marketing-heavy hero visuals inside dense admin screens.

## Tailwind refactor strategy

When using Tailwind:

1. Prefer adding theme tokens to `tailwind.config.*`.
2. Replace raw colors with `zl-*` utilities.
3. Keep class names readable; extract repeated patterns into components.
4. Avoid excessive arbitrary values unless needed.
5. Use consistent responsive breakpoints.

Example mapping:

```txt
bg-lime-400 -> bg-zl-green
text-gray-900 -> text-zl-text
border-gray-200 -> border-zl-border
rounded-2xl -> rounded-zl-card when the component should feel industrial
shadow-xl -> shadow-zl-card-hover only on hover
```

## CSS modules / SCSS strategy

1. Add variables in a global token file.
2. Import tokens into modules when supported.
3. Create component classes:
   - `.zlButtonPrimary`
   - `.zlProductCard`
   - `.zlSectionHeader`
4. Avoid broad selectors that affect unrelated UI.

## shadcn/ui strategy

1. Keep shadcn components but tune tokens.
2. Use `Button`, `Card`, `Tabs`, `Table`, `Badge`, `Dialog` as primitives.
3. Override variants through className or component variants.
4. Do not add heavy visual effects that conflict with industrial style.

## Ant Design / Element Plus strategy

1. Use theme tokens if available.
2. Map primary color to `#AACE39` carefully and verify contrast.
3. Keep enterprise density for tables/forms.
4. Do not globally override components without checking side effects.

## Accessibility requirements

- Use semantic headings.
- Provide visible focus states.
- Preserve keyboard navigation.
- Use readable contrast over image overlays.
- Add alt text for meaningful product images.
- Respect reduced motion when possible.

## Final response rules for agents

After editing code, always include:

```md
## What changed
- ...

## Brand rules applied
- ...

## Logic preserved
- ...

## Checklist result
- Pass: ...
- Partial: ...
- Needs manual review: ...

## Validation
- Ran: ...
- Not run: ... and why
```
