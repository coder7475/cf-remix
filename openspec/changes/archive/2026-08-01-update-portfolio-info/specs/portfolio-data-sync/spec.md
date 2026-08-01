## ADDED Requirements

### Requirement: Skills match GitHub profile
The skills displayed on the portfolio SHALL match the tools and technologies listed on the GitHub profile (coder7475). This includes all languages, frameworks, DevOps tools, testing tools, and collaboration tools.

#### Scenario: Skills categories are complete
- **WHEN** user views the Skills section
- **THEN** all major tools from the GitHub profile are present (Terraform, Terragrunt, Ansible, RabbitMQ, ElasticSearch, Playwright, SQL, YAML, Traefik, Nginx)

### Requirement: Bio reflects current focus
The AboutMe section SHALL describe the user's current focus areas: backend & API development, cloud/infrastructure, distributed systems, system design, automation, CI/CD, cybersecurity learning, and Rust learning.

#### Scenario: Bio mentions current technologies
- **WHEN** user reads the AboutMe section
- **THEN** it mentions AWS, Docker, Terraform, Kubernetes, and current learning areas

### Requirement: Goal statement is accurate
The portfolio goal SHALL state "Distinguished Software Engineer" (not "Software Architect"). This goal SHALL appear in the AboutMe section, hero subtitle, and JSON-LD schema.

#### Scenario: Goal in About section
- **WHEN** user reads the AboutMe section
- **THEN** the stated goal is to become a Distinguished Software Engineer

#### Scenario: Goal in JSON-LD
- **WHEN** a crawler parses the JSON-LD Person schema
- **THEN** the jobTitle reflects the current role and aspiration

### Requirement: Meta descriptions are current
All route meta descriptions SHALL accurately reflect the portfolio content and mention key technologies (React, TypeScript, Node.js, AWS, Docker, Terraform).

#### Scenario: Homepage meta description
- **WHEN** user visits the homepage
- **THEN** the meta description mentions current key technologies
