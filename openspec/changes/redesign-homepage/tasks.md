## 1. SEO Metadata Setup

- [x] 1.1 Add `meta` export to `root.tsx` with default title, description, robots, and Open Graph tags
- [x] 1.2 Add JSON-LD Person schema `<script type="application/ld+json">` block in `root.tsx`
- [x] 1.3 Add `links` export to `root.tsx` with canonical URL tag
- [x] 1.4 Add `meta` export to `_index.tsx` with homepage-specific title and description
- [x] 1.5 Add `meta` exports to `blog.tsx`, `about.tsx`, `projects.tsx`, `skills.tsx`, `experiences.tsx`, `contact.tsx` with page-specific titles and descriptions

## 2. Homepage Cleanup

- [x] 2.1 Remove decorative gradient blur orbs from `root.tsx` layout
- [x] 2.2 Remove `Blog` import and rendering from `_index.tsx`
- [x] 2.3 Add section IDs (`#hero`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`) to each homepage section

## 3. Hero Section Redesign

- [x] 3.1 Refactor `Banner.tsx` to centered layout with tagline, heading, subtitle, and single CTA button
- [x] 3.2 Remove profile image from Hero (keep in About only)
- [x] 3.3 CTA button uses `href="#contact"` for smooth scroll

## 4. Section Styling Consistency

- [x] 4.1 Apply consistent `py-16 md:py-24` padding to all homepage sections
- [x] 4.2 Ensure all sections use `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` container
- [x] 4.3 Add `text-3xl font-bold mb-8` heading styling to all section headings
- [x] 4.4 Apply alternating background colors (`bg-background` / `bg-muted/30`) to adjacent sections

## 5. Navigation Improvements

- [x] 5.1 Update Navbar links to use `#section-id` anchor hrefs for homepage sections
- [x] 5.2 Implement IntersectionObserver in `Navbar.tsx` to track active section and highlight corresponding nav link
- [x] 5.3 Add scroll-based Navbar background change (transparent at top, solid with border when scrolled)
- [x] 5.4 Add `scroll-behavior: smooth` to HTML element in `root.tsx`

## 6. Responsive Design

- [x] 6.1 Verify and fix all homepage sections for mobile layout (375px width)
- [x] 6.2 Ensure font sizes reduce appropriately on mobile
- [x] 6.3 Verify no horizontal overflow on any screen size
- [x] 6.4 Test hamburger menu functionality on mobile

## 7. Verification

- [x] 7.1 Run `npm run build` to verify no build errors
- [x] 7.2 Visually verify homepage sections render in correct order on desktop
- [x] 7.3 Verify smooth scroll works for nav links and hero CTA
- [x] 7.4 Verify active nav link updates on scroll
- [x] 7.5 Verify SEO meta tags are present in page source
- [x] 7.6 Verify JSON-LD Person schema is valid via Google Rich Results Test
