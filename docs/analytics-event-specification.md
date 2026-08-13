# MYLOANPREVIEW Analytics Event Specification

This document defines the approved analytics events, parameters, privacy
boundaries, and implementation status for MYLOANPREVIEW.

Analytics is for non-sensitive operational measurement only.

Do not send user-entered financial values, contact information, credit
information, consent selections, submission identifiers, approval or
matching results, or other sensitive form values to analytics.

## 1. Page views

Event:

- `page_view`

Source:

- Google Analytics 4 automatic page-view measurement.

Status:

- LIVE.
- Verified in production through GA4 Realtime.

Do not add a second manual `page_view` event unless the automatic GA4
behavior is intentionally disabled or replaced.

## 2. Calculator use

Event:

- `calculator_used`

Permitted parameter:

- `calculator_name`

Approved `calculator_name` values:

- `auto_loan`
- `car_affordability`
- `credit_score_loan_estimate`
- `debt_to_income`
- `monthly_payment`
- `mortgage`
- `personal_loan`

Status:

- LIVE.
- Production event delivery verified with `personal_loan`.

Do not send loan amount, interest rate, loan term, income, expenses, credit
score, payment results, affordability results, DTI values, or other
calculator inputs or outputs.

## 3. Email CTA

Event:

- `email_cta_click`

Permitted parameter:

- `cta_location`

Approved `cta_location` values:

- `homepage`
- `learning_center`
- `guide`
- `other`
- `unknown`

Status:

- LIVE.
- Production event delivery verified with `homepage`.

The event records only the categorical CTA location. It must not contain an
email address or other signup-form data.

## 4. Guide CTA

Event:

- `guide_cta_click`

Permitted parameters:

- `guide_slug`
- `destination_type`
- `cta_location`

Approved `destination_type` values:

- `calculator`
- `guide`
- `email`
- `other`

Status:

- DEFINED.
- Not currently wired to a live component.

Do not place personal or financial information in `guide_slug` or
`cta_location`.

## 5. Affiliate click

Event:

- `affiliate_click`

Permitted parameters:

- `partner_name`
- `placement`

Status:

- DEFINED.
- Affiliate tracking infrastructure exists.
- No current `PartnerOfferCard` usage was found during the Step 4 review.

`partner_name` and `placement` must remain categorical operational
identifiers and must not contain personal or financial information.

## 6. Lead funnel

Events:

- `lead_form_start`
- `generate_lead`

Permitted parameters:

- `form_name`
- `placement`

Status:

- FUTURE-READY.
- Not approved for launch until the lead handling, consent, privacy, and
  submission requirements in `lead-generation-consent-architecture.md` are
  satisfied.

`lead_form_start` fires only after meaningful form interaction.

`generate_lead` fires only after the submission system confirms that the
intended submission was accepted. A button click, validation error, timeout,
provider rejection, failed network request, or server error is not a
completed lead.

## 7. Measurement roles

- `page_view`: traffic measurement.
- `calculator_used`: calculator engagement.
- `email_cta_click`: email-interest micro-conversion.
- `guide_cta_click`: internal content/navigation engagement.
- `affiliate_click`: monetization outbound click.
- `lead_form_start`: lead-funnel start.
- `generate_lead`: completed lead conversion after confirmed acceptance.

## 8. Privacy boundary

Analytics events must never contain:

- Loan amounts or requested credit amounts.
- Interest rates or calculator terms entered by a visitor.
- Income, expenses, housing costs, debts, or DTI values.
- Credit scores or credit-related user inputs.
- Calculator payment or affordability results.
- Names, email addresses, phone numbers, or other contact information.
- Consent selections.
- Submission identifiers.
- Approval, qualification, matching, or lender-result information.
- Form-field values or sensitive error content.

When adding a new event or parameter, update this specification before
deploying the tracking change.
