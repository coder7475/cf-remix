## Context

The portfolio data is spread across multiple files: `skillsConstants.ts` (skill categories and additional skills), `AboutMe.tsx` (bio text), `Banner.tsx` (hero subtitle), `root.tsx` (JSON-LD Person schema), and `_index.tsx` (meta description). The GitHub profile (coder7475) has the most up-to-date information including expanded DevOps tools, current focus areas, and an updated career goal.

## Goals / Non-Goals

**Goals:**
- Sync skills with GitHub profile (add missing tools: Terraform, Terragrunt, Ansible, RabbitMQ, ElasticSearch, Playwright, SQL, YAML, Traefik, Nginx, Swagger, Postman, etc.)
- Update AboutMe bio to reflect current focus: backend, cloud/infra, distributed systems, cybersecurity, Rust
- Change goal from "Software Architect" to "Distinguished Software Engineer"
- Update hero subtitle to match GitHub bio
- Update JSON-LD and meta descriptions

**Non-Goals:**
- Changing component structure or layout
- Adding new sections or features
- Updating project data (projects are already current)
- Changing experience entries (already accurate)

## Decisions

### 1. Skills update approach
**Decision**: Update `skillsConstants.ts` to reorganize categories and add missing tools. Split into 4 categories: Languages & Databases, Frameworks & Libraries, DevOps & Cloud, Testing & Tools.
**Rationale**: GitHub profile has a cleaner skill organization. Adding a Testing category surfaces Playwright/Jest/Vitest which are currently hidden in additionalSkills.
**Alternatives considered**: Keep 3 categories (rejected — Testing deserves its own category given the user's focus on quality).

### 2. Bio text source
**Decision**: Use GitHub README as the source of truth for the AboutMe bio, since it's the most maintained profile.
**Rationale**: GitHub README is actively maintained and reflects the user's current self-description. LinkedIn was inaccessible.
**Alternatives considered**: Write new bio from scratch (rejected — GitHub bio is already well-written).

### 3. Goal update
**Decision**: Change "Software Architect" to "Distinguished Software Engineer" across all files.
**Rationale**: GitHub explicitly states this as the goal. It's a more specific and ambitious target.
**Alternatives considered**: Keep both terms (rejected — inconsistent messaging hurts credibility).

## Risks / Trade-offs

- **[Risk]** Adding too many skills may overwhelm recruiters → **Mitigation**: Keep additionalSkills list concise, focus on the most impactful tools.
- **[Trade-off]** Removing some additionalSkills (like Deno, Fail2Ban, UFW) to make room for more relevant ones → Acceptable — these are less relevant to the user's current focus.
