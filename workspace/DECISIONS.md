# System Decisions

*This file is the single source of truth for architectural and implementation decisions in this project.*

## Purpose

Records key technical decisions, their rationale, alternatives considered, and outcomes. This file prevents the same discussions from happening twice and helps future-you (or future-sessions) understand *why* things are the way they are.

## When to Update This File

Update this file when:
- A significant technical or architectural decision is made
- A library, framework, or tool is chosen over alternatives
- A design pattern or approach is selected for a non-trivial problem
- A previous decision is revisited, changed, or reversed
- A constraint or trade-off is discovered that shaped the implementation
- A workaround is chosen due to external limitations (API quirks, library bugs, etc.)

**Do not** log trivial decisions (variable naming, minor formatting). If it wouldn't be worth explaining to a teammate joining the project, skip it.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD] — [Short Decision Title]

**Status:** Accepted | Superseded | Deprecated
**Context:** Why this decision was needed. What problem or question triggered it.
**Decision:** What was decided.
**Alternatives Considered:**
- [Alternative A] — Why it was rejected.
- [Alternative B] — Why it was rejected.
**Consequences:** What this decision enables, constrains, or risks.
```

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Decisions

### 2026-03-12 — Add React Router for multi-page navigation

**Status:** Accepted
**Context:** User requested a category/blog page. The project was single-page with no routing.
**Decision:** Added `react-router-dom@6` with `BrowserRouter`, `Routes`, `Route`. Moved `<main>` wrapper to `App.tsx` and made `Main` render a `<div>` instead of `<main>`.
**Alternatives Considered:**
- Hash-based routing — Tried, then reverted. HashRouter expects `/#/path` but the environment navigates with real pathnames.
- Conditional rendering without router — Rejected; doesn't scale as more pages are added.
**Consequences:** All new pages can be added as `<Route>` entries in `App.tsx`. Header/Footer remain shared across all routes.
