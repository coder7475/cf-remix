## Context

The homepage currently flows: Hero → About → Skills → Experience → Projects → Contact. Adding a "What I Do" section after Hero provides immediate context about service offerings before diving into detailed skills and experience.

## Goals / Non-Goals

**Goals:**
- Create clear service communication immediately after hero
- Display 3 core areas: Backend, Frontend, Deployment
- Responsive layout: 3-column grid on desktop, single column on mobile
- Consistent styling with existing glass-morphism design language
- Each card includes icon, title, description, and skill tags

**Non-Goals:**
- Interactive animations beyond hover effects
- Dynamic content or data fetching
- Multiple layout configurations
- Card filtering or sorting

## Decisions

**1. Component Architecture: Single WhatIDo component with card data constants**

Create a dedicated `WhatIDo.tsx` component with card content defined in a constants file. This follows the existing pattern used by Skills component.

*Alternative considered:* Inline data in component - rejected for maintainability and consistency with project patterns.

**2. Responsive Strategy: CSS Grid with Tailwind breakpoints**

Use `grid-cols-1 md:grid-cols-3` for responsive layout. Mobile shows single column with full-width cards, desktop shows 3-column grid.

*Alternative considered:* Flexbox with wrap - rejected because Grid provides better alignment control for equal-height cards.

**3. Card Design: Glass-morphism with icon and tags**

Each card uses the existing `glass-morphism` class for consistency. Include Lucide icon, title, description, and relevant skill tags from existing skillsConstants.

*Alternative considered:* Plain cards without glass effect - rejected for visual consistency with contact sidebar.

**4. Placement: Between Hero and About**

Insert after Hero section in `_index.tsx` with `id="what-i-do"` for navigation support.

## Risks / Trade-offs

- **Layout shift** → Cards have varying content height; mitigated by Grid equal-height behavior
- **Mobile UX** → Single column may require scrolling; mitigated by concise card content
- **Navigation** → New section needs navbar entry; consider adding to SECTION_IDS