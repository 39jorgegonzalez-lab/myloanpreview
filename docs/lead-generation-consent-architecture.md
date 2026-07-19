# Lead-Generation Consent Architecture

This document is an internal planning specification for possible future lead-generation features on MYLOANPREVIEW.

It is not legal advice. Lead-generation forms, disclosures, consent language, data sharing, and contact permissions should be reviewed by a qualified professional before publication.

## 1. Current status

MYLOANPREVIEW does not currently operate a loan lead form.

The website currently:

- Provides educational calculators and guides.
- Does not make lending decisions.
- Does not guarantee approval or loan terms.
- Does not collect loan applications.
- Does not send user financial inputs to analytics.
- Has analytics helpers available for future form-start and completed-lead events.
- Has not selected a lead buyer, lender network, marketplace, broker, or form-processing provider.

No lead-generation form should be published until the recipient, data flow, consent language, security controls, and privacy disclosures are defined.

## 2. Purpose of a future lead form

Before building a form, select one specific purpose.

Possible purposes include:

- Request information from one identified provider.
- Request possible matches from a clearly described provider network.
- Ask MYLOANPREVIEW to send educational follow-up information.
- Join an email list without requesting a loan or lender contact.

These purposes must not be combined under vague language such as “See your options” when the actual result is the sale, transfer, or distribution of personal information.

The page must explain what happens after submission before the visitor provides information.

## 3. Required partner decision

Do not design the final consent language until the actual recipient model is known.

Choose and document one model:

### Model A: One identified provider

The form names the specific provider that will receive the information.

Required documentation:

- Provider legal name
- Provider type
- Official website
- Purpose of the transfer
- Fields transferred
- Permitted contact methods
- Data-retention expectations
- Applicable agreement
- Date last verified

### Model B: Limited provider network

The form may send information to more than one provider from a defined network.

Required documentation:

- Identity or clearly described category of every possible recipient
- Maximum number of recipients
- Method used to select recipients
- Fields each recipient receives
- Permitted contact methods
- Whether recipients may resell or redistribute the lead
- How the visitor can review the recipient list
- How the visitor can withdraw or revoke applicable permissions
- Date the network was last verified

### Model C: MYLOANPREVIEW-only contact

The form sends information only to MYLOANPREVIEW.

Required documentation:

- Exact reason for collection
- Fields collected
- Storage provider
- Retention period
- Access controls
- Contact method requested by the visitor
- Deletion-request process

Do not imply that MYLOANPREVIEW is matching visitors with lenders when the information remains only with MYLOANPREVIEW.

## 4. Launch gate

A lead form must remain unpublished until all of these are known:

- The exact form purpose
- The organization operating the form
- Every field collected
- Every intended use of the information
- The recipient or recipient model
- The contact methods that may be used
- Whether information may be transferred or sold
- Whether information may be redistributed
- The storage and processing providers
- The retention period
- The deletion and access process
- The required consent wording
- The privacy-policy changes
- The analytics event plan
- The security controls
- The jurisdictions where the form will be available

When any item is unknown, delay the form rather than collecting information under incomplete disclosures.

## 5. Data minimization

Collect only information that is necessary for the documented form purpose.

Before adding any field, record:

- Why the field is needed
- Who receives the field
- How the field will be used
- Whether the field is required or optional
- How long the field will be retained
- Whether a less sensitive alternative is available

Do not collect information merely because a future partner might find it useful.

Avoid collecting sensitive financial information until the actual provider, transfer purpose, security controls, and required disclosures are confirmed.

## 6. Field classification

Classify every proposed field before building the form.

### Basic contact information

Examples:

- First name
- Last name
- Email address
- Telephone number
- State or ZIP code

Even basic contact information must not be collected until the visitor is told how it will be used and who may receive it.

### Financial information

Examples:

- Income
- Monthly housing payment
- Monthly debt
- Requested loan amount
- Employment status
- Credit-score range
- Loan purpose

Financial information requires stronger justification, security controls, retention limits, and disclosure.

