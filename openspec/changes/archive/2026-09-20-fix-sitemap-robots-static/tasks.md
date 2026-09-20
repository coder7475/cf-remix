## 1. Create static SEO files

- [x] 1.1 Create `public/sitemap.xml` with valid XML containing 2 routes: `/` and `/blog`
- [x] 1.2 Create `public/robots.txt` with `User-agent: *`, `Allow: /`, `Sitemap: https://robiulhossain.com/sitemap.xml`

## 2. Remove broken dynamic routes

- [x] 2.1 Delete `app/routes/sitemap[.]xml.tsx`
- [x] 2.2 Delete `app/routes/robots[.]txt.tsx`
- [x] 2.3 Delete `app/utils/sitemap.ts`

## 3. Verify

- [x] 3.1 Run `pnpm build` — confirm no errors or missing imports
- [x] 3.2 Verify `sitemap.xml` and `robots.txt` are in `public/`
