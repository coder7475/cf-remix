# Blog Page Polish

## Purpose

Defines editorial layout, typography, color palette, spacing, and animation requirements for the blog page.

## Requirements

### Requirement: Blog uses editorial layout with featured article
The blog page SHALL display the first article as a featured full-width card with a large cover image, bold title, and excerpt, with remaining articles in a 2-column grid below.

#### Scenario: Featured article display
- **WHEN** the blog page loads and articles are fetched
- **THEN** the first article is displayed as a full-width card spanning the entire content width, with a large cover image, title in Space Grotesk bold, and the article excerpt

#### Scenario: Remaining articles grid
- **WHEN** articles are displayed after the featured article
- **THEN** the remaining articles appear in a 2-column grid (stacking to 1 column on mobile) with smaller cover images and compact card layouts

### Requirement: Blog uses Space Grotesk for article titles
Article titles on the blog page SHALL use Space Grotesk font family with semibold or bold weight.

#### Scenario: Title typography
- **WHEN** an article card renders on the blog page
- **THEN** the article title is displayed in Space Grotesk, semibold or bold, with tight letter spacing

### Requirement: Blog metadata uses JetBrains Mono
Article metadata (date, reading time, tags) SHALL use JetBrains Mono in uppercase or small-caps with wide letter spacing.

#### Scenario: Metadata rendering
- **WHEN** an article card displays metadata
- **THEN** the date and reading time are in JetBrains Mono, uppercase, with tracking-widest, in zinc-400 color

### Requirement: Blog uses updated color palette
The blog page SHALL use the refined color palette: near-black background, zinc-900 card surfaces, blue-500 for interactive elements, zinc-50 text, zinc-400 secondary text.

#### Scenario: Color application
- **WHEN** the blog page renders
- **THEN** card backgrounds are zinc-900, article titles are zinc-50, metadata is zinc-400, and links/hover states use blue-500

### Requirement: Blog page has generous whitespace
The blog page SHALL use generous vertical spacing between cards (minimum gap of 2rem between featured and grid, 1.5rem between grid cards).

#### Scenario: Spacing
- **WHEN** the blog page renders multiple article cards
- **THEN** there is visible whitespace between cards that creates breathing room (at least 1.5rem gap between grid items)

### Requirement: Blog entrance animation is orchestrated
The blog page SHALL animate article cards in with a staggered fade-in as they enter the viewport.

#### Scenario: Card entrance
- **WHEN** the blog page loads
- **THEN** article cards fade in with staggered timing (featured first, then grid items in sequence)

#### Scenario: Reduced motion respected
- **WHEN** the user has prefers-reduced-motion enabled
- **THEN** all blog card animations are disabled

### Requirement: Blog "View all articles" link uses refined styling
The "View all articles" link at the bottom of the blog page SHALL use Space Grotesk with an ArrowRight icon, styled with the blue-500 accent color and a hover transition.

#### Scenario: Footer link rendering
- **WHEN** the blog page renders the "View all articles" link
- **THEN** the link text is in Space Grotesk, uses blue-500 color, includes an ArrowRight icon, and has a hover transition (e.g., slight rightward shift or opacity change)