Do not send these values to Google Analytics, Vercel Analytics, advertising platforms, URLs, browser storage, or marketing pixels.

### Highly sensitive information

Do not collect the following without a verified operational need, appropriate security architecture, and professional review:

- Social Security number
- Bank-account information
- Payment-card information
- Government identification numbers
- Account login credentials
- Exact date of birth
- Copies of identification documents
- Tax records
- Full credit reports

MYLOANPREVIEW should not directly collect these fields during the initial lead-generation phase.

## 7. Consent separation

Different purposes should use separate, understandable consent controls.

Possible consent categories include:

- Permission to submit information to an identified provider
- Permission to share information with a defined provider network
- Permission to receive email
- Permission to receive text messages
- Permission to receive telephone calls
- Permission to receive automated or prerecorded communications

Do not combine unrelated permissions into one vague checkbox.

Consent controls must:

- Be unchecked by default
- Use plain language
- Identify the relevant organization or recipient model
- Explain the permitted contact methods
- Appear before the submission button
- Be recorded with the applicable disclosure version
- Not imply that consent guarantees approval or better terms

A visitor should be able to understand what will happen without opening another page or reading hidden text.

## 8. Data-flow documentation

Before implementing a form, create a complete data-flow record.

Document:

- Where the form is displayed
- Where the form submits
- Whether the submission passes through a MYLOANPREVIEW server
- Every third-party processor involved
- Every recipient of the submitted information
- The fields sent to each recipient
- Whether fields are transformed or filtered
- Whether information is stored
- Where information is stored
- How long information is retained
- Who can access the information
- Whether information may be resold or redistributed
- How deletion requests are handled
- What happens when submission fails

Do not place personal or financial information in:

- URL query strings
- Analytics event parameters
- Browser-console logs
- Public source code
- Git commits
- Error-reporting messages
- Advertising pixels
- Unencrypted client-side storage

The data flow must match the statements shown to the visitor.

## 9. Security requirements

A production lead form must use secure transmission and controlled access.

Before launch, confirm:

- HTTPS is enforced.
- Server-side validation is implemented.
- Client-side validation is not the only validation.
- Submission endpoints accept only expected fields.
- Unexpected fields are rejected or ignored.
- Required fields are validated.
- Input length limits are enforced.
- Automated abuse protections are considered.
- Secrets and API credentials are stored in environment variables.
- Secrets are not exposed through client-side code.
- Access to submitted information is limited.
- Retention and deletion procedures are documented.
- Error messages do not reveal sensitive information.
- Logs do not contain submitted personal or financial values.
- Backups and exports follow the same access restrictions.

Do not commit API keys, webhook secrets, provider credentials, encryption keys, or private endpoint tokens to GitHub.

## 10. Consent evidence

When consent is required, retain enough information to show what the visitor agreed to.

The consent record may need to include:

- Date and time
- Consent disclosure version
- Form version
- Page or placement identifier
- Recipient or recipient model
- Contact methods authorized
- Whether each consent control was selected
- Source URL without personal information
- Submission identifier
- Applicable jurisdiction information when appropriate

Do not store the visitor's full form contents merely to create an analytics record.

Analytics events should record only non-sensitive operational identifiers, such as:

- `form_name`
- `placement`

The consent record and the analytics record are separate systems with different purposes.

A consent record must not be altered to imply that permission was granted when the visitor did not actively provide it.

## 11. Privacy-policy requirements

Before publishing a lead form, update the Privacy Policy to match the actual data flow.

The policy should describe, as applicable:

- The purpose of the form
- The categories of information collected
- Whether information is collected by MYLOANPREVIEW or a third party
- The categories or identities of recipients
- Whether information may be sold, transferred, or shared
- The contact methods that may be used
- The storage and processing providers
- The retention approach
- The visitor's available choices
- The process for access, correction, or deletion requests
- The date the policy was updated

Do not publish generic language that says information “may be shared with partners” when the actual recipient model can be described more clearly.

The form disclosure, Privacy Policy, recipient agreement, and technical data flow must not contradict one another.

## 12. Analytics implementation

