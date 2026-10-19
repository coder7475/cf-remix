## Context

The recent engineering audit (`Audit.md`) identified significant technical debt and architectural weaknesses across multiple areas:
1. `Blog.tsx` fetches Dev.to articles via client-side `axios` in `useEffect`, incurring a ~60 KB bundle penalty and yielding zero SSR/SEO benefits for crawlers.
2. `use-theme.ts` manages state via isolated `useState` calls per component mount, causing the desktop navbar toggle, mobile menu drawer toggle, and separate browser tabs to drift out of sync.
3. `Projects.tsx` holds tab selection and pagination in ephemeral memory, preventing users from bookmarking or sharing views (`?category=ai-ml&page=2`) and resetting on browser back navigation. Tabs also lack WAI-ARIA tab semantics.
4. Six separate components (`AboutMe`, `Skills`, `Experience`, `Projects`, `Blog`, `WhatIDo`) duplicate 20+ lines of identical `IntersectionObserver` setup/teardown boilerplate.

## Goals / Non-Goals

**Goals:**
- Migrate Dev.to article fetching into a Remix server `loader` in `app/routes/blog.tsx` with Cloudflare edge caching headers (`stale-while-revalidate`) and uninstall `axios`.
- Establish a global React Context `ThemeProvider` in `app/root.tsx` with multi-tab `storage` event synchronization.
- Synchronize project filtering and pagination with URL search parameters (`?category=...&page=...`) using Remix `useSearchParams`, and add WAI-ARIA tab semantics (`role="tablist"`, `role="tab"`, `aria-selected`).
- Extract duplicate `IntersectionObserver` boilerplate into a reusable, strict TypeScript hook `useInView`.
- Provide isolated route-level error boundaries.

**Non-Goals:**
- Replacing static project constants with a CMS or external database.
- Modifying design tokens (colors, typography scales, spacing).
- Rewriting the animation aesthetic or replacing Tailwind.

## Decisions

### 1. Server-Side Edge Loader vs Client Fetch for Articles
- **Decision**: Fetch Dev.to articles in `app/routes/blog.tsx` `loader` using native `fetch` and return HTTP cache headers `Cache-Control: public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800`.
- **Rationale**: Cloudflare Pages Workers execute at the edge in sub-10ms. Caching articles at the CDN edge eliminates client request waterfalls, delivers full SSR HTML to search engine bots, and enables removing the `axios` dependency (~22 KB gzipped).
- **Alternatives Considered**:
  - *Keep client-side fetch with SWR/React Query*: Introduces additional client dependencies without solving SSR/SEO.
  - *Build-time static generation*: Requires rebuilding the site whenever a new article is published on Dev.to.

### 2. React Context vs External State Manager for Theme
- **Decision**: Implement a native React `ThemeContext` provided in `app/root.tsx` with a `window.addEventListener("storage", ...)` listener.
- **Rationale**: Theme is the only shared cross-component client state. Adding Zustand or Redux would be over-engineering. Context provides zero-dependency reactivity across the desktop navbar, mobile drawer, and across multiple browser tabs.
- **Alternatives Considered**:
  - *Custom event bus (`CustomEvent`)*: Lacks React declarative lifecycle integration.
  - *Zustand*: Excellent library, but adds 3 KB to client bundle for a single 3-state toggle.

### 3. URL Search Params for Project Tabs & Pagination
- **Decision**: Manage active category and page via Remix `useSearchParams()`.
- **Rationale**: URL search parameters provide bookmarkability, shareability, and natural browser back/forward history support at zero runtime cost.
- **Alternatives Considered**:
  - *Sub-routes (`/projects/backend`, `/projects/fullstack`)*: Conflicts with the homepage inline section embedding.

### 4. Custom `useInView` Hook vs External Library
- **Decision**: Implement `app/hooks/use-in-view.ts` (~35 lines) returning `[ref, isInView]`.
- **Rationale**: Replaces 120+ lines of duplicated code across 6 components with zero external dependencies, while respecting user `prefers-reduced-motion`.
- **Alternatives Considered**:
  - *`react-intersection-observer` package*: Unnecessary dependency for a simple threshold observer.

## Risks / Trade-offs

- **[Risk] Dev.to API Downtime or Rate Limiting during SSR** → Mitigation: Catch fetch errors in `loader` and return fallback cached or empty data gracefully with an error indicator rather than throwing 500.
- **[Risk] Search Param Navigation Lag** → Mitigation: Use `navigate(..., { preventScrollReset: true })` or localized search param updates to avoid triggering jarring scroll jumps when switching tabs.
- **[Risk] Hydration Mismatch with Theme Context** → Mitigation: Retain the synchronous `<head>` script in `root.tsx` for immediate DOM `.light` class application before React hydration, then synchronize context on mount.

## Migration Plan

1. Create `app/hooks/use-in-view.ts` and refactor the 6 components.
2. Create `ThemeProvider` and refactor `use-theme.ts` and `ThemeToggle.tsx`.
3. Update `app/routes/blog.tsx` with server loader, refactor `Blog.tsx` to receive posts via `useLoaderData()`, and remove `axios` from `package.json`.
4. Update `app/components/Projects.tsx` with `useSearchParams` and ARIA attributes.
5. Verify build, types, and linting.
