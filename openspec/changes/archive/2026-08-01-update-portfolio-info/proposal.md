## Why

The portfolio has outdated information compared to the user's actual GitHub and LinkedIn profiles. Skills are missing (Terraform, Terragrunt, Ansible, RabbitMQ, ElasticSearch, Playwright, SQL, YAML), the goal statement says "Software Architect" when GitHub says "Distinguished Software Engineer", the About bio references old experience, and the DevOps skills list is incomplete. This change syncs all portfolio data with the current profiles.

## What Changes

- Update skills categories and additional skills to match GitHub profile (add Terraform, Terragrunt, Ansible, RabbitMQ, ElasticSearch, Playwright, SQL, YAML, Traefik, Nginx, Swagger, Postman, Notion, Obsidian, Confluence, Jira, Slack, Microsoft Teams)
- Update AboutMe bio to reflect current focus areas from GitHub (backend, cloud/infra, distributed systems, cybersecurity, Rust)
- Update goal statement from "Software Architect" to "Distinguished Software Engineer"
- Update Hero subtitle to match GitHub bio
- Update JSON-LD jobTitle in root.tsx
- Update meta descriptions across routes

## Capabilities

### New Capabilities

### Modified Capabilities

## Impact

- **Files modified**: `app/constants/skillsConstants.ts`, `app/components/AboutMe.tsx`, `app/components/Banner.tsx`, `app/root.tsx`, `app/routes/_index.tsx`
- **Dependencies**: No new dependencies
- **Breaking changes**: None — data-only updates
