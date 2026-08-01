## ADDED Requirements

### Requirement: Homepage section order
The homepage SHALL render sections in this exact order: Hero → About → Skills → Experience → Projects → Contact. The Blog section SHALL NOT appear on the homepage.

#### Scenario: Section rendering order
- **WHEN** user loads the homepage
- **THEN** sections appear in order: Hero, About, Skills, Experience, Projects, Contact

#### Scenario: Blog not on homepage
- **WHEN** user loads the homepage
- **THEN** no Blog section or blog post content is rendered

### Requirement: Hero section content
The Hero section SHALL display a centered layout with: a greeting/tagline, a primary heading (name + role), a subtitle describing key expertise (1-2 sentences), and a single CTA button that scrolls to the Contact section. The profile image SHALL NOT appear in the Hero section.

#### Scenario: Hero CTA scrolls to contact
- **WHEN** user clicks the CTA button in the Hero section
- **THEN** the page smooth-scrolls to the Contact section

#### Scenario: Hero without profile image
- **WHEN** user views the Hero section
- **THEN** no profile image is displayed

### Requirement: Smooth scroll navigation
The Navbar SHALL use `scroll-behavior: smooth` on the HTML element and all navigation links SHALL use `href="#section-id"` anchor links pointing to section IDs on the homepage.

#### Scenario: Click nav link scrolls smoothly
- **WHEN** user clicks "Experience" in the Navbar
- **THEN** page smooth-scrolls to the Experience section

#### Scenario: Nav link uses anchor href
- **WHEN** user inspects a Navbar link
- **THEN** the href is a `#`-prefixed section ID (e.g., `#experience`)

### Requirement: Active section highlighting
The Navbar SHALL highlight the navigation link corresponding to the currently visible section. Highlighting SHALL use `text-primary` (cyan) color for the active link and default text color for inactive links.

#### Scenario: Active link updates on scroll
- **WHEN** user scrolls to the Skills section
- **THEN** the "Skills" nav link is highlighted with `text-primary` color

#### Scenario: Active link on page load
- **WHEN** user loads the homepage at the top
- **THEN** the "Home" nav link is highlighted

### Requirement: Consistent section spacing
Every homepage section SHALL use consistent vertical padding: `py-16 md:py-24`. All sections SHALL use a centered container with `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`.

#### Scenario: Section padding consistency
- **WHEN** user views any two sections
- **THEN** both sections have identical vertical padding values

#### Scenario: Container max width
- **WHEN** user views any section content
- **THEN** content is constrained to max-width 1024px (5xl) and centered

### Requirement: Visual section differentiation
Adjacent sections SHALL use alternating background colors to create visual separation. Sections SHALL alternate between `bg-background` and `bg-muted/30` (or equivalent subtle variation).

#### Scenario: Alternating backgrounds
- **WHEN** user scrolls through sections
- **THEN** adjacent sections have visually distinct background colors

### Requirement: Section headings
Each section SHALL have a descriptive heading (h2) with consistent styling: `text-3xl font-bold mb-8`. An optional subtitle line below the heading SHALL use `text-muted-foreground`.

#### Scenario: Section heading styling
- **WHEN** user views any section
- **THEN** the section heading is rendered as an h2 with bold, 3xl font size

### Requirement: Mobile responsive layout
All homepage sections SHALL be fully responsive. On screens below `md` (768px), content stacks vertically, font sizes reduce appropriately, and the Navbar shows a hamburger menu.

#### Scenario: Mobile layout
- **WHEN** user views homepage on a 375px wide screen
- **THEN** all sections stack vertically, text is readable, and no horizontal overflow occurs

#### Scenario: Tablet layout
- **WHEN** user views homepage on a 768px wide screen
- **THEN** sections use the medium breakpoint layout with appropriate spacing

### Requirement: Remove decorative gradient blurs
The decorative gradient blur orbs (radial gradient overlays) in `root.tsx` SHALL be removed. The background SHALL be a flat `bg-background` color.

#### Scenario: No gradient blur orbs
- **WHEN** user views any page
- **THEN** no decorative gradient blur overlays are rendered in the background

### Requirement: Navbar scroll behavior
The Navbar SHALL have a solid background (not transparent) with a subtle bottom border or shadow when scrolled past the Hero section. At the top of the page, the Navbar MAY be transparent.

#### Scenario: Navbar at top
- **WHEN** user is at the top of the homepage
- **THEN** Navbar background is transparent or matches the hero background

#### Scenario: Navbar when scrolled
- **WHEN** user scrolls past the Hero section
- **THEN** Navbar has a solid background with a visible bottom border or shadow
