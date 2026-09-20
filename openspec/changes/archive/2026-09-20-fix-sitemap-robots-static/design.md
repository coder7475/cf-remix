## Context

The portfolio site at `robiulhossain.com` is built with Remix v2.15.3 on Cloudflare Pages. Two SEO-critical endpoints — `/sitemap.xml` and `/robots.txt` — are implemented as Remix route loaders that return raw `Response` objects. However, the `v3_singleFetch: true` future flag causes the server rendering pipeline to always invoke `entry.server.tsx`, which wraps all responses in HTML. The loaders run successfully (cache headers confirm this), but their Response bodies are discarded and replaced with the full HTML page.

Cloudflare Pages serves static files from `public/` directly via its asset pipeline, bypassing the function handler entirely. This guarantees correct `Content-Type` headers and response bodies.

## Goals / Non-Goals

**Goals:**
- Restore correct `/sitemap.xml` (XML) and `/robots.txt` (plain text) responses
- Ensure search engines can discover and crawl the 2 valid pages (`/` and `/blog`)
- Minimize complexity — no framework internals or entry.server.tsx changes

**Non-goals:**
- Dynamic sitemap generation (the site has a fixed set of pages)
- Fixing the `entry.server.tsx` raw Response handling for future dynamic needs
- Adding `og:image` or fixing inconsistent per-route meta tags

## Decisions

### Use static files in `public/` instead of fixing the Remix loader pipeline

**Chosen**: Static `public/sitemap.xml` and `public/robots.txt`

**Alternatives considered**:
1. **Fix `entry.server.tsx` to detect raw Responses** — Requires modifying the server entry to check for non-HTML Content-Type and bypass rendering. This is the "correct" Remix approach but adds complexity and couples the fix to framework internals that may change.
2. **Use Cloudflare Pages Functions** — Create `functions/sitemap.xml.ts` and `functions/robots.txt.ts` to handle requests directly. Works but adds unnecessary indirection when static files solve the problem.

**Rationale**: The sitemap contains 2 hardcoded routes (`/` and `/blog`) with no dynamic data. Static files are the simplest, most reliable solution. Cloudflare Pages serves them directly with correct headers and zero cold-start latency.

## Risks / Trade-offs

- **[Manual updates required]** → If routes are added/removed, the static `sitemap.xml` must be updated manually. **Mitigation**: The site rarely changes; this is acceptable for a portfolio.
- **[Stale cache]** → Cloudflare may cache the old HTML responses. **Mitigation**: Deploying new static files invalidates the CDN cache for those paths.
- **[Dead route files]** → Removing the route files leaves orphan imports if anything references them. **Mitigation**: Grep confirms no other files import from `sitemap[.]xml`, `robots[.]txt`, or `app/utils/sitemap.ts`.
