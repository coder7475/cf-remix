# SEO Metadata

## Purpose

Define the search engine optimization metadata requirements including page titles, meta descriptions, Open Graph tags, structured data, and canonical URLs.

## Requirements

### Requirement: Per-route page title
Every route SHALL have a unique `<title>` tag set via Remix `meta` export. Format: `"<Page Name> | Fahad's Portfolio"` for non-homepage routes, and `"Fahad — Full-Stack Developer | Portfolio"` for the homepage.

#### Scenario: Homepage title
- **WHEN** user visits the homepage (`/`)
- **THEN** page title is `"Fahad — Full-Stack Developer | Portfolio"`

#### Scenario: Subpage title
- **WHEN** user visits `/blog`
- **THEN** page title is `"Blog | Fahad's Portfolio"`

### Requirement: Meta description per route
Every route SHALL have a `<meta name="description">` tag via Remix `meta` export. The homepage description SHALL be under 160 characters and mention key skills (e.g., "Full-stack developer specializing in React, Cloudflare, and modern web technologies.").

#### Scenario: Homepage meta description
- **WHEN** user visits the homepage
- **THEN** a `<meta name="description">` tag exists with content under 160 characters

#### Scenario: Subpage meta description
- **WHEN** user visits `/projects`
- **THEN** a `<meta name="description">` tag exists describing the projects page

### Requirement: Open Graph tags
Every route SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:type`, `og:url`) via Remix `meta` export. `og:type` SHALL be `"website"` for all pages. `og:url` SHALL use the canonical URL from environment or a hardcoded base URL.

#### Scenario: Homepage Open Graph
- **WHEN** user visits the homepage
- **THEN** `og:title`, `og:description`, `og:type`, and `og:url` meta tags are present in the document head

#### Scenario: Social sharing preview
- **WHEN** a link to the homepage is shared on social media
- **THEN** the platform renders the `og:title` and `og:description` values

### Requirement: JSON-LD structured data
The root layout (`root.tsx`) SHALL include a `<script type="application/ld+json">` block with a Person schema containing `name`, `jobTitle`, `url`, and `sameAs` (social profiles) fields.

#### Scenario: JSON-LD present on all pages
- **WHEN** any page loads
- **THEN** a JSON-LD script tag with Person schema is present in the document

#### Scenario: JSON-LD contains valid Person data
- **WHEN** a crawler parses the JSON-LD
- **THEN** the Person schema includes `name`, `jobTitle`, and at least one `sameAs` URL

### Requirement: Canonical URL
Every route SHALL include a `<link rel="canonical">` tag via Remix `links` export pointing to the full page URL.

#### Scenario: Canonical tag on homepage
- **WHEN** user visits `/`
- **THEN** a `<link rel="canonical" href="https://fahad.dev/">` (or equivalent) is present

### Requirement: Robots meta tag
The root layout SHALL include `<meta name="robots" content="index, follow">` to ensure search engines index all pages.

#### Scenario: Robots tag present
- **WHEN** any page loads
- **THEN** `<meta name="robots" content="index, follow">` is present
