## ADDED Requirements

### Requirement: Environment variable documentation
The project SHALL include a `.env.example` file documenting all required environment variables for email functionality.

#### Scenario: Developer setup
- **WHEN** developer clones the project
- **THEN** `.env.example` shows required variables without actual values

### Requirement: Secret management
Email service credentials SHALL be stored as Cloudflare secrets, not in code or committed files.

#### Scenario: API key stored securely
- **WHEN** email service is configured
- **THEN** API key is stored as a Cloudflare secret
- **AND** API key is not present in source code or `.env` files

#### Scenario: Secret not exposed to client
- **WHEN** email sending code runs
- **THEN** secrets are only accessible in server-side code

### Requirement: Environment type safety
The project SHALL define TypeScript types for environment variables used in email functionality.

#### Scenario: Type definitions exist
- **WHEN** developer writes code using environment variables
- **THEN** TypeScript provides autocomplete and type checking for env vars
