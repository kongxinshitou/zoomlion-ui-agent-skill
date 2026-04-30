# Brand Evidence Notes

This reference records evidence standards, assumptions, and safe-use boundaries for the `zoomlion-ui` Skill.

## Positioning

`zoomlion-ui` is an unofficial community implementation aid for building Zoomlion / 中联重科 inspired industrial enterprise UI. It helps AI coding agents create or refactor pages toward a professional, product-first, green-technology, high-end manufacturing visual direction.

It is not an official Zoomlion brand manual, trademark license, endorsement, or VI system.

## Research basis

This Skill is based on:

- Publicly visible Zoomlion / 中联重科 web page patterns and related corporate page types.
- Common high-end equipment, engineering machinery, intelligent manufacturing, ESG, and global service website conventions.
- Practical frontend implementation patterns for React, Vue, Next.js, Nuxt, Vite, Tailwind, CSS Modules, SCSS, shadcn/ui, Ant Design, and Element Plus.

## Color assumptions

Recommended UI tokens are approximations for implementation. Replace them with official VI values whenever available.

| Token | Value | Use |
|---|---:|---|
| Aurora Green / 极光绿 | `#AACE39` | Primary CTA, active states, accent lines, metric emphasis |
| Green hover | `#99BA2F` | Hover state |
| Green active | `#86A526` | Pressed / active state |
| Star Gray / 星耀灰 | `#383842` | Deep panels, footer, strong text |
| Gravel Gray / 砂砾灰 | `#6B6F76` | Secondary text, icons, metadata |

## Confidence levels

- **High confidence**: frontend safety rules, accessibility requirements, responsive layout, tokenized implementation, logic-preservation workflow.
- **Medium confidence**: public-web visual patterns such as green accents, industrial gray/white rhythm, product cards, news modules, data cards, restrained hover states, and dark enterprise footer patterns.
- **Needs official confirmation**: exact brand color values, logo usage, proprietary icons, campaign photography, official copywriting, financial/ESG/product facts, and legal/trademark-sensitive usage.

## Safe-use rules

Do:

- Preserve business logic, routes, APIs, props, state, permissions, validation, analytics, and data shape unless the user explicitly asks for functional changes.
- Use green as a precise accent rather than flooding the page.
- Prefer engineering machinery, factory, construction, service, global network, and green manufacturing imagery when the user has authorized assets.
- Mark placeholder copy/images/data as replaceable.

Do not:

- Claim output is official, certified, sponsored, or endorsed by Zoomlion.
- Redistribute official logos, proprietary screenshots, private images, or non-redistributable fonts.
- Invent product parameters, awards, ESG numbers, investor data, news, certifications, or service coverage.
- Clone official pages pixel-for-pixel.
- Bypass access controls or scrape private pages.

## Recommended disclosure for demos

```md
This is an unofficial Zoomlion-inspired UI demo. It is not affiliated with or endorsed by Zoomlion. Replace placeholder imagery, copy, product data, and design tokens with authorized official materials before production use.
```

## Asset guidance

Use assets only when they are:

1. Provided by the user with permission;
2. Already licensed inside the user's project;
3. Public-domain or permissively licensed with license retained; or
4. Neutral placeholders clearly marked for replacement.

## Data integrity guidance

For product, news, ESG, investor, and service content:

- Keep dates, units, product names, and source context visible.
- Label placeholders clearly.
- Ask for official confirmation before production deployment.
- Avoid impressive but unverifiable claims.

## Future research backlog

- Add a documented URL inventory for researched pages.
- Add versioned screenshot/HTML extraction notes where redistribution is allowed.
- Add before/after case studies.
- Add React/Vue/Next/Nuxt example implementations.
- Add automated visual lint rules for design-token usage.
