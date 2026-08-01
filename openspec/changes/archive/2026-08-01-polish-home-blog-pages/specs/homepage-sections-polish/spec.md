## ADDED Requirements

### Requirement: All sections use Space Grotesk for headings
Every homepage section heading SHALL use Space Grotesk font family, replacing Manrope.

#### Scenario: Section heading font
- **WHEN** any homepage section heading renders (About, Skills, Experience, Projects, Contact)
- **THEN** the heading text uses Space Grotesk, semibold or bold weight, with tracking-tight

### Requirement: About section uses left-aligned asymmetric layout
The About section SHALL use a left-aligned heading with a vertical accent line, with text flowing beside the profile image, replacing the current centered 2-column layout.

#### Scenario: Desktop about layout
- **WHEN** the About section renders on desktop (viewport > 768px)
- **THEN** the heading is left-aligned with a vertical blue accent line to its left, and the text and image sit side-by-side with the text column wider than the image column

#### Scenario: Mobile about layout
- **WHEN** the About section renders on mobile (viewport <= 768px)
- **THEN** the layout stacks vertically with the heading and accent line at the top, followed by text, then the image

### Requirement: Skills section uses segmented/category layout
The Skills section SHALL present skills using a segmented or categorized layout that shows depth within each category, rather than a uniform 3-column grid of cards.

#### Scenario: Skills categories
- **WHEN** the Skills section renders
- **THEN** skill categories are visually distinguished (e.g., tabs, segmented sections, or accordion groups) with individual skills listed within each category

#### Scenario: Skills on mobile
- **WHEN** the Skills section renders on mobile
- **THEN** categories stack vertically and remain fully accessible

### Requirement: Experience section uses left-rail timeline
The Experience section SHALL use a left-rail timeline layout with expanded detail panels for each entry, rather than the centered alternating timeline.

#### Scenario: Desktop experience layout
- **WHEN** the Experience section renders on desktop
- **THEN** a vertical timeline line runs along the left side, with experience entries as cards extending to the right, each showing title, company, date, and responsibilities

#### Scenario: Timeline entry interaction
- **WHEN** a user views an experience entry
- **THEN** the entry card is fully expanded showing all responsibility details (no collapse/expand interaction required)

### Requirement: Projects section uses staggered grid
The Projects section SHALL use a staggered or masonry-style grid layout with hover-reveal details, rather than a uniform 2-column grid.

#### Scenario: Projects grid layout
- **WHEN** the Projects section renders on desktop
- **THEN** project cards are arranged in a staggered grid where cards may have varying heights based on content

#### Scenario: Project card hover
- **WHEN** a user hovers over a project card
- **THEN** additional details (tech stack, links) are revealed or emphasized with a subtle transition

### Requirement: Contact section uses full-width form layout
The Contact section SHALL use a full-width form with contact info as a compact sidebar or inline element, rather than a 50/50 split.

#### Scenario: Contact layout
- **WHEN** the Contact section renders on desktop
- **THEN** the form occupies the majority of the width, with contact information (email, social links) displayed compactly to the side or above the form

### Requirement: Consistent type scale across all sections
All sections SHALL use a consistent type scale: section headings at text-3xl/text-4xl (Space Grotesk), body text at text-base (Inter), labels/captions at text-sm uppercase tracking-widest (JetBrains Mono).

#### Scenario: Type scale adherence
- **WHEN** any section renders text
- **THEN** headings, body, and labels use the defined type scale and corresponding font families

### Requirement: Reduced motion respected across all sections
All scroll-triggered reveal animations across sections SHALL respect the prefers-reduced-motion media query.

#### Scenario: Reduced motion enabled
- **WHEN** the user has prefers-reduced-motion enabled
- **THEN** all section reveal animations are disabled and content appears immediately
