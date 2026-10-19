## Why

Following the initial audit quick wins, the application still has core architectural weaknesses identified in `Audit.md`: client-side Axios data fetching on an Edge SSR framework, unshared theme state causing UI desynchronization across components/tabs, unbookmarkable project filter state held purely in memory, duplicate IntersectionObserver boilerplate across six components, and a fake client-side mailto contact submission. Remediation is required to establish production-grade reliability, performance, and accessibility.

## What Changes

- **Server-Side Blog Data Fetching**: Replace client-side Axios fetching in `Blog.tsx` with a Remix server `loader` in `app/routes/blog.tsx` utilizing Cloudflare edge cache headers (`stale-while-revalidate`) and native `fetch`. Remove `axios` from project dependencies.
- **Synchronized Theme Context**: Replace isolated `useTheme` hook instances with a global `ThemeProvider` React Context in `root.tsx` equipped with a `storage` event listener to synchronize state across multiple toggle buttons and browser tabs.
- **URL-Driven Project Filtering & ARIA Tabs**: Synchronize project category and pagination with URL search parameters (`?category=...&page=...`), and upgrade tab controls to adhere to WAI-ARIA Tabs pattern.
- **Reusable `useInView` Hook**: Extract duplicate `IntersectionObserver` logic from `AboutMe`, `Skills`, `Experience`, `Projects`, `Blog`, and `WhatIDo` into a standardized hook.
- **Route Error Boundaries**: Add isolated error boundaries to route files so failures degrade gracefully without crashing the root application shell.

## Capabilities

### New Capabilities
- `scroll-fade-in-hook`: Reusable custom hook abstracting `IntersectionObserver` mount/unmount and threshold observation for fade-in animations.

### Modified Capabilities
- `blog-page-polish`: Migrate from client-side `useEffect` axios fetching to server-rendered Remix loader with edge caching and error states.
- `theme-switching`: Upgrade from isolated local `useState` to a centralized React Context with cross-tab `storage` event synchronization.
- `project-tabs`: Support deep-linking and browser history navigation via URL query parameters, plus WAI-ARIA tab semantics.

## Non-goals

- Redesigning the visual identity, typography tokens, or color palette.
- Implementing an external CMS or headless database for blog posts.
- Setting up full end-to-end Playwright test suites (targeted for a future QA cycle).

## Impact

- **Dependencies**: Remove `axios`. No new runtime dependencies required.
- **Affected Files**: `app/components/Blog.tsx`, `app/routes/blog.tsx`, `app/hooks/use-theme.ts`, `app/components/ThemeToggle.tsx`, `app/components/Projects.tsx`, `app/components/AboutMe.tsx`, `app/components/Skills.tsx`, `app/components/Experience.tsx`, `app/components/WhatIDo.tsx`, `app/root.tsx`, `package.json`.
- **Breaking Changes**: None. URL query params for projects will be additive with sensible defaults.
