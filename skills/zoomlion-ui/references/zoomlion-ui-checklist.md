# Zoomlion UI Checklist

Use this checklist after every audit, refactor, or generation task. Report results as `Pass`, `Partial`, `Fail`, or `Needs manual review`.

## Severity guide

- **P0**: Breaks business logic, accessibility, readability, or the core brand direction.
- **P1**: Major visual mismatch or inconsistent component behavior.
- **P2**: Polish issue, small spacing/type/motion inconsistency.

## 1. Business logic safety

- [ ] Existing routes are unchanged unless requested.
- [ ] API calls, data fetching, query keys, mutations, and request parameters are unchanged unless requested.
- [ ] Component props and exported names remain backward-compatible unless requested.
- [ ] Form validation and submit behavior are unchanged unless requested.
- [ ] Permission checks, auth guards, analytics, and tracking are not removed.
- [ ] No placeholder/mock data replaces real data unless explicitly marked.

## 2. Brand direction

- [ ] The page communicates industrial strength and high-end manufacturing.
- [ ] The visual tone is professional, reliable, stable, and enterprise-grade.
- [ ] Green technology / ESG cues appear as precise accents.
- [ ] The layout feels international and bilingual-friendly where relevant.
- [ ] Product/service information is prioritized over decoration.

## 3. Color

- [ ] Primary CTA uses brand green or mapped project token.
- [ ] Button hover darkens by about 8–12% or uses an equivalent accessible state.
- [ ] Deep modules use star gray / industrial dark gray rather than pure black when possible.
- [ ] Backgrounds use white, light gray, or subtle green-gray rather than loud color fills.
- [ ] Borders are low-contrast industrial neutrals.
- [ ] Semantic colors are used only for semantic states.
- [ ] No generic SaaS blue-purple gradient dominates the page.
- [ ] Color contrast is readable on image overlays and buttons.

## 4. Typography

- [ ] H1/H2/H3 hierarchy is clear.
- [ ] Chinese and English fonts use clean sans-serif stacks.
- [ ] Hero/page titles are strong enough: usually 32–64px depending on viewport.
- [ ] Body text remains readable at 14–16px.
- [ ] Line heights are stable and not cramped.
- [ ] Large metrics use number-friendly or tabular/condensed styling where available.
- [ ] Text on imagery has sufficient overlay/contrast.

## 5. Layout and spacing

- [ ] Desktop layout uses a clear 1200–1440px container or intentional full-width hero.
- [ ] Grid alignment is consistent across sections.
- [ ] Section spacing is disciplined: no random large gaps or cramped blocks.
- [ ] Card grids respond cleanly: 3–4 columns desktop, 2 tablet, 1 mobile.
- [ ] Footer is structured and information-rich.
- [ ] Mobile layout preserves content hierarchy and CTA accessibility.

## 6. Imagery

- [ ] Hero/product sections allocate sufficient space for machinery, factory, construction, service, or ESG imagery.
- [ ] Images are not unrelated office/lifestyle stock photos unless context requires them.
- [ ] Cropping preserves equipment details.
- [ ] Image overlays preserve title readability.
- [ ] Placeholder imagery is explicitly replaceable and not presented as official.

## 7. Components

### Header

- [ ] Navigation is stable, horizontal, and enterprise-oriented on desktop.
- [ ] Product/service categories are easy to discover.
- [ ] Active and hover states use restrained green indicators.
- [ ] Mobile menu is accessible and does not hide critical navigation.

### Hero

- [ ] Clear short headline.
- [ ] Supporting text is concise.
- [ ] Primary CTA is visible and brand-green.
- [ ] Secondary CTA is neutral/outline.
- [ ] Image or video area supports industrial/manufacturing identity.

### Buttons

- [ ] Primary, secondary, disabled, hover, focus, and active states exist.
- [ ] Radius is restrained, usually 4–8px.
- [ ] Button text is action-oriented.
- [ ] Focus ring is visible.

### Cards

- [ ] Radius is usually 8–12px, not overly playful.
- [ ] Border and shadow are restrained.
- [ ] Hover effects are subtle.
- [ ] Image aspect ratios are consistent.
- [ ] Card titles and metadata are scannable.

### Product cards

- [ ] Product/category name is prominent.
- [ ] Short description or model information exists.
- [ ] 2–4 key parameters are shown if available.
- [ ] CTA is clear.
- [ ] Card does not look like a generic ecommerce tile if the context is corporate/product center.

### News cards

- [ ] Date, category/source, title, and summary are clear.
- [ ] Hover state improves affordance without excessive motion.
- [ ] Long titles truncate or wrap cleanly.

### Data cards

- [ ] Large number is readable.
- [ ] Unit and explanation are visible.
- [ ] Green accent is used sparingly.
- [ ] Layout does not exaggerate unverifiable claims.

### Forms and tables

- [ ] Labels, helper text, error states, and focus states are clear.
- [ ] Tables have readable header rows and row hover states.
- [ ] Density is suitable for enterprise/admin use.
- [ ] Status badges use semantic colors.

## 8. Motion and interaction

- [ ] Hover transitions use 180–240ms.
- [ ] Scroll animations are subtle and do not block reading.
- [ ] Image hover scale stays near 1.02–1.05.
- [ ] Card lift stays near -1px to -4px.
- [ ] No bouncy, playful, flashing, or neon animations.
- [ ] Motion respects `prefers-reduced-motion` when implementation scope allows.

## 9. Accessibility

- [ ] Semantic headings are ordered logically.
- [ ] Interactive elements are keyboard reachable.
- [ ] Visible focus states exist.
- [ ] Images have meaningful alt text or are marked decorative.
- [ ] Contrast is sufficient for text, buttons, and overlays.
- [ ] Form fields have labels.

## 10. Code quality

- [ ] Tokens are reused instead of repeated magic values.
- [ ] UI primitives are reusable where practical.
- [ ] Styling approach matches the existing project: Tailwind, CSS modules, styled-components, etc.
- [ ] No unrelated dependency is added without need.
- [ ] No global CSS overrides break unrelated pages.
- [ ] Lint/type/build checks are run when available and safe.

## Final report template

```md
## Zoomlion UI Checklist Result

### Pass
- ...

### Partial / Needs manual review
- ...

### Issues
| Priority | Area | Issue | Suggested fix |
|---|---|---|---|
| P0 | Business logic | ... | ... |
| P1 | Color | ... | ... |
| P2 | Motion | ... | ... |

### Files changed
- ...

### Brand rules applied
- ...

### Assumptions
- ...
```
