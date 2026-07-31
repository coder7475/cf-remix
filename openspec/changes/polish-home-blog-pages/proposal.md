## Why

The homepage and blog page currently use a generic dark theme with cyan accents and glassmorphism cards — a look that could belong to any developer portfolio. The design lacks a distinctive point of view: typography choices are safe (Inter, Manrope, JetBrains Mono used interchangeably), layout patterns repeat across sections without structural differentiation, and motion is limited to basic scroll-triggered slide-ins. To position this as a memorable portfolio rather than a template, both pages need deliberate, opinionated design choices that reflect the subject — a backend and cloud infrastructure engineer — and create visual identity.

## What Changes

- **Homepage hero redesign**: Replace the generic centered text + gradient background with a hero that leads with a characteristic element of cloud infrastructure work — a bold typographic statement with intentional hierarchy, not a template hero
- **Typography system overhaul**: Introduce a more distinctive type pairing with a clear scale — a characterful display face for headings and a refined body face, replacing the current interchangeable use of Manrope/Inter
- **Section structural differentiation**: Give each homepage section (About, Skills, Experience, Projects, Contact) a unique structural treatment rather than repeating the same centered-heading + glass-card-grid pattern
- **Blog page visual refinement**: Elevate the blog listing from a simple card grid to a more editorial layout with stronger typographic hierarchy and intentional whitespace
- **Motion choreography**: Replace scattered slide-in animations with a more orchestrated page-load sequence and targeted micro-interactions that serve the content
- **Color and surface treatment refinement**: Tighten the palette — move away from the default cyan-on-black toward a more considered accent strategy with better contrast and hierarchy

## Capabilities

### New Capabilities
- `homepage-hero-polish`: Redesigned hero section with distinctive typographic treatment and intentional visual hierarchy
- `homepage-sections-polish`: Refined section layouts, structural differentiation, and typography system across About, Skills, Experience, Projects, and Contact
- `blog-page-polish`: Editorial blog listing with stronger typography and layout treatment

### Modified Capabilities

## Impact

- **Components affected**: `Banner.tsx`, `AboutMe.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `GetInTouch.tsx`, `Blog.tsx`, `blog.tsx` (route)
- **Styling affected**: `tailwind.css` (design tokens, utility classes), `tailwind.config.ts` (possible font additions)
- **Root layout**: `root.tsx` (font loading if typefaces change)
- **Dependencies**: Google Fonts (new typeface if chosen), no new npm packages expected
- **Breaking changes**: None — visual-only changes to existing pages

## Non-goals

- Adding new pages or routes
- Changing the site's information architecture or navigation structure
- Modifying the Dev.to API integration or blog data source
- Adding new npm dependencies for animation libraries (will use CSS/Tailwind only)
- Changing the responsive breakpoints or mobile layout structure
- Altering the contact form functionality or form handling
