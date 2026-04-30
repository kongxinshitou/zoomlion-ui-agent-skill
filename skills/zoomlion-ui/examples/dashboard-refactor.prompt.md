# Dashboard Refactor Prompt

Use `zoomlion-ui` to refactor an industrial equipment, IoT, monitoring, or admin dashboard.

## Goal

Make the dashboard professional, dense enough for enterprise operations, and visually aligned with engineering machinery / intelligent manufacturing scenarios.

## Constraints

- Preserve data fetching, API endpoints, table columns, filters, permissions, status logic, route params, and chart data mapping.
- Do not replace real data with mock data.
- Do not add heavy animations that slow down operational use.
- Do not let marketing visuals reduce dashboard readability.

## Recommended structure

1. App shell: sidebar/header/breadcrumb
2. KPI cards: equipment count, online rate, alerts, maintenance tasks
3. Filter/search toolbar
4. Main table or equipment list
5. Status badges with semantic colors
6. Chart/map/panel area when data exists
7. Activity log / alert list

## Visual rules

- Use green for primary actions, active tabs, healthy/positive emphasis when semantically correct.
- Use semantic colors for operational status: success, warning, danger, info.
- Tables should have readable headers, row hover, clear density, and stable alignment.
- Cards should use restrained borders and shadows.
- Focus states must remain visible.

## Required output

Report files changed, logic preserved, status-color assumptions, and checklist result.
