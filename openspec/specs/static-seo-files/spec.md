# Static SEO Files

## Purpose

Define the system's behavior for serving static SEO files (sitemap.xml and robots.txt) and removing broken dynamic route implementations.

## Requirements

### Requirement: Static sitemap.xml served at /sitemap.xml
The system SHALL serve a static XML sitemap file at `/sitemap.xml` with `Content-Type: application/xml`. The sitemap SHALL list the 2 valid routes (`/` and `/blog`) with appropriate `changefreq` and `priority` values.

#### Scenario: Sitemap returns valid XML
- **WHEN** a client requests `GET /sitemap.xml`
- **THEN** the response SHALL have status 200, `Content-Type: application/xml`, and body containing a valid `<?xml?>` declaration and `<urlset>` root element

#### Scenario: Sitemap contains all routes
- **WHEN** a client parses the sitemap XML
- **THEN** the sitemap SHALL contain `<url>` entries for `/` and `/blog`

#### Scenario: Sitemap entries have required fields
- **WHEN** a client parses any `<url>` entry in the sitemap
- **THEN** the entry SHALL contain `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` elements

### Requirement: Static robots.txt served at /robots.txt
The system SHALL serve a static robots.txt file at `/robots.txt` with `Content-Type: text/plain`. The file SHALL reference the sitemap URL and define crawl rules.

#### Scenario: Robots.txt returns valid plain text
- **WHEN** a client requests `GET /robots.txt`
- **THEN** the response SHALL have status 200, `Content-Type: text/plain`, and body beginning with `User-agent: *`

#### Scenario: Robots.txt references sitemap
- **WHEN** a client reads the robots.txt content
- **THEN** the file SHALL contain a `Sitemap:` directive pointing to `https://robiulhossain.com/sitemap.xml`

### Requirement: Broken route files removed
The system SHALL NOT contain the dynamic Remix route files for sitemap.xml or robots.txt, or the unused sitemap utility.

#### Scenario: No sitemap route file
- **WHEN** a developer inspects `app/routes/`
- **THEN** there SHALL be no file named `sitemap[.]xml.tsx`

#### Scenario: No robots route file
- **WHEN** a developer inspects `app/routes/`
- **THEN** there SHALL be no file named `robots[.]txt.tsx`

#### Scenario: No sitemap utility
- **WHEN** a developer inspects `app/utils/`
- **THEN** there SHALL be no file named `sitemap.ts`