The existing analytics helpers may be used only for non-sensitive operational measurement.

Permitted events:

- `lead_form_start`
- `generate_lead`

Permitted parameters:

- `form_name`
- `placement`

Example identifiers:

- `form_name: personal_loan_information_request`
- `placement: personal_loan_comparison_primary`

Do not send:

- Form field values
- Contact information
- Financial information
- Consent selections
- Submission identifiers
- Partner destination URLs
- Approval or matching results
- Error messages containing submitted information

`lead_form_start` should fire only after the visitor meaningfully interacts with the form.

`generate_lead` should fire only after the submission system confirms that the intended submission was accepted.

Do not treat a button click, validation error, or failed network request as a completed lead.

## 13. Submission and failure handling

The form must clearly communicate the result of each submission attempt.

Success behavior should:

- Confirm that the submission was received
- Avoid promising approval or contact
- Explain the expected next step
- Identify who may contact the visitor when applicable
- Avoid displaying sensitive submitted values
- Prevent accidental duplicate submissions

Failure behavior should:

- Explain that the submission was not completed
- Preserve only the minimum information necessary for correction
- Avoid exposing server or provider details
- Avoid logging submitted values
- Avoid firing `generate_lead`
- Provide a safe retry path when appropriate

A timeout, provider rejection, validation failure, or server error must not be reported as a successful lead.

The submission button should be disabled while a request is actively being processed to reduce duplicate submissions.

## 14. Jurisdiction review

Before making a lead form available, document where the form will be shown and what legal or regulatory requirements may apply.

Review may be needed for:

- Federal consumer-protection requirements
- State privacy laws
- Telephone and text-message consent requirements
- Email marketing requirements
- Lending and loan-broker rules
- Lead-generation and data-broker requirements
- Children’s privacy restrictions
- EEA, UK, or Swiss privacy and consent requirements
- Data-transfer requirements
- Accessibility requirements

Do not assume that one consent statement is sufficient for every location, contact method, recipient model, or marketing purpose.

The form may need to be limited by geography until applicable requirements are reviewed.

Do not infer a visitor's consent merely from the visitor's location, calculator activity, or continued use of the website.

## 15. Testing requirements

Before production launch, test the complete form flow without using real consumer financial information.

Testing should confirm:

- Required fields behave correctly.
- Optional fields remain optional.
- Consent controls are unchecked by default.
- The submission button does not work without required consent.
- Disclosure text is visible before submission.
- Internal privacy and disclosure links work.
- Server-side validation rejects invalid requests.
- Unexpected fields are ignored or rejected.
- Duplicate submissions are reduced.
- Success and failure messages are accurate.
- Failed requests do not fire `generate_lead`.
- Accepted requests fire `generate_lead` only once.
- `lead_form_start` fires only after meaningful interaction.
- Analytics contains no submitted field values.
- Browser URLs contain no submitted information.
- Browser-console output contains no submitted information.
- Server logs contain no submitted personal or financial values.
- Mobile layouts remain readable and usable.
- Keyboard navigation works.
- Form labels are associated with their inputs.
- Error messages are understandable and accessible.

Use synthetic test data. Do not use another person's personal or financial information for testing.

## 16. Final launch decision

A lead-generation form is ready for production only when:

- The exact form purpose is documented.
- The recipient model is documented.
- Every proposed field is justified.
- The actual data flow is documented.
- Required consent language has been reviewed.
- Consent controls are separate and unchecked by default.
- The Privacy Policy matches the actual practices.
- Security and retention controls are implemented.
- Analytics contains only approved non-sensitive identifiers.
- Failure handling does not record false conversions.
- Applicable jurisdiction requirements have been reviewed.
- Synthetic testing has passed.
- The production build succeeds.
- The complete staged diff has been reviewed.
- Vercel shows Ready and Production.
- The live form and disclosures have been manually verified.

When any required item is unknown or incomplete, keep the form unpublished.

Do not create a placeholder production form merely to test future monetization demand. Test demand with educational calls to action, anonymous analytics, or clearly described non-lead interactions instead.