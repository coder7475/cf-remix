## Why

The current portfolio homepage stacks multiple sections vertically without clear visual hierarchy, making it hard for recruiters to quickly grasp the value proposition. The UI/UX feels unpolished — inconsistent spacing, overly decorative gradient blurs, and a blog section fetched client-side that adds load time without clear benefit for a personal portfolio. The site lacks proper SEO structure (meta tags, Open Graph, structured data) which hurts discoverability. The goal is to transform this into a concise, recruiter-friendly one-pager inspired by clean SaaS landing pages like elementix.us.

## What Changes

- Redesign the homepage into a clean, single-scroll portfolio with clear section hierarchy
- Restructure content to be recruiter-focused: Hero → About → Skills → Experience → Projects → Contact
- Remove client-side blog fetching from the homepage (move blog to a separate route only)
- Add proper SEO meta tags, Open Graph data, and JSON-LD structured data
- Improve navigation with smooth-scroll anchor links and active section highlighting
- Simplify the visual design: reduce decorative gradient blurs, use consistent spacing and typography
- Make the hero section more impactful with a clear tagline and call-to-action
- Ensure responsive design works well on mobile (elementix.us mobile-first approach)
- Add proper page metadata (title, description) per route for SEO

## Capabilities

### New Capabilities
- `seo-metadata`: Structured meta tags, Open Graph, JSON-LD, and per-route page titles for search engine optimization
- `homepage-layout`: Redesigned single-page homepage with recruiter-focused section ordering, smooth scroll, and clean visual hierarchy

### Modified Capabilities

## Impact

- **Components modified**: `Banner.tsx` (hero), `AboutMe.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `GetInTouch.tsx`, `Navbar.tsx`, `Footer.tsx`
- **Routes modified**: `_index.tsx` (homepage restructure), `root.tsx` (metadata/SEO)
- **Components removed**: `Blog.tsx` removed from homepage (stays on `/blog` route)
- **Styling**: Updates to `tailwind.css` — reduce decorative blur elements, tighten spacing tokens
- **Data constants**: `constants/index.ts` — streamline project/experience data for concise display
- **Dependencies**: No new dependencies required
- **SEO impact**: Improved search visibility and social sharing previews
