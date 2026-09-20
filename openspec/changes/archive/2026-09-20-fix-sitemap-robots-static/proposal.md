## Why

The `/sitemap.xml` and `/robots.txt` endpoints return full HTML pages instead of their expected content (XML and plain text). This breaks SEO crawling — search engines cannot read the sitemap, and the robots.txt reference to the sitemap URL is invisible. The root cause is that Remix route loaders return raw `Response` objects that get swallowed by the server rendering pipeline when `v3_singleFetch: true` is enabled.

## What Changes

- **Replace** dynamic Remix route loaders for `sitemap.xml` and `robots.txt` with static files in `public/`
- **Remove** broken route files: `app/routes/sitemap[.]xml.tsx`, `app/routes/robots[.]txt.tsx`
- **Remove** unused utility: `app/utils/sitemap.ts`
- **Create** static `public/sitemap.xml` with the 2 valid routes (`/` and `/blog`)
- **Create** static `public/robots.txt` with sitemap reference and crawl rules

## Capabilities

### New Capabilities
- `static-seo-files`: Static sitemap.xml and robots.txt served directly by Cloudflare Pages, bypassing the Remix rendering pipeline

### Modified Capabilities

(none)

## Impact

- **SEO**: Search engines will correctly discover and crawl the 2 valid pages
- **Cloudflare Pages**: Static assets in `public/` are served before function handler invocation, guaranteeing correct `Content-Type` headers
- **No runtime impact**: Removes ~150 lines of server-side code; no bundle or performance changes
- **Files affected**: `app/routes/sitemap[.]xml.tsx`, `app/routes/robots[.]txt.tsx`, `app/utils/sitemap.ts`, `public/sitemap.xml` (new), `public/robots.txt` (new)

## Non-goals

- Dynamic sitemap generation (the portfolio has a fixed set of pages)
- Fixing the `entry.server.tsx` to properly handle raw Response returns (out of scope for this change)
- Adding `og:image` meta tags or fixing inconsistent per-route meta tags
