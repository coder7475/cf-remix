## Context

The portfolio is a Remix v2 app deployed on Cloudflare Pages. The current homepage (`_index.tsx`) renders all sections (Hero, AboutMe, Skills, Experience, Blog, Contact) in a single vertical stack with a Navbar and Footer. Each section uses IntersectionObserver for scroll-triggered animations. Styling uses Tailwind CSS with a dark theme (slate/navy background, cyan accent) and shadcn/ui design tokens.

Problems: no visual hierarchy, blog section adds client-side load time irrelevant to recruiter flow, decorative gradient blurs feel dated, no SEO metadata, inconsistent spacing across sections. The reference site (elementix.us) demonstrates a clean, section-based single page with smooth scroll, clear headings, and mobile-first responsive design.

## Goals / Non-Goals

**Goals:**
- Create a concise, recruiter-focused one-page homepage: Hero → About → Skills → Experience → Projects → Contact
- Add proper SEO: meta description, Open Graph tags, JSON-LD Person schema, per-route titles
- Clean up visual design: remove excessive gradient blurs, use consistent spacing (8px grid), clear typography hierarchy
- Smooth-scroll navigation with active section highlighting via IntersectionObserver
- Mobile-first responsive layout matching elementix.us patterns
- Remove Blog from homepage (keep at `/blog` route)

**Non-Goals:**
- Redesigning the blog, about, or other standalone routes (only homepage)
- Adding new animations or complex visual effects
- Changing the data model or constants structure (streamline display only)
- Adding new npm dependencies
- Changing the deployment pipeline or Cloudflare configuration

## Decisions

### 1. Section order and content density
**Decision**: Hero → About → Skills → Experience → Projects → Contact (6 sections, no Blog)
**Rationale**: This follows the standard recruiter scan pattern — who you are, what you can do, where you've worked, what you've built, how to reach you. Blog content is noise for a first-time recruiter visit.
**Alternatives considered**: Keeping Blog in a tab/accordion (rejected — adds complexity, blog belongs on its own route).

### 2. SEO implementation approach
**Decision**: Use Remix `meta` exports + `links` exports on each route, with JSON-LD via a `<script type="application/ld+json">` tag in `root.tsx`
**Rationale**: Remix's built-in `meta` export is the idiomatic way to handle per-route SEO. JSON-LD in root.tsx avoids duplicating structured data across routes. No new dependencies needed.
**Alternatives considered**: react-helmet (unnecessary with Remix's built-in meta), next-seo (not applicable to Remix).

### 3. Navigation active section highlighting
**Decision**: Use a single IntersectionObserver in `Navbar.tsx` that watches all section IDs, updating a `activeSection` state
**Rationale**: One observer is more performant than per-section observers. The Navbar already exists and wraps all pages, making it the natural home for this logic. Active link styling uses Tailwind's `text-primary` class.
**Alternatives considered**: Scroll-spy library (overkill for 6 sections), CSS-only approach (can't detect active section reliably).

### 4. Visual simplification
**Decision**: Remove the decorative gradient blur orbs from `root.tsx`, reduce section padding to `py-16 md:py-24`, use consistent `max-w-5xl mx-auto` container
**Rationale**: The current gradient blurs add visual noise without improving readability. elementix.us uses clean white/dark sections with generous whitespace. Consistent spacing creates visual rhythm.
**Alternatives considered**: Keeping blurs but reducing opacity (still distracting), replacing with subtle grid patterns (adds complexity).

### 5. Hero section redesign
**Decision**: Full-width hero with centered text, large heading, subtitle, and a single CTA button. Remove the profile image from hero (move to About section only).
**Rationale**: elementix.us pattern — hero is about the value proposition, not the person. Profile image belongs in About. CTA scrolls to Contact.
**Alternatives considered**: Split hero with image (traditional but less impactful for a solo portfolio).

### 6. Mobile responsiveness
**Decision**: Mobile-first with breakpoints at `md` (768px) and `lg` (1024px). Stack all sections vertically on mobile. Navbar collapses to hamburger menu (already implemented).
**Rationale**: Matches elementix.us approach. Most recruiters browse on mobile first.

## Risks / Trade-offs

- **[Risk]** Removing Blog from homepage reduces content freshness signals for SEO → **Mitigation**: Blog route still exists and is linked in Footer; add `robots.txt` and sitemap entries for `/blog`.
- **[Risk]** Removing gradient blurs may make the site feel plain → **Mitigation**: Use subtle background color alternation between sections (e.g., `bg-background` vs `bg-muted/30`) for visual depth.
- **[Risk]** Single IntersectionObserver for nav highlighting may have slight delay on fast scroll → **Mitigation**: Use `threshold: [0, 0.25, 0.5, 0.75, 1]` for granular updates; acceptable for a portfolio site.
- **[Trade-off]** JSON-LD Person schema requires hardcoding name/title in root.tsx → Acceptable since portfolio data is already static in constants.
