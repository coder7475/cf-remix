## Context

The site is a personal portfolio for Robiul Hossain, a Backend & Cloud Infrastructure Engineer, built with Remix on Cloudflare Pages. The current design uses a dark theme with cyan (#06F9F9) accents, glassmorphism cards, and gradient text across six homepage sections (Hero, About, Skills, Experience, Projects, Contact) plus a blog page that lists Dev.to articles.

The current design suffers from:
- Repetitive section structure: every section uses the same centered-heading + glass-card-grid pattern
- Safe, interchangeable typography (Manrope for headings, Inter for body, used inconsistently)
- A generic cyan-on-black palette that reads as a template rather than a personal brand
- Limited, unchoreographed motion (basic slide-in on scroll for every section)

The subject's world — cloud infrastructure, distributed systems, backend engineering — has its own visual language: precision, structure, reliability, terminal aesthetics, system diagrams. These should inform design choices rather than defaulting to generic portfolio conventions.

## Goals / Non-Goals

**Goals:**
- Create a distinctive visual identity that couldn't be mistaken for a template
- Establish a clear typographic hierarchy with intentional font pairing
- Give each homepage section a unique structural treatment
- Elevate the blog page to an editorial layout
- Choreograph motion to feel deliberate, not scattered
- Refine the color palette for better hierarchy and contrast

**Non-Goals:**
- Adding new pages, routes, or navigation changes
- Changing functionality (contact form, Dev.to API, pagination)
- Adding animation library dependencies
- Changing responsive breakpoints or mobile layout structure
- Implementing light mode

## Decisions

### 1. Typography: Space Grotesk + Inter + JetBrains Mono

**Decision:** Replace Manrope with Space Grotesk as the display typeface. Keep Inter for body text and JetBrains Mono for code/technical elements.

**Why:** Space Grotesk is a geometric sans-serif with a technical, precise character — its slightly squared letterforms evoke engineering drawings and terminal fonts without being a monospace. It pairs naturally with Inter (which is designed as a neutral body face) rather than competing with it like Manrope does. JetBrains Mono stays for code blocks and technical labels where monospace is semantically appropriate.

**Alternatives considered:**
- *Outfit*: Clean and modern but too friendly/warm for an infrastructure engineer's brand
- *IBM Plex Sans*: Technical feel but overused in dev portfolios
- *Syne*: Distinctive but too expressive — risks overpowering the content

**Type scale:**
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight` (Space Grotesk)
- Section headings: `text-3xl md:text-4xl font-semibold tracking-tight` (Space Grotesk)
- Card titles: `text-xl font-semibold` (Space Grotesk)
- Body text: `text-base leading-relaxed` (Inter)
- Labels/captions: `text-sm font-mono uppercase tracking-widest` (JetBrains Mono)

### 2. Color Palette: Cool Technical with Warm Accent

**Decision:** Shift from cyan-on-black to a more nuanced palette:
- Background: `#09090B` (zinc-950, near-black with warmth)
- Surface: `#18181B` (zinc-900, for cards)
- Primary accent: `#3B82F6` (blue-500) — trustworthy, technical, infrastructure-appropriate
- Warm accent: `#F59E0B` (amber-500) — used sparingly for status, CTAs, highlights
- Text primary: `#FAFAFA` (zinc-50)
- Text secondary: `#A1A1AA` (zinc-400)
- Border: `#27272A` (zinc-800)

**Why:** Blue reads as technical and reliable — it's the color of cloud provider dashboards, CI/CD badges, and infrastructure tooling. The amber accent provides warmth and draws attention to interactive elements (buttons, status badges) without competing with the primary. This palette is more considered than the default cyan and creates better visual hierarchy.

**Alternatives considered:**
- *Keep cyan*: It's already established, but it reads as a default rather than a choice
- *Emerald green*: Too associated with "success" states, would create confusion
- *Violet/purple*: Trending but risks looking like every other SaaS landing page

### 3. Hero: Asymmetric Split with Code Character

**Decision:** Replace the centered hero with a two-column asymmetric layout:
- Left (60%): Large typographic statement — name in Space Grotesk bold, role as a mono label, a single-line tagline
- Right (40%): A subtle, ambient code/system element — not a screenshot, but an abstract representation (animated ASCII art of a server topology, or a minimal system diagram)

**Why:** The hero should immediately communicate "this is an infrastructure engineer" through its structure, not just its words. The asymmetric layout breaks the centered template pattern. The code-adjacent element on the right serves as the page's signature — it's the memorable element that anchors the design in the subject's world.

**Alternatives considered:**
- *Full-viewport terminal*: Too niche, risks alienating non-technical recruiters
- *Photo + text*: Generic, doesn't communicate the subject matter
- *Animated particles*: Visually appealing but says nothing about infrastructure

### 4. Section Structure: Differentiated, Not Repeated

**Decision:** Give each section a distinct structural treatment:

| Section | Current | Proposed |
|---|---|---|
| About | Centered heading + 2-col (text/image) | Left-aligned heading with a vertical accent line, text flowing beside the image |
| Skills | Centered heading + 3-col grid | Categorized with a tabbed or segmented layout, showing depth not just breadth |
| Experience | Centered heading + timeline | Left-rail timeline with expanded detail panels |
| Projects | Centered heading + 2-col card grid | Masonry or staggered grid with hover-reveal details |
| Contact | Centered heading + 2-col (info/form) | Full-width form with contact info as a compact sidebar |

**Why:** Repetition without purpose is the hallmark of templated design. Each section has different content (narrative text, skill categories, chronological entries, project cards, form) and should use a structure that suits its content type. The common thread is Space Grotesk headings and the refined color palette — not identical layouts.

### 5. Motion: Orchestrated, Not Scattered

**Decision:** Replace per-section slide-in animations with:
- A page-load sequence: hero elements animate in with staggered timing (fade + slight upward drift)
- Scroll-triggered section reveals: each section fades in once as it enters viewport, with a subtle scale (0.98 → 1.0)
- Targeted micro-interactions: button hover states, card hover lifts, focus ring transitions
- Reduced motion: respect `prefers-reduced-motion` with a media query that disables all animations

**Why:** The current approach animates every section identically on scroll, which creates visual noise rather than choreography. A page-load sequence gives the hero impact. Scroll reveals are sufficient for other sections — the content should speak, not the animation. Micro-interactions on interactive elements provide feedback without distraction.

### 6. Blog: Editorial Card Layout

**Decision:** Redesign the blog listing as an editorial layout:
- Featured article: full-width card with large cover image, bold title, and excerpt
- Remaining articles: 2-column grid with smaller cards
- Stronger typographic hierarchy: article titles in Space Grotesk, metadata in JetBrains Mono
- Generous whitespace between cards

**Why:** The current 4-card horizontal layout treats all articles equally and wastes vertical space. An editorial layout creates hierarchy — the featured article draws attention, and the grid below invites browsing. This is how content-heavy sites (magazines, documentation) present articles.

## Risks / Trade-offs

- **Font loading performance**: Adding Space Grotesk increases initial load. Mitigation: use `font-display: swap` and preload the critical weights.
- **Scope creep on section redesigns**: Each section refactor could spiral into a full rebuild. Mitigation: constrain changes to layout structure and typography — don't redesign component internals.
- **Color contrast**: The amber accent on dark backgrounds needs WCAG AA compliance verification. Mitigation: test all accent-on-background combinations and adjust if needed.
- **Mobile layout complexity**: Asymmetric layouts (hero, about) need careful responsive handling. Mitigation: stack to single-column on mobile, test at 375px width.
- **Blog API changes**: The Dev.to API response shape could change. Mitigation: no changes to data fetching logic, only presentation.
