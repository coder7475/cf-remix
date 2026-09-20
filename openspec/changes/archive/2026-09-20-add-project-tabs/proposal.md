## Why

The Featured Projects section currently displays all 15 projects in a single paginated list, making it difficult for visitors to find projects relevant to their interests. Adding tabbed categorization allows visitors to quickly filter projects by type (Backend, Fullstack, AI/ML, Mobile), improving discoverability and showcasing technical breadth more effectively.

## What Changes

- Add `category` field to project data structure
- Create horizontal tab navigation above project grid
- Filter projects based on active tab with project counts
- Maintain pagination within each tab
- Set "Backend" as default active tab
- Categorize all 15 projects into 4 tabs

## Capabilities

### New Capabilities
- `project-tabs`: Tabbed navigation for filtering Featured Projects by category (Backend, Fullstack, AI/ML, Mobile)

### Modified Capabilities

## Impact

- **Code**: Projects.tsx component modified, constants/index.ts data structure updated
- **UX**: Improved project discoverability, clearer technical specialization display
- **Performance**: Minimal impact with client-side filtering

## Non-goals

- Multiple category selection (single tab only)
- Search functionality
- Project detail pages
- Animated tab transitions beyond basic switching