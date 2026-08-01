# Homepage Hero Polish

## Purpose

Defines the asymmetric layout, typography, animation, and color requirements for the homepage hero section.

## Requirements

### Requirement: Hero uses asymmetric two-column layout
The hero section SHALL use a two-column asymmetric layout on desktop (approximately 60/40 split), stacking to a single column on mobile.

#### Scenario: Desktop layout
- **WHEN** the hero renders on a viewport wider than 768px
- **THEN** the left column contains the typographic content (name, role, tagline) and the right column contains a code/system visual element

#### Scenario: Mobile layout
- **WHEN** the hero renders on a viewport 768px or narrower
- **THEN** the layout stacks vertically with the typographic content above the visual element

### Requirement: Hero displays name with Space Grotesk bold
The hero SHALL display the name "Robiul Hossain" in Space Grotesk bold at a large scale (text-5xl on mobile, text-7xl on desktop).

#### Scenario: Name rendering
- **WHEN** the hero section is visible
- **THEN** the name is displayed in Space Grotesk font family, bold weight, with tight letter spacing (tracking-tight)

### Requirement: Hero displays role as a mono label
The hero SHALL display the role "Backend & Cloud Infrastructure Engineer" in JetBrains Mono, uppercase, with wide letter spacing, styled as a label above or near the name.

#### Scenario: Role label rendering
- **WHEN** the hero section is visible
- **THEN** the role text appears in JetBrains Mono, uppercase, with tracking-widest, in the primary accent color (blue-500)

### Requirement: Hero includes a code-adjacent visual element
The hero SHALL include an ambient code or system topology element on the right side — abstract, not a screenshot, serving as the page's signature visual.

#### Scenario: Visual element presence
- **WHEN** the hero section renders on desktop
- **THEN** a subtle code-adjacent element (ASCII art, minimal system diagram, or animated terminal snippet) is visible in the right column

#### Scenario: Visual element animation
- **WHEN** the hero loads
- **THEN** the visual element animates in with a subtle entrance (fade + slight drift) coordinated with the typographic elements

### Requirement: Hero entrance animation is orchestrated
The hero SHALL animate elements in with staggered timing on page load — name, role, tagline, and visual element appear in sequence with slight delays.

#### Scenario: Staggered entrance
- **WHEN** the page loads
- **THEN** hero elements animate in sequence (role label → name → tagline → visual element) with 100-200ms delays between each, using fade and upward drift

#### Scenario: Reduced motion respected
- **WHEN** the user has prefers-reduced-motion enabled
- **THEN** all hero animations are disabled and elements appear immediately

### Requirement: Hero uses refined color palette
The hero SHALL use the updated color palette: near-black background (#09090B), blue-500 primary accent, zinc-50 text, and zinc-400 secondary text.

#### Scenario: Color application
- **WHEN** the hero renders
- **THEN** the background is #09090B, the role label is blue-500, the name is zinc-50, and the tagline is zinc-400
