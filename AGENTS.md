# AGENTS.md

## What This Is

Portfolio website for Robiul Hossain. Remix v2 on Cloudflare Pages with Tailwind CSS.

## Dev Commands

```bash
pnpm install          # install deps
pnpm run dev          # local dev (Vite, http://localhost:5173)
pnpm run build        # production build (Remix Vite build)
pnpm run preview      # build and preview with Wrangler Pages dev
pnpm run start        # run Wrangler Pages local emulator on ./build/client
pnpm run typecheck    # tsc (fast type check, no emit)
pnpm run lint         # eslint
pnpm run typegen      # wrangler types (Cloudflare Workers typegen)
pnpm run deploy       # build + wrangler pages deploy
```

No test runner is configured. There are no test files.

## Project Structure

- `app/routes/` — Remix file routes. `_index.tsx` is the homepage (all sections composed inline). Standalone sub-routes (`about.tsx`, `blog.tsx`, `contact.tsx`, `experiences.tsx`, `projects.tsx`, `schedule.tsx`, `$.tsx`) provide direct deep-linking.
- `app/components/` — React components. Section-level presentations and page modules (`Banner`, `AboutMe`, `WhatIDo`, `Experience`, `Projects`, `Skills`, `Blog`, `RecentArticles`, `GetInTouch`, `Navbar`, `Footer`, `ThemeToggle`, `ScrollToTop`, `CalendlyInline`).
- `app/components/ui/` — Toast primitives (`toast.tsx`, `toaster.tsx` mounted in `root.tsx`).
- `app/hooks/` — `use-theme.tsx` (ThemeProvider Context & hook), `use-toast.ts` (toast dispatcher), `use-in-view.ts` (reusable IntersectionObserver hook).
- `app/constants/` — Static data (`index.ts`, `skillsConstants.ts`, `whatIDoConstants.ts`).
- `app/types/` — Shared TypeScript types.
- `app/libs/utils.ts` — `cn()` helper (clsx + tailwind-merge).
- `app/tailwind.css` — Global styles, CSS custom properties, custom utilities.
- `functions/[[path]].ts` — Cloudflare Pages Functions adapter for Remix.
- `public/` — Static assets (favicons, profile image, resume PDF, robots.txt, sitemap.xml).

## Path Aliases

`~/` maps to `./app/`. Use `~/components/Foo` not relative paths.

## CSS / Theming

- Tailwind with CSS custom properties (shadcn-style tokens in `app/tailwind.css`).
- Dark mode is default. Light mode is toggled by adding `.light` class to `<html>`.
- Centralized `ThemeProvider` in `app/hooks/use-theme.tsx` synchronizes theme state across all toggle instances and listens to `storage` events across browser tabs.
- Custom utilities defined in `@layer utilities` in `app/tailwind.css`: `glass-morphism`, `text-gradient`, `page-shell`, `page-inner`, mobile menu transition classes, safe-area helpers.
- `tailwind.config.ts` extends colors via `hsl(var(--token))` pattern.

## Code Conventions

- **No comments** — enforced in codebase style. Do not add comments to code files.
- **TypeScript strict mode** is on.
- **No code splitting** beyond Remix's route-level splits.
- Reusable `useInView` hook in `app/hooks/use-in-view.ts` powers scroll fade-in animations across section components with `prefers-reduced-motion` detection.
- Blog articles: `app/routes/blog.tsx` uses a server `loader` with native `fetch` and edge caching (`stale-while-revalidate`). `Blog.tsx` uses native `fetch` with an `AbortController` and SSR data fallback. Axios is NOT used.
- Toast system: `<Toaster />` is mounted in `app/root.tsx` to handle notifications globally.
- SEO & Routing: Dynamic canonical URLs are computed per route in `app/root.tsx`. `Navbar.tsx` detects if the current page is `/` before triggering smooth scrolls, and navigates via `useNavigate` when on sub-routes.
- Contact form uses `mailto:` redirect with form validation.

## Deployment

- Automated CI/CD: `.github/workflows/ci_cd.yml` runs typecheck, lint, build, and deploys to Cloudflare Pages on push to `main`.
- Manual deployment via `pnpm run deploy` (`wrangler pages deploy`).
- `wrangler.jsonc` has no bindings configured (empty `Env` interface in `worker-configuration.d.ts`).
- Run `pnpm run typegen` (or `pnpm run cf-typegen`) after changing `wrangler.jsonc` bindings.
