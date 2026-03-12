<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-03-12 — Fix /category route not loading

- Created `.screen-graph.json` with all 3 routes (`/`, `/category`, `/article`) — env needs this file to register pages
- Removed `__ANIMA_DBG__` debug logs from `src/App.tsx`
- Root cause: missing `.screen-graph.json` meant the environment didn't know about the `/category` route

## 2026-03-12 — Fix 404 on /index.html path

- Added `<Route path="/index.html" element={<Main />} />` in `src/App.tsx`
- Sandpack navigates to `/index.html` literally, which didn't match the `/` route

## 2026-03-12 — Fix 404 on home page caused by relative base

- Changed `base: "./"` → `base: "/"` in `vite.config.ts` — relative base broke BrowserRouter route matching
- Fixed 404 catch-all to show `pathname` instead of stale `hash` reference in `src/App.tsx`

## 2026-03-12 — Revert HashRouter back to BrowserRouter

- Changed `HashRouter` → `BrowserRouter` in `src/App.tsx` — environment navigates with real pathnames, not hash
- Reverted breadcrumb hrefs from `#/` back to `/` in `src/pages/ArticlePage.tsx`
- Root cause of recurring bug: HashRouter expects `/#/path` but env uses `/path`, so routes never matched

## 2026-03-12 — Wire all nav links and category cards to React Router

- Updated `MainNav.tsx` — "Home" → `/`, "Blog" → `/category`, active route highlighted via `useLocation`
- Updated `MobileMenu.tsx` — same route mapping, uses `<Link>` with `closeMobileMenu` on click
- Updated `Category.tsx` — mustReadSidebar, mustReadHero title, LatestPostCard image+title all use `<Link to="/article">`

## 2026-03-12 — Update MobileLogo to new Tech in Tech square logo

- Replaced mobile logo src in `src/components/MobileLogo.tsx` with newly uploaded square logo asset
- Increased display size to `h-10 max-w-[80px]` to better fit the squarish logo format

## 2026-03-12 — Update desktop logo in header and footer

- Replaced logo image in `src/components/Logo.tsx` and `src/sections/Footer/components/FooterLogo.tsx` with new hosted asset

## 2026-03-12 — Add /article page with continuous scroll and sticky sidebar

- Created `src/pages/ArticlePage.tsx` — full magazine-style article layout with reading progress bar, sticky title bar, author bio, tags, share buttons
- Continuous scroll: IntersectionObserver sentinel at bottom of each article auto-loads next article (3 demo articles)
- Sticky sidebar: author card, newsletter mini-form, related posts, ad slot
- Wired to `/article` in `src/App.tsx`

## 2026-03-12 — Fix MobileLogo to show full logo on all screen sizes

- Removed `aspect-square` and `object-cover` from `<img>` in `src/components/MobileLogo.tsx`
- Added responsive height (`h-8 sm:h-9 md:h-10 lg:h-11`), `w-auto`, `object-contain`, `max-w-[140px]`

## 2026-03-12 — Update MobileLogo to latest uploaded Tech in Tech image

- Replaced hosted image URL in `src/components/MobileLogo.tsx` with newly uploaded asset (uploaded-asset-1773343985318-0.png)

## 2026-03-12 — Increase Latest News card title size and weight

- Changed `LatestPostCard` h3 from `text-[16px] md:text-[18px] font-bold` to `text-[18px] md:text-[21px] font-extrabold` in `src/pages/Category.tsx`

## 2026-03-12 — Rename BlogPage.tsx to Category.tsx

- Created `src/pages/Category.tsx` (exported as `CategoryPage`) with full content from `BlogPage.tsx`
- Updated `src/App.tsx` import and JSX from `BlogPage`/`BlogPage.tsx` to `CategoryPage`/`Category.tsx`
- Deleted `src/pages/BlogPage.tsx`

## 2026-03-12 — Move category badge up more on latest news cards

- Changed `translate-y-1/2` to `translate-y-[35%]` on badge wrapper in `LatestPostCard` in `src/pages/BlogPage.tsx`
- Badge now sits higher above the card bottom edge, fully visible

## 2026-03-12 — Fix partially hidden category badge on latest news cards

- Moved `overflow-hidden` from outer wrapper to inner `<a>` tag in `LatestPostCard` in `src/pages/BlogPage.tsx`
- Badge `translate-y-1/2` is no longer clipped; increased `mb-3` to `mb-5` to give badge room

## 2026-03-12 — Redesign Must Read sidebar card layout to match screenshot

- Increased thumbnail size to `w-[130px] md:w-[150px]`, bolder title (`font-extrabold`, 18px), `By **Author** | Date` meta
- Updated in `src/pages/BlogPage.tsx` mustReadSidebar map block

## 2026-03-12 — Fix Must Read mobile order — hero above list on small screens

- Used `order-2 lg:order-1` on the sidebar list and `order-1 lg:order-2` on the hero card in `src/pages/BlogPage.tsx`
- On mobile the hero now appears on top, on desktop the original left-list / right-hero layout is preserved

