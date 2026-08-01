## ADDED Requirements

### Requirement: Contact form email submission
The contact form SHALL send an email to the site owner when a user submits the form with valid data.

#### Scenario: Successful email submission
- **WHEN** user submits contact form with name, email, and message
- **THEN** an email is sent to the site owner with the submitted details
- **AND** user sees a success confirmation message

#### Scenario: Invalid form submission
- **WHEN** user submits contact form with missing required fields
- **THEN** no email is sent
- **AND** user sees an error message indicating missing fields

### Requirement: Email content
The sent email SHALL contain the submitter's name, email address, and message in a readable format.

#### Scenario: Email contains all form fields
- **WHEN** email is sent from form submission
- **THEN** email includes sender name, sender email, and message body

### Requirement: Form feedback states
The form SHALL display appropriate feedback during and after submission.

#### Scenario: Loading state
- **WHEN** form is being submitted
- **THEN** submit button shows loading state and is disabled

#### Scenario: Success state
- **WHEN** email is sent successfully
- **THEN** form clears and shows success message

#### Scenario: Error state
- **WHEN** email sending fails
- **THEN** form shows error message and preserves form data

### Requirement: Server-side action
Form submission SHALL be handled by a Remix server action to keep API credentials secure.

#### Scenario: API key not exposed to client
- **WHEN** form is submitted
- **THEN** email service API key is never sent to the browser
