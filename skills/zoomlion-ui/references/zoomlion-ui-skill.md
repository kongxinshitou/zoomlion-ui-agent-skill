# Zoomlion UI Skill Reference

## Skill goal

Help designers, frontend engineers, and AI coding agents create or optimize UI that feels aligned with a Zoomlion / 中联重科 inspired brand direction: industrial machinery, intelligent manufacturing, green technology, international service, professional reliability, and high-end equipment.

This is an unofficial practical design aid. Always verify production work against official Zoomlion brand guidelines when available.

## Brand keywords

- Industrial strength
- High-end manufacturing
- Intelligent equipment
- Green development
- Internationalization
- Professional service
- Reliable engineering
- Precision and stability

## Suitable scenarios

Use this skill for:

- Corporate homepage
- Product center / product list / product detail
- News center and press releases
- Service support pages
- ESG / sustainability pages
- Investor relations pages
- International business pages
- Engineering machinery dashboards
- Dealer/service network portals
- Industrial marketing landing pages

## Unsuitable scenarios

Do not use this style for:

- Entertainment or gaming UI
- Cute cartoon consumer apps
- Luxury black-gold branding
- Cyberpunk neon interfaces
- Generic SaaS blue-purple dashboards
- Youth fashion or lifestyle pages

## Visual principles

### 1. Industrial but clean

Use strong grid alignment, white/gray backgrounds, restrained shadows, precise spacing, and clear typography. Avoid decorative clutter.

### 2. Green as technology accent

Use Aurora Green as a functional accent for primary CTA, active states, data highlights, selected tabs, and key metrics. Avoid flooding the whole page with green.

### 3. Machinery imagery leads the emotion

Hero and product sections should rely on large equipment imagery, manufacturing scenes, construction sites, service networks, and global business scenes.

### 4. Stable hierarchy

Use clear H1/H2/H3 hierarchy, restrained line heights, consistent section spacing, and predictable card grids.

### 5. International professionalism

For English or bilingual pages, keep typography clean and global. Avoid overly local decorative motifs unless the page is specifically cultural/PR-oriented.

## Color specification

Recommended tokens:

```css
:root {
  --zl-color-aurora-green: #AACE39;
  --zl-color-aurora-green-hover: #99BA2F;
  --zl-color-aurora-green-active: #86A526;
  --zl-color-star-gray: #383842;
  --zl-color-gravel-gray: #6B6F76;
  --zl-color-text-primary: #1F2329;
  --zl-color-text-secondary: #5F6670;
  --zl-color-text-muted: #8A9199;
  --zl-color-bg-page: #F5F7F4;
  --zl-color-bg-section: #F7F8FA;
  --zl-color-bg-card: #FFFFFF;
  --zl-color-border: #E5E8EB;
  --zl-color-footer: #262A31;
}
```

Usage rules:

- Primary button: `--zl-color-aurora-green`
- Primary hover: darken by about 8%-12%
- Main dark text/footer: `--zl-color-star-gray` or darker neutral
- Section backgrounds: white, soft gray, or very light green-gray
- Borders: low-contrast industrial neutral
- Data highlight: green accent plus dark text

## Typography

Recommended font stacks:

```css
--zl-font-sans-cn: "PingFang SC", "Microsoft YaHei", "Noto Sans SC", Arial, sans-serif;
--zl-font-sans-en: Inter, "Helvetica Neue", Arial, sans-serif;
--zl-font-number: DIN, "Roboto Condensed", Inter, Arial, sans-serif;
```

Recommended scale:

- H1 desktop: 44-64px, weight 600-700, line-height 1.08-1.18
- H1 mobile: 32-40px
- H2 desktop: 32-44px
- H3/card title: 20-28px
- Body: 14-16px
- Caption/meta: 12-14px
- Data numbers: 40-72px, condensed or tabular style when available

Rules:

- Avoid overly thin text on image backgrounds.
- Keep Chinese titles compact and confident.
- Use uppercase/labeled English sparingly for section labels.
- Keep paragraph width around 560-760px for readability.

## Layout

Recommended layout tokens:

```css
--zl-container-max: 1200px;
--zl-container-wide: 1440px;
--zl-section-y: 72px;
--zl-section-y-lg: 96px;
--zl-card-radius: 8px;
--zl-button-radius: 6px;
```

Rules:

