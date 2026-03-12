# Debugging Records & Issue Tracking

*This file is the single source of truth for debugging sessions, issues, and troubleshooting history in this project.*

## Purpose

Records debugging sessions, error patterns, root causes, solutions, and recurring issues. This file enables systematic problem-solving, prevents re-solving the same bugs, and provides context for future debugging efforts. It supports Roo Code's Debug Mode by maintaining a persistent record of diagnostic work.

## When to Update This File

Update this file when:
- Encountering a new error, bug, or unexpected behavior
- Identifying a root cause during investigation
- Applying a fix or workaround (successful or not)
- Noticing a recurring issue pattern
- During systematic debugging sessions (e.g., in Debug Mode)
- Discovering performance issues, edge cases, or race conditions
- After verifying a fix works across relevant scenarios

**Do not** log transient one-liners or obvious typos. Focus on issues requiring investigation or likely to recur.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD HH:MM] — [Short Issue Title]

**Status:** Open | Investigating | Fixed | Recurring | Won't Fix
**Symptoms:** What went wrong. Error messages, stack traces, reproduction steps.
**Environment:** dependencies, affected files.
**Root Cause:** (if found) What caused it.
**Investigation Steps:**
- Step 1: What was tried, results.
- Step 2: etc.
**Solution:** What fixed it (code changes, config, workaround).
**Prevention:** How to avoid this in future (patterns, tests, docs).
**Related:** Links to DECISIONS.md entries, commits, or tickets.
```

Mark as **Recurring** if the issue returns.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Current Issues

<!-- Newest debugging entries first. Closed issues move to "Resolved Issues" below. -->

## Resolved Issues

### 2026-03-12 — /category route not loading

**Status:** Fixed
**Symptoms:** User reports `/category` doesn't load, while `/` and `/article` work fine. Route was defined in App.tsx correctly.
**Root Cause:** `.screen-graph.json` was missing — the Sandpack environment uses this file to register available pages/routes. Without it, navigating to `/category` wasn't recognized.
**Solution:** Created `.screen-graph.json` with all three routes (`/`, `/category`, `/article`). Removed `__ANIMA_DBG__` debug logs from `src/App.tsx`.
**Prevention:** Always keep `.screen-graph.json` in sync when adding new routes.

### 2026-03-12 — 404 on /index.html path

**Status:** Fixed
**Symptoms:** Home page shows `404 — path: /index.html` instead of content.
**Root Cause:** Sandpack environment navigates to `/index.html` literally. BrowserRouter only had a route for `/`, not `/index.html`.
**Solution:** Added `<Route path="/index.html" element={<Main />} />` in `src/App.tsx`.
**Prevention:** In Sandpack, always add `/index.html` as a route alias for the home page.

### 2026-03-12 — Home page shows 404

**Status:** Fixed
**Symptoms:** Navigating to `/` showed `404 — path:` instead of the home page content.
**Root Cause:** `vite.config.ts` had `base: "./"` (relative). BrowserRouter uses the Vite base to compute its basename — a relative base caused route matching to fail for `/`.
**Solution:** Changed `base: "./"` to `base: "/"` in `vite.config.ts`.
**Prevention:** Always use absolute `base: "/"` when using BrowserRouter.

### 2026-03-12 — /category and /article routes show home page (Recurring)

**Status:** Fixed (Recurring — was fixed with HashRouter previously, now reverted)
**Symptoms:** Navigating to `/category` or `/article` always rendered the home page. Debug log showed `location /`.
**Root Cause:** App used `HashRouter` which expects `/#/category`, but the environment navigates with real pathnames (`/category`). The hash was never set, so the router always matched `/`.
**Solution:** Switched back to `BrowserRouter` in `src/App.tsx`. Reverted `#/` breadcrumb hrefs to `/` in `src/pages/ArticlePage.tsx`.
**Prevention:** This environment supports History API. Use `BrowserRouter` for pathname-based routing.
