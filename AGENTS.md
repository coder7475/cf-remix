# AGENTS.md

## What This Is

Portfolio website for Robiul Hossain. Remix v2 on Cloudflare Pages with Tailwind CSS.

## Dev Commands

```bash
pnpm install          # install deps
pnpm run dev          # local dev (Vite, http://localhost:5173)
pnpm run build        # production build
pnpm run typecheck    # tsc --noEmit (fast, no emit)
pnpm run lint         # eslint
pnpm run deploy       # build + wrangler pages deploy
```

No test runner is configured. There are no test files.

## Project Structure

- `app/routes/` — Remix file routes. `_index.tsx` is the homepage (all sections composed inline).
- `app/components/` — React components. Most are section-level, not reusable primitives.
- `app/components/ui/` — Toast primitives (Radix-based).
- `app/hooks/` — `use-theme.ts`, `use-toast.ts`.
- `app/constants/` — Static data (projects, skills, whatIDoCards).
- `app/types/` — Shared TypeScript types.
- `app/libs/utils.ts` — `cn()` helper (clsx + tailwind-merge).
- `app/tailwind.css` — Global styles, CSS custom properties, custom utilities.
- `public/` — Static assets (favicons, profile image).

## Path Aliases

`~/` maps to `./app/`. Use `~/components/Foo` not relative paths.

## CSS / Theming

- Tailwind with CSS custom properties (shadcn-style tokens in `app/tailwind.css`).
- Dark mode is default. Light mode toggled by adding `.light` class to `<html>`.
- Theme persisted in `localStorage("theme")`. No `prefers-color-scheme` detection — defaults to dark.
- Custom utilities defined in `@layer utilities` in `app/tailwind.css`: `glass-morphism`, `text-gradient`, `page-shell`, `page-inner`, mobile menu transition classes, safe-area helpers.
- `tailwind.config.ts` extends colors via `hsl(var(--token))` pattern.

## Code Conventions

- **No comments** — enforced in codebase style. Do not add comments.
- **TypeScript strict mode** is on.
- **No code splitting** beyond Remix's route-level splits.
- Component-level `IntersectionObserver` for fade-in animations is duplicated across ~6 components — not yet abstracted.
- External API call: `Blog.tsx` fetches from `dev.to/api/articles` via axios (no caching, no abort controller).
- Contact form uses `mailto:` redirect — no backend submission.

## Deployment

- Cloudflare Pages via `wrangler pages deploy`.
- `wrangler.jsonc` has no bindings configured (empty `Env` interface in `worker-configuration.d.ts`).
- Run `pnpm run cf-typegen` after changing `wrangler.jsonc` bindings.
