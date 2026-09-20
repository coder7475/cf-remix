## Context

The Featured Projects section currently displays all 15 projects in a single paginated list with 4 projects per page. The component uses a staggered grid layout with glass-morphism cards. Adding tabs will allow visitors to filter projects by category without changing the overall layout.

## Goals / Non-Goals

**Goals:**
- Add tabbed navigation to filter projects by category
- Display project counts in each tab
- Maintain existing card design and pagination
- Support 4 categories: Backend, Fullstack, AI/ML, Mobile
- Default to "Backend" tab (most projects)

**Non-Goals:**
- Multiple category selection
- Search or filter by technology
- Project detail pages
- Animated tab transitions

## Decisions

**1. Data Structure: Add `category` field to Project type**

Add a required `category` field with union type `"backend" | "fullstack" | "ai-ml" | "mobile"` to the Project interface. This enables filtering without complex logic.

*Alternative considered:* Using technology tags for filtering - rejected because it's harder to maintain and less intuitive for visitors.

**2. Tab Component: Inline tabs in Projects.tsx**

Add tab state management directly in the Projects component. Use a simple `activeTab` state with `useState`. Tabs display category name and project count.

*Alternative considered:* Separate Tab component - adds unnecessary complexity for a single use case.

**3. Filtering: Client-side filtering with useMemo**

Filter projects based on active tab using `useMemo` for performance. Reset pagination to page 1 when tab changes.

*Alternative considered:* URL-based tab state - adds complexity without clear benefit for a homepage section.

**4. Tab Design: Underline style with primary color**

Use underline style for active tab to match existing design language. Inactive tabs use muted text, active tab uses primary color with underline indicator.

## Risks / Trade-offs

- **Tab overflow on mobile** → Use horizontal scrollable tabs on small screens
- **Empty tabs** → All categories have at least 1 project, so no empty state needed
- **Pagination reset** → Reset to page 1 on tab change to avoid confusion