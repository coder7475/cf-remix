## ADDED Requirements

### Requirement: Blog articles loaded via server loader with edge caching
The blog route SHALL fetch Dev.to articles on the server inside a Remix loader using native fetch and respond with HTTP edge cache headers, eliminating client-side axios requests.

#### Scenario: Server-side article retrieval
- **WHEN** a user or search engine crawler requests the blog page
- **THEN** the articles are fetched on the server and delivered in the initial SSR HTML response with stale-while-revalidate caching headers

#### Scenario: Network error degradation
- **WHEN** the external article API fails or times out during server load
- **THEN** the route renders a graceful error card with a retry option without crashing the root application
