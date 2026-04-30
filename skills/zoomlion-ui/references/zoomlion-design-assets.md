# Zoomlion UI Design Assets

This reference provides reusable design assets for the `zoomlion-ui` Skill: tokens, palettes, typography, layouts, component recipes, Tailwind configuration, and prompt-ready patterns.

> Unofficial implementation aid. Replace tokens and imagery with official Zoomlion VI assets whenever available.

## Brand palette

### Primary colors

| Token | Hex | Role |
|---|---:|---|
| `--zl-green` | `#AACE39` | Primary CTA, active state, accent line, selected tab, metric emphasis |
| `--zl-green-hover` | `#99BA2F` | Hover state for primary CTA and active controls |
| `--zl-green-active` | `#86A526` | Pressed state, strong active indicator |
| `--zl-star-gray` | `#383842` | Deep industrial modules, footer, high-emphasis text |
| `--zl-gravel-gray` | `#6B6F76` | Secondary text, icon default, metadata |

### Neutral colors

| Token | Hex | Role |
|---|---:|---|
| `--zl-text` | `#1F2329` | Primary text |
| `--zl-text-secondary` | `#5F6670` | Secondary body text |
| `--zl-muted` | `#8A9199` | Meta text, helper text |
| `--zl-border` | `#E5E8EB` | Card/form/table borders |
| `--zl-border-strong` | `#D2D7DD` | Strong divider and table grid |
| `--zl-bg` | `#F5F7F4` | Page background |
| `--zl-section` | `#F7F8FA` | Section background |
| `--zl-card` | `#FFFFFF` | Card/panel background |
| `--zl-footer` | `#262A31` | Footer and dark enterprise blocks |

### Semantic colors

Use semantic colors only for clear data states. Do not let them overpower the brand green.

| Token | Hex | Role |
|---|---:|---|
| `--zl-success` | `#2EAD5B` | Normal/success state |
| `--zl-warning` | `#D89614` | Warning state |
| `--zl-danger` | `#D93026` | Critical/error state |
| `--zl-info` | `#3B6EA8` | Informational state |

## Typography

```css
:root {
  --zl-font-cn: "PingFang SC", "Microsoft YaHei", "Noto Sans SC", Arial, sans-serif;
  --zl-font-en: Inter, "Helvetica Neue", Arial, sans-serif;
  --zl-font-number: DIN, "Roboto Condensed", Inter, Arial, sans-serif;
}
```

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero H1 | 48–64px | 32–40px | 600–700 | 1.08–1.18 |
| Page H1 | 40–52px | 30–36px | 600–700 | 1.12–1.22 |
| Section H2 | 32–44px | 26–32px | 600 | 1.16–1.28 |
| Card title | 20–28px | 18–22px | 600 | 1.25–1.35 |
| Body | 14–16px | 14–16px | 400 | 1.6–1.8 |
| Meta | 12–14px | 12–14px | 400–500 | 1.4–1.6 |
| Data number | 40–72px | 32–48px | 600–700 | 1.0–1.1 |

## CSS variables

```css
:root {
  color-scheme: light;

  --zl-green: #AACE39;
  --zl-green-hover: #99BA2F;
  --zl-green-active: #86A526;
  --zl-star-gray: #383842;
  --zl-gravel-gray: #6B6F76;

  --zl-text: #1F2329;
  --zl-text-secondary: #5F6670;
  --zl-muted: #8A9199;
  --zl-border: #E5E8EB;
  --zl-border-strong: #D2D7DD;
  --zl-bg: #F5F7F4;
  --zl-section: #F7F8FA;
  --zl-card: #FFFFFF;
  --zl-footer: #262A31;

  --zl-success: #2EAD5B;
  --zl-warning: #D89614;
  --zl-danger: #D93026;
  --zl-info: #3B6EA8;

  --zl-font-cn: "PingFang SC", "Microsoft YaHei", "Noto Sans SC", Arial, sans-serif;
  --zl-font-en: Inter, "Helvetica Neue", Arial, sans-serif;
  --zl-font-number: DIN, "Roboto Condensed", Inter, Arial, sans-serif;

  --zl-container: 1200px;
  --zl-container-wide: 1440px;
  --zl-section-y: 72px;
  --zl-section-y-lg: 96px;
  --zl-gap-sm: 12px;
  --zl-gap-md: 24px;
  --zl-gap-lg: 32px;
  --zl-gap-xl: 48px;

  --zl-radius-button: 6px;
  --zl-radius-card: 8px;
  --zl-radius-panel: 12px;

  --zl-shadow-card: 0 6px 20px rgba(31, 35, 41, 0.06);
  --zl-shadow-card-hover: 0 12px 32px rgba(31, 35, 41, 0.10);

  --zl-motion-fast: 180ms;
  --zl-motion-base: 220ms;
  --zl-motion-slow: 420ms;
  --zl-ease: cubic-bezier(0.2, 0, 0.2, 1);
}
```

## Tailwind config

```js
export default {
  theme: {
    extend: {
      colors: {
        zl: {
          green: "#AACE39",
          "green-hover": "#99BA2F",
          "green-active": "#86A526",
          "star-gray": "#383842",
          "gravel-gray": "#6B6F76",
          text: "#1F2329",
          secondary: "#5F6670",
          muted: "#8A9199",
          border: "#E5E8EB",
          "border-strong": "#D2D7DD",
          bg: "#F5F7F4",
          section: "#F7F8FA",
          card: "#FFFFFF",
          footer: "#262A31",
          success: "#2EAD5B",
          warning: "#D89614",
          danger: "#D93026",
          info: "#3B6EA8"
        }
      },
      borderRadius: {
        "zl-button": "6px",
        "zl-card": "8px",
        "zl-panel": "12px"
      },
      boxShadow: {
        "zl-card": "0 6px 20px rgba(31, 35, 41, 0.06)",
        "zl-card-hover": "0 12px 32px rgba(31, 35, 41, 0.10)"
      },
      transitionTimingFunction: {
        zl: "cubic-bezier(0.2, 0, 0.2, 1)"
      },
      maxWidth: {
        "zl-container": "1200px",
        "zl-wide": "1440px"
      }
    }
  }
};
```

## Component recipes

### Primary button

```css
.zl-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 22px;
  border-radius: var(--zl-radius-button);
  background: var(--zl-green);
  color: #111318;
  font-weight: 600;
  border: 1px solid transparent;
  transition: background-color var(--zl-motion-base) var(--zl-ease), transform var(--zl-motion-base) var(--zl-ease), box-shadow var(--zl-motion-base) var(--zl-ease);
}

.zl-btn-primary:hover {
  background: var(--zl-green-hover);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(170, 206, 57, 0.22);
}
```

### Secondary button

```css
.zl-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 22px;
  border-radius: var(--zl-radius-button);
  background: #fff;
  color: var(--zl-text);
  border: 1px solid var(--zl-border-strong);
  font-weight: 600;
  transition: border-color var(--zl-motion-base) var(--zl-ease), color var(--zl-motion-base) var(--zl-ease), transform var(--zl-motion-base) var(--zl-ease);
}

.zl-btn-secondary:hover {
  color: var(--zl-green-active);
  border-color: var(--zl-green);
  transform: translateY(-1px);
}
```

### Product card

```css
.zl-product-card {
  background: var(--zl-card);
  border: 1px solid var(--zl-border);
  border-radius: var(--zl-radius-card);
  overflow: hidden;
  transition: transform var(--zl-motion-base) var(--zl-ease), box-shadow var(--zl-motion-base) var(--zl-ease), border-color var(--zl-motion-base) var(--zl-ease);
}

.zl-product-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--zl-shadow-card-hover);
  border-color: rgba(170, 206, 57, 0.55);
}

.zl-product-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform var(--zl-motion-slow) var(--zl-ease);
}

.zl-product-card:hover img {
  transform: scale(1.035);
}
```

## Image style

Prefer:

- Engineering machinery hero images.
- Product side/front 3/4 angle images.
- Construction sites, factories, intelligent manufacturing lines.
- Close-up equipment details: boom, chassis, hydraulic components, control panels.
- Global service scenes: maps, service teams, overseas projects.
- Green/ESG scenes: clean energy equipment, low-carbon manufacturing, sustainable construction.

Avoid:

- Abstract SaaS blobs as primary imagery.
- Cartoon machinery illustrations as main style.
- Unrelated office/lifestyle stock photos.
- Over-saturated filters that hide product detail.

## Icon style

- Prefer outline or restrained filled icons.
- Stroke width: 1.5–2px.
- Corners: slightly rounded but not playful.
- Active state can use green; default state should use gray.
- Good icon themes: machinery category, service, parts, global, ESG, safety, support, data, factory, technology.

## Reusable prompts

```text
Use zoomlion-ui. Convert this page to a Zoomlion-inspired industrial enterprise UI. Keep business logic unchanged. Use green as primary accent, industrial gray/white backgrounds, machinery/product-first hierarchy, restrained card hover, and clear responsive layout. Report files changed and checklist result.
```

```text
Use zoomlion-ui to audit this page. Do not edit code. Return P0/P1/P2 issues for color, typography, layout, components, imagery, motion, accessibility, and business-logic safety.
```
