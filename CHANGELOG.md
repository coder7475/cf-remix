# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Update caniuse-lite version to 1.0.30001806 and adjust related dependencies

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

[Unreleased]: https://github.com/coder7475/cf-remix/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/coder7475/cf-remix/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/coder7475/cf-remix/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/coder7475/cf-remix/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/coder7475/cf-remix/releases/tag/v1.0.0
