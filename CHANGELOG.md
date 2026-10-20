# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [2.0.0] - 2026-10-20

### Added

- **Architecture Modernization**:
  - Reusable `useInView` hook in `app/hooks/use-in-view.ts` replacing duplicate `IntersectionObserver` boilerplate across components, with built-in `prefers-reduced-motion` support.
  - Global `ThemeProvider` context in `app/hooks/use-theme.tsx` supporting cross-tab theme synchronization via `storage` event listeners.
  - Mounted `<Toaster />` in `app/root.tsx` to restore full operation of the Radix UI toast notification subsystem.
  - Isolated `ErrorBoundary` in `app/root.tsx` to handle uncaught client/server errors gracefully without crashing the shell.
  - Catch-all 404 page in `app/routes/$.tsx` providing guided recovery navigation.
- **Content & Features**:
  - Standalone Schedule page (`app/routes/schedule.tsx`) and inline scheduler component (`CalendlyInline.tsx`).
  - "What I Do" section (`WhatIDo.tsx`) detailing core engineering competencies.
  - Curated "Recent Articles" section (`RecentArticles.tsx`) on the homepage.
  - Floating `ScrollToTop` button with theme-aware styling and smooth scrolling.
  - FocusGuard project added to the portfolio showcase.
  - URL-synchronized project filtering tabs (`?category=...&page=...`) with WAI-ARIA tab semantics.

### Changed

- **Performance & Data Fetching**:
  - Migrated Dev.to article fetching from client-side `axios` in `useEffect` to Remix server `loader` in `app/routes/blog.tsx` with edge cache headers (`stale-while-revalidate`), eliminating hydration delays and empty skeletons for social crawlers.
  - Completely removed `axios` dependency from `package.json`.
- **Navigation & SEO**:
  - Upgraded global `Navbar.tsx` with cross-route awareness: correctly detects non-root paths and navigates to `/#section` instead of failing silently on missing DOM anchors.
  - Replaced hardcoded site-wide canonical URLs with dynamic, per-route canonical tags in `app/root.tsx`.
  - Replaced dynamic sitemap/robots routes with high-performance static files in `public/robots.txt` and `public/sitemap.xml`.
- **Visuals & Design System**:
  - Refined light theme tokens and contrast ratios for improved accessibility.
  - Updated transparent logo styling and refined card border highlights.
  - Upgraded build tooling to `pnpm@10` and Node `>= 20`.

### Fixed

- Eliminated Cumulative Layout Shift (CLS) on the hero profile image with explicit dimensions and aspect ratios.
- Resolved accessibility gaps in `GetInTouch.tsx` by linking input fields with error text via `aria-describedby` and adding standard `autocomplete` attributes.
- Added `aria-current="page"` to active navigation links in `Navbar.tsx`.
- Corrected contrast and metadata issues identified in CodeRabbit reviews.

---

## [1.3.0] - 2026-09-20

### Added

- Theme toggle functionality with persistent light and dark modes.
- Meeting scheduler integration with Calendly support.
- Static SEO assets (`robots.txt`, `sitemap.xml`).

### Changed

- Enhanced mobile navigation drawer styling and smooth scroll behavior.
- Refactored `Banner` and `AboutMe` presentations for clarity and recruiter focus.

### Fixed

- Updated `caniuse-lite` database version and adjusted related dependencies.

---

## [1.2.0] - 2026-07-31

### Added

- Black theme implementation with refined color tokens and glassmorphism updates
- Homepage redesign for improved recruiter focus and SEO
- SEO improvements with updated meta tags and sitemap
- Sentry integration (later removed)
- New projects: Nextjs-auth, GraphQL POC, Text2SQL, Socket Programming Examples, YouTube Video Title Generator, Churn Prediction Pipeline, E-commerce Microservice
- Content update route
- OpenSpec workflow initiation

### Changed

- Updated portfolio info to match GitHub profile
- Refactored title to "Software Engineer" and polished homepage/blog design
- Enhanced styling with new background gradients and improved CSS variables
- Updated experience entries and navbar
- Updated skills section and project technologies

### Fixed

- SEO og-image URLs
- Experiences link in navbar
- Skills and experience updates
- Removed outdated experience entries and updated current role details
- Removed Sentry and added not-found page

---

## [1.1.0] - 2026-07-15

### Added

- Status badge to Projects component
- Contact form with client-side validation and mailto functionality
- Cloudflare Pages function handler for server build integration
- Pagination for projects display
- New project: Sentiment Analysis Bangla
- Cover image support and placeholder images for blog posts

### Changed

- Improved Hero component with new messaging and better link accessibility
- Improved Footer component layout and styling for better responsiveness
- Enhanced Projects component layout and improved project descriptions
- Replaced anchor tags with Remix `Link` components for improved routing
- Updated meta title and description

### Fixed

- Email address in contact section
- Blog post fetching logic to handle loading state and increase posts per page
- Skill section (NestJS)
- Minor issues

### Dependency Updates

- Upgraded packages and compatibility date

---

## [1.0.1] - 2026-07-10

### Added

- Docstrings to development documentation
- Updated skills and pipeline cache

### Fixed

- Corrected spelling of "Blog" to "Blogs" in Navbar component
- About me apostrophe

---

## [1.0.0] - 2026-07-08

### Added

- Initial release of cf-remix portfolio website
- Remix framework with Cloudflare Pages deployment
- Server-side rendering and edge computing
- Portfolio sections: About, Experience, Projects, Skills, Blog, Contact
- GitHub Actions CI/CD pipeline
- TypeScript, Tailwind CSS, Radix UI, Lucide React

[Unreleased]: https://github.com/coder7475/cf-remix/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/coder7475/cf-remix/compare/v1.3.0...v2.0.0
[1.3.0]: https://github.com/coder7475/cf-remix/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/coder7475/cf-remix/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/coder7475/cf-remix/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/coder7475/cf-remix/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/coder7475/cf-remix/releases/tag/v1.0.0
