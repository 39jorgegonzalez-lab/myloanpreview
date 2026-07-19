# Monetized Comparison Page Publishing Checklist

This document is an internal operating checklist for MYLOANPREVIEW.

Do not publish a lender, marketplace, affiliate, referral, sponsored, or lead-generation offer until every applicable item below has been reviewed.

## 1. Partner verification

Before adding a partner:

- Confirm the partner's legal business name.
- Confirm the official destination URL.
- Confirm the affiliate or referral URL was obtained through an authorized program.
- Confirm the program permits the proposed traffic source and page type.
- Confirm the geographic locations where the offer is available.
- Confirm whether the partner is a lender, marketplace, broker, lead generator, or other provider.
- Save the current affiliate agreement or program terms outside the public repository.
- Record the date the partner information was last verified.

Never publish an offer based only on another comparison website's claims.

## 2. Claims and offer details

Every factual partner claim must be supported by the partner's current official disclosures.

Verify before publishing:

- APR or rate ranges
- Loan amount ranges
- Repayment-term ranges
- Fees
- Credit-check type
- Funding-time statements
- Minimum credit-score statements
- Minimum-income statements
- State availability
- Eligibility requirements
- Prequalification language
- Whether approval is guaranteed

Do not publish claims such as:

- Guaranteed approval
- Everyone qualifies
- Instant approval
- No credit requirements
- Lowest rate
- Best lender
- Most trusted
- Approval regardless of credit

Use qualified language such as:

- May be available
- Possible rates
- Estimated terms
- Based on information provided
- Subject to eligibility and verification
- Terms vary by applicant and provider
- Checking possible rates may use a soft inquiry, when confirmed by the provider

## 3. Required disclosure placement

A monetized comparison page must include:

1. `ComparisonDisclosure` above the first compensated offer.
2. A visible `Sponsored` label on each compensated offer card.
3. A nearby statement that MYLOANPREVIEW may receive compensation.
4. A link to `/affiliate-disclosure`.
5. A statement that MYLOANPREVIEW is not a lender.
6. A statement that approval, rates, eligibility, fees, and terms are not guaranteed.

Do not rely only on the footer disclosure link.

## 4. Required components

Use these components for compensated offers:

- `ComparisonDisclosure`
- `PartnerOfferCard`
- `AffiliateLink`

Use `PartnerOfferCard` instead of manually creating compensated outbound links so that:

- Affiliate clicks are tracked consistently.
- Sponsored link attributes are applied.
- Links open safely in a new tab.
- Sponsored labeling remains visible.
- Nearby compensation language remains present.

## 5. Recommended page structure

A trustworthy comparison page should generally follow this order:

1. Page title and plain-language introduction
2. Quick Answer section
3. Compensation disclosure
4. Explanation of how providers were evaluated
5. Partner offer cards
6. Non-compensated educational comparison criteria
7. Important limitations
8. Helpful calculators and guides
9. Frequently asked questions
10. Final financial disclaimer

Do not place compensated partner cards above the initial explanation and compensation disclosure.

## 6. Partner card requirements

Each compensated provider should use `PartnerOfferCard`.

Before publishing a card, confirm:

- The partner display name is accurate.
- The analytics partner identifier is stable and lowercase.
- The placement identifier describes the page and card position.
- The destination is an authorized affiliate or referral URL.
- The description contains only verified factual claims.
- Every highlight is supported by a current official source.
- The call-to-action label accurately describes what happens next.
- The card does not imply guaranteed approval.
- The card does not imply that MYLOANPREVIEW is the lender.
- The sponsored label and nearby compensation disclosure remain visible.

Do not use placeholder partner names, placeholder URLs, or unverified terms in production.

## 7. Analytics naming rules

Use stable lowercase identifiers with underscores.

Examples:

```text
partnerName: verified_partner_identifier
placement: personal_loan_comparison_primary
```

Useful placement patterns include:

- `personal_loan_comparison_primary`
- `personal_loan_comparison_secondary`
- `auto_loan_guide_inline`
- `mortgage_affordability_footer`

Do not send any of the following to analytics:

- Names
- Email addresses
- Phone numbers
- Exact income
- Exact debt
- Credit scores
- Loan amounts
- Requested rates
- Calculator results
- Application answers
- Approval results
- URLs containing personal information
- Any other personal or financial data

## 8. Editorial standards

A comparison page must:

- Explain how providers were selected.
- State when compensation may affect inclusion or placement.
- Avoid presenting sponsored placement as an independent ranking.
- Distinguish educational examples from actual provider terms.
- Avoid implying that every available provider is included.
- Avoid calling a provider the best without a documented methodology.
- Explain that visitors should review official provider disclosures.
- Include the date material partner information was last reviewed when appropriate.

Compensation must not be described as having no influence when it affects provider inclusion or placement.