## 2026-03-12 — Remove featured banner from category page

- Removed the full-width featured banner block (gradient overlay + "Where Aesthetics Meet Functionality" text) from `src/pages/BlogPage.tsx`
- Also removed the associated `featuredBanner` data constant

## 2026-03-12 — Redesign category page to match foxiz blog layout

- Completely rewrote `src/pages/BlogPage.tsx` to match foxiz.io/marketminds/blog/ design
- New layout: "Must Read" section (sidebar list + hero card), ad banner, full-width featured image with overlay text, "Latest News" 4-column grid with "Show More" button
- Removed old breadcrumb/header/filter/sidebar/pagination design in favor of magazine-style layout
- Used existing project images and fonts (Plus Jakarta Sans, Jost, lime-300 accents)

## 2026-03-12 — Rename /blog route to /category

- Changed route path from `/blog` to `/category` in `src/App.tsx`
- Updated breadcrumb and page heading in `src/pages/BlogPage.tsx` from "Blog" to "Category"

## 2026-03-12 — Add /blog category page with React Router

- Added `react-router-dom@6`, created `BrowserRouter` in `src/App.tsx` with routes for `/` and `/blog`
- Created `src/pages/BlogPage.tsx` — category page with breadcrumb, header, filter chips, 2-col post grid, pagination, and sidebar widgets
- Created `src/pages/HomePage.tsx` (unused for now, kept for future extraction)
- Refactored `src/sections/Main/index.tsx` — `<main>` wrapper moved to `App.tsx`, Main now renders `<div>`
- Design inspired by foxiz.io/marketminds/blog — same fonts, lime-300 accents, black/white palette

## 2026-03-12 — Replace logo with Tech in Tech image

- Updated `src/components/Logo.tsx` and `src/components/MobileLogo.tsx` with new hosted logo image

## 2026-03-12 — Add lime-300 hover background to Must Read section titles

- Added `hover:bg-lime-300 transition-colors duration-200` to all 4 title `<a>` tags in `PostGrid.tsx`

## 2026-03-12 — Add yellow hover background effect to all spotlight titles

- Added `bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat [background-size:0%_2px] hover:[background-size:100%_2px] bg-left-bottom transition-[background-size] duration-300 hover:bg-yellow-200` to all 4 title links in `SpotlightSection.tsx`

## 2026-03-12 — Remove background highlight from spotlight titles

- Stripped `bg-[linear-gradient(...)]`, `bg-no-repeat`, `bg-size-[0%_100%]`, `hover:bg-size-[100%_100%]`, `transition-[background-size]`, `bg-left-bottom` from all 4 title `<a>` tags in `SpotlightSection.tsx`

## 2026-03-12 — Fix Trending Section to match design

- Rewrote `TrendingList.tsx` — clean data-driven list, visible ⚡ bolt icon, hover highlight on titles, proper `By Author | Date` meta
- Simplified `TrendingSection.tsx` — cleaner heading markup with amber highlight pseudo

## 2026-03-12 — Fix spotlight title highlight: show only on hover

- Replaced `bg-[position:0px_100%]` with `bg-left-bottom` on all 4 title links in `SpotlightSection.tsx`
- This prevents the arbitrary value from conflicting with `bg-size-[0%_100%]`, so gradient is truly hidden until hover

## 2026-03-12 — Spotlight titles: highlight background on hover only

- Updated `src/sections/FeaturedArticle/components/SpotlightSection.tsx` — added `hover:bg-size-[100%_100%]` + `transition-[background-size] duration-300` to all 4 title links

## 2026-03-12 — Change hover text color to black on newsletter card titles

- Updated `src/sections/NewsletterSection/index.tsx` — card title links now use `hover:text-black` instead of `hover:text-white`

## 2026-03-12 — Remove floating Demo & Buy Now buttons

- Cleared `src/components/FloatingButtons.tsx` — both floating action buttons removed

## 2026-03-12 — Full Animation & Interactivity Pass

- Created `src/hooks/useScrollReveal.ts` — IntersectionObserver scroll-reveal hook
- Created `src/context/UIContext.tsx` — shared state: mobileMenu, topBar dismiss, popup timer
- Updated `tailwind.css` — added reveal, stagger, img-zoom, nav-underline, float-anim, popup, btn-press CSS
- Rewrote `MenuButton`, `MobileMenu`, `MobileNavbar` — hamburger animates ↔ X, menu slides open/close
- Rewrote `TopBar` — Accept button now dismisses bar via UIContext
- Made `NewsletterForm` & `PopupForm` fully interactive with validation + success states
- Made `PopupNewsletter` visible after 4s delay with overlay dismiss + close button
- Added `CookieBanner` component with accept/decline dismiss
- Added `FloatingButtons` gentle float animation, all image wrappers have `img-zoom` hover
- All major sections wired to scroll-reveal with stagger children
- Converted all external foxiz.io hrefs to internal `#` anchors
</changelog>