- Use a 12-column desktop grid.
- Container width: 1200-1440px depending on page type.
- Hero height: 560-760px desktop; 420-560px mobile.
- Product/news card grid: 3-4 columns desktop, 2 columns tablet, 1 column mobile.
- Use clear section rhythm: Hero -> product/service/data/news -> footer.
- Keep footer dark, structured, and information-heavy.

## Components

### Header

- White or transparent-over-hero header.
- Desktop nav should be stable, horizontal, and information-rich.
- Active/hover state uses green underline, green text, or subtle background.
- Use dropdown mega-menu for product/service categories when needed.

### Hero Banner

- Large product/site/manufacturing imagery.
- Title should be bold, short, and confidence-building.
- Overlay should be dark gradient or gray-green mask for readability.
- Primary CTA uses green, secondary CTA can be outline/ghost.

### Button

Primary:

```css
.zl-btn-primary {
  background: var(--zl-color-aurora-green);
  color: #111;
  border-radius: 6px;
  padding: 10px 22px;
  font-weight: 600;
  transition: background-color 200ms ease-out, transform 200ms ease-out, box-shadow 200ms ease-out;
}
.zl-btn-primary:hover {
  background: var(--zl-color-aurora-green-hover);
  transform: translateY(-1px);
}
```

Secondary:

- White or transparent background.
- Gray border.
- Hover border/text turns green.

### Card

- White background.
- 1px neutral border.
- Radius 8-12px.
- Subtle shadow only on hover.
- Image area should be clean and product-focused.

### Product Card

Must include:

- Product image or category image
- Product/category name
- Model or short description
- 2-4 key parameters when available
- CTA such as “View Details” / “查看详情”

### News Card

- Use date, category, title, short summary.
- Image optional; if present, use 16:9 or 4:3.
- Hover: title green, image slight scale, subtle shadow.

### Data Card

- Large numeric value.
- Unit label.
- Short explanation.
- Green accent line or dot.

### Form and Table

- Industrial admin feel: clean border, compact density, clear hover state.
- Header row light gray.
- Primary action green.
- Avoid colorful dashboards unless data semantics require it.

## Motion

Recommended:

- Hover transition: 180-240ms.
- Image scale: 1.02-1.05.
- Card lift: translateY(-2px to -4px).
- Number count-up for achievements.
- Scroll-in animation: subtle opacity + translateY.

Avoid:

- Bouncy transitions.
- Excessive parallax.
- Neon glow.
- Long animation durations.
- Motion that hides information.

## Frontend implementation suggestions

### Tailwind tokens

```js
export const zoomlionTheme = {
  colors: {
    zl: {
      green: "#AACE39",
      greenHover: "#99BA2F",
      starGray: "#383842",
      gravelGray: "#6B6F76",
      page: "#F5F7F4",
      section: "#F7F8FA",
      border: "#E5E8EB"
    }
  },
  borderRadius: {
    zl: "8px",
    "zl-button": "6px"
  },
  boxShadow: {
    zl: "0 10px 30px rgba(31, 35, 41, 0.08)"
  }
};
```

### Refactor approach

When changing existing code:

1. Identify UI-only components.
2. Preserve props and business logic.
3. Add or map tokens first.
4. Refactor section layout.
5. Refactor components.
6. Run checklist.
7. Report remaining brand risks.

## UI generation prompt template

```text
Use the zoomlion-ui skill to generate/refactor this UI.

Goal:
- Create a Zoomlion-inspired industrial, technological, green, international, professional interface.

Constraints:
- Keep business logic, API calls, routes, props, and data structures unchanged.
- Use Aurora Green for primary CTA and selected states.
- Use Star Gray / Gravel Gray / white / soft industrial gray backgrounds.
- Use strong machinery/product imagery areas.
- Avoid generic SaaS blue-purple gradients, cyberpunk neon, cute illustrations, and luxury black-gold.

Deliver:
- Code changes
- Files changed
- Brand rules applied
- Checklist result
```

## Forbidden items

- Replacing product/engineering imagery with unrelated lifestyle visuals.
- Using purple/blue SaaS gradients as primary style.
- Using excessive rounded corners like 24-32px for industrial cards.
- Using cartoon mascots or playful illustration as the main visual system.
- Hiding important product or service information behind decorative animations.
- Changing business logic during a UI-only task.
