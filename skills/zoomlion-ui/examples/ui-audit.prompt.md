# UI Audit Prompt

Use `zoomlion-ui` to audit this page or component. Do not edit code unless explicitly requested.

## Audit scope

Review the UI against the Zoomlion-inspired industrial enterprise direction:

- Brand fit
- Color system
- Typography
- Layout and spacing
- Header / hero / cards / tables / forms / footer
- Product and service hierarchy
- Imagery suitability
- Motion and interaction states
- Accessibility
- Business-logic safety risks

## Severity rules

- P0: breaks business logic, accessibility, readability, or core brand direction.
- P1: major visual mismatch or inconsistent component behavior.
- P2: polish issue or minor inconsistency.

## Required output

```md
## Zoomlion UI Audit Result

### P0
- ...

### P1
- ...

### P2
- ...

### Suggested implementation order
1. ...
2. ...
3. ...

### Notes
- Assets or facts needing official confirmation: ...
```

## Do not

- Do not invent official brand rules.
- Do not claim official Zoomlion approval.
- Do not suggest changing API/data/business logic unless the issue truly requires it.
