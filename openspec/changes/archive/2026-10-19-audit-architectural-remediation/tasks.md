## 1. Reusable In-View Hook Extraction

- [x] 1.1 Create `app/hooks/use-in-view.ts` with IntersectionObserver and reduced motion support
- [x] 1.2 Refactor `AboutMe.tsx`, `Skills.tsx`, `Experience.tsx`, `WhatIDo.tsx`, and `Banner.tsx` to use `useInView`

## 2. Synchronized Global Theme Context

- [x] 2.1 Refactor `app/hooks/use-theme.ts` to implement a centralized React ThemeContext and Provider with multi-tab storage event synchronization
- [x] 2.2 Mount `ThemeProvider` in `app/root.tsx` wrapping the application tree
- [x] 2.3 Verify `ThemeToggle.tsx` synchronizes seamlessly between desktop navbar and mobile drawer

## 3. Server-Side Article Data Loading & Axios Removal

- [x] 3.1 Implement Remix server `loader` in `app/routes/blog.tsx` fetching Dev.to via native `fetch` with edge caching headers (`stale-while-revalidate`)
- [x] 3.2 Refactor `app/components/Blog.tsx` to consume loader data directly and provide an isolated error state with retry
- [x] 3.3 Remove `axios` from `package.json` and re-build to verify bundle size reduction

## 4. Project URL State & ARIA Tab Semantics

- [x] 4.1 Update `app/components/Projects.tsx` to synchronize category filter and pagination with URL search parameters (`?category=...&page=...`)
- [x] 4.2 Add WAI-ARIA tab attributes (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`) and roving focus to project tabs
- [x] 4.3 Add nested route `ErrorBoundary` components to `app/routes/blog.tsx` and `app/routes/projects.tsx`

## 5. Verification & Quality Gates

- [x] 5.1 Run `pnpm run typecheck` to verify TypeScript strict mode compliance
- [x] 5.2 Run `pnpm run lint` to verify zero ESLint violations and enforcement of the no-comments convention
- [x] 5.3 Run `pnpm run build` to confirm successful production compilation and asset generation