MYLOANPREVIEW should not claim that compensation never affects rankings unless that statement is accurate and supported by the actual publishing process.

## 9. Lead-generation restrictions

Do not add a lead form until all applicable requirements are ready:

- The form purpose is clearly explained.
- The requested information is limited to what is necessary.
- Consent language is clear and specific.
- Required consent controls are unchecked by default.
- The privacy policy describes the data collection and sharing.
- Visitors are told who may receive their information or what categories of recipients may receive it.
- Visitors are told how they may be contacted.
- Data-retention practices are documented.
- Submitted data is handled securely.
- `lead_form_start` tracking is implemented.
- `generate_lead` tracking is implemented.
- No personal or financial values are sent to analytics.
- Jurisdiction-specific requirements are reviewed where applicable.

Do not use pre-checked consent boxes.

Do not state or imply that submitting a form guarantees approval, qualification, a particular rate, or a loan offer.

Do not collect sensitive financial information merely to improve analytics or marketing attribution.

## 10. Technical review

Before committing a comparison page, confirm:

- TypeScript succeeds.
- The production build succeeds.
- All expected static pages generate.
- No placeholder URL remains.
- No placeholder partner name remains.
- No unverified partner claim remains.
- No sensitive value is sent to analytics.
- Compensated external links use the shared affiliate-link architecture.
- Internal links point to valid MYLOANPREVIEW routes.
- Cards and tables work on mobile.
- The page has exactly one H1.
- Page metadata is complete.
- The page contains a Quick Answer section.
- Compensation disclosure appears before the first compensated offer.
- Every compensated card has a visible sponsored label.
- The page contains an appropriate financial disclaimer.
- The page does not promise guaranteed approval.

Recommended local checks:

- `git status --short`
- `git diff --check`
- `npm run build`

## 11. Staged-change review

Stage only the intended files.

Before committing, review:

- `git status --short`
- `git diff --cached --check`
- `git diff --cached --stat`
- `git --no-pager diff --cached`

Confirm that:

- No unrelated files are staged.
- No confidential agreement is staged.
- No affiliate-account credential is staged.
- No private tracking parameter is staged.
- No placeholder offer is staged.
- No unintended deletion is present.

## 12. Release process

Use this sequence for every monetized comparison-page release:

1. Confirm all partner facts against current official sources.
2. Record the date the material claims were verified.
3. Build locally.
4. Review the unstaged diff.
5. Stage only the intended files.
6. Review the complete staged diff.
7. Commit with a clear message.
8. Push to `origin/main`.
9. Confirm Vercel shows Ready and Production.
10. Open the live comparison page.
11. Confirm the compensation disclosure appears before the first offer.
12. Confirm every compensated card displays the Sponsored label.
13. Test every internal link.
14. Test every partner link.
15. Confirm each partner link opens the intended destination.
16. Confirm the affiliate click event appears in GA4 Realtime.
17. Confirm no personal or financial information appears in analytics.

Do not approve the release merely because the page builds successfully. The live disclosure placement, link destinations, and factual claims must also be checked.

## 13. Post-launch monitoring

After publication:

- Check partner links regularly for broken or unexpected destinations.
- Reverify material claims when partner terms change.
- Remove expired or unavailable offers promptly.
- Review GA4 `affiliate_click` events.
- Review performance without weakening disclosure visibility.
- Confirm sponsored labels remain visible on desktop and mobile.
- Maintain a record of each partner's latest verification date.
- Update the affiliate disclosure when compensation practices materially change.
- Update the privacy policy when data collection or sharing practices change.
- Investigate unusual redirects or unexpected destination-domain changes.
- Remove a partner immediately when its authorized status cannot be confirmed.

Do not keep outdated terms live simply because the offer still receives clicks.

## 14. Partner verification record

Maintain a private record for each partner with these fields:

- Partner display name
- Analytics partner identifier
- Provider type
- Official website
- Authorized affiliate destination
- Affiliate network or direct program
- Agreement review date
- Geographic availability
- Material claims verified
- Official sources used
- Last verification date
- Next review date
- Responsible reviewer
- Internal notes

Do not commit confidential agreements, credentials, private affiliate-account information, secret tracking parameters, or personally identifiable information to the public repository.

## 15. Final publishing decision

A monetized comparison page is ready to publish only when:

- Every applicable checklist item has been reviewed.
- All factual claims are currently supported.
- Compensation is disclosed clearly and near the relevant offers.
- Sponsored content is visibly labeled.
- Analytics tracking contains no sensitive values.
- The page does not guarantee approval or specific terms.
- The build succeeds.
- The staged diff contains only intended changes.
- The production deployment is Ready.
- The live page and outbound destinations have been manually verified.

When any required item is incomplete, delay publication rather than publishing an unverified or insufficiently disclosed offer.