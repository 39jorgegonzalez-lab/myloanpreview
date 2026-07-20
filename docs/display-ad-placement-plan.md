# Display Ad Placement Plan

**Status:** Internal planning document only
**Last reviewed:** July 19, 2026
**Site:** MYLOANPREVIEW

## 1. Purpose

This document defines where display advertisements may eventually appear on
MYLOANPREVIEW without interrupting calculators, weakening user trust, creating
accidental-click risk, or causing unnecessary layout movement.

This plan does not authorize the installation of an advertising network.

No AdSense script, ad-network script, ad-unit ID, automatic-ad setting, or live
advertisement should be added until the publisher account, privacy requirements,
consent requirements, and final implementation have been reviewed.

## 2. Current Advertising Status

At the time of this review:

- No display-ad network is installed.
- No AdSense script is present.
- No `adsbygoogle` code is present.
- No live ad units are present.
- No display-ad placeholders are present.
- The homepage, calculators, and Learning Center guides are ad-free.
- Existing advertising references are disclosure language only.

## 3. Initial Rollout Principles

The first display-ad rollout should follow these rules:

1. Do not place display ads on the homepage.
2. Use no more than one display ad per eligible page initially.
3. Never place an ad inside calculator inputs, calculator results, or calculation controls.
4. Never place an ad between calculator inputs and results.
5. Let visitors receive the main answer or estimate before showing an ad.
6. Keep ads away from navigation links, calculator cards, buttons, email forms, and partner offers.
7. Clearly label each ad area with the word `Advertisement`.
8. Reserve space before an ad loads to reduce layout movement.
9. Use generous spacing above and below every ad.
10. Do not style ads to resemble calculator results, site navigation, or editorial recommendations.
11. Do not place display ads immediately beside affiliate offers or lead-generation forms.
12. Review all placements on mobile before publishing.
13. Remove or relocate any placement that harms trust, readability, or calculator completion.
14. Do not use guaranteed-approval or lender-like language around advertisements.

## 4. Homepage Decision

The homepage should remain free of display ads during the initial rollout.

The homepage is the primary trust-building and navigation page. It already
contains calculator cards, Learning Center links, an email signup call to
action, trust statements, and educational content.

Keeping this page ad-free should help visitors understand the site quickly and
move toward a useful calculator or guide without advertising competing for
attention.

## 5. Calculator Page Placement

The initial rollout may use one display ad on each eligible calculator page.

Eligible calculator pages:

- Auto Loan Calculator
- Car Affordability Calculator
- Credit Score Loan Estimate
- Debt-to-Income Calculator
- Monthly Payment Calculator
- Mortgage Calculator
- Personal Loan Calculator

### Preferred semantic position

Place the ad only after all of the following:

1. Calculator inputs
2. Calculator results
3. Educational explanation
4. Educational-only or no-guarantee disclaimer

Place it before the related-calculator or financial-tools section.

The intended page order is:

```text
Calculator inputs and results
Educational explanation
Educational or no-guarantee disclaimer
Advertisement
Related calculators or financial tools
FAQ, when present

```

This position allows visitors to complete the primary task and understand the
estimate limitations before encountering advertising.

### Calculator exclusions

Do not place an ad:

- Above the calculator heading
- Between the heading and calculator
- Inside the input panel
- Inside the results panel
- Between input and result columns
- Inside the educational or disclaimer card
- Inside a related-calculator card
- Immediately beside calculator links
- Between a field label and its input
- Where loading could move calculator controls or results
- Where an ad could appear to be a loan result, approval result, or lender offer

### Calculator fallback position

When the preferred position cannot provide adequate separation from clickable
cards, the fallback position is after the complete related-tools or FAQ section
and before the footer.

The fallback should be used only when it produces a clearer and safer layout.
It will generally have lower visibility than the preferred position.

## 6. Learning Center Guide Placement

The initial rollout may use no more than one display ad per eligible Learning
Center guide.

The ad must appear only after the guide has provided meaningful educational
content. It must remain separated from calculator links, related-guide links,
email signup forms, affiliate offers, and the final educational disclaimer.

### Long-form guide placement

Twelve long-form guides currently share this ending structure:

```text
Substantive educational sections
Helpful calculators or tools
Related guides or articles
Email signup
Educational disclaimer
```

For these guides, place the ad after the final substantive educational section
and before the Helpful Calculators or Helpful Tools section.

The intended order is:

```text
Main educational content
Advertisement
Helpful calculators or tools
Related guides or articles
Email signup
Educational disclaimer
```

Do not place the ad between Helpful Tools and Related Guides, between Related
Guides and the email signup, or between the email signup and disclaimer.

### Shorter guide placement

Seven shorter guides do not contain the standardized Helpful Tools and Related
Guides blocks.

For these guides, use a semantic mid-article position after the core
explanation and before action-oriented guidance, calculator links, FAQs, email
signup, and the final disclaimer.

Approved candidate boundaries from the inventory:

- **Does Checking Loan Rates Hurt Your Credit:** after “What About Rate Shopping?”
- **How Much Car Can I Afford:** after “Why the Lowest Monthly Payment Can Be Misleading”
- **Loan Prequalification vs. Preapproval:** after “Why These Estimates Can Change”
- **Car Loan Credit Score Guide:** after “Other Factors Auto Lenders May Consider”
- **Mortgage Credit Score Guide:** after “Other Factors Mortgage Lenders May Consider”
- **Personal Loan Credit Score Guide:** after “Other Factors Lenders May Consider”
- **Debt-to-Income Ratio Guide:** after “General DTI Range Examples”

Each placement must sit between complete `<section>` elements. It must not be
inserted inside a paragraph, list, table, comparison card, FAQ, or call to
action.

## 7. Future Ad Component Requirements

Any future display-ad component should be reusable and centrally controlled.

The component should accept only the minimum configuration needed, such as:

- Ad-unit identifier
- Placement name
- Responsive size behavior
- Reserved minimum height
- Optional development-preview mode

The component must:

1. Display a small, visible `Advertisement` label.
2. Reserve space before the network advertisement loads.
3. Use a neutral visual container that does not resemble site content.
4. Remain responsive without horizontal scrolling.
5. Fail safely when an ad does not load.
6. Avoid collecting or sending calculator values.
7. Avoid sending loan amounts, income, debts, credit-score estimates, email
   addresses, or other user-entered financial information to analytics.
8. Load only after the required privacy and consent behavior has been reviewed.
9. Be removable sitewide from one central location.
10. Support disabling individual placements without editing every page.

### Suggested visual boundary

A future ad container may follow this general structure:

```text
Advertisement

[Reserved responsive advertising area]
```

The label should remain visually separate from the advertisement but close
enough that users can clearly understand what the area contains.

The container should use generous vertical spacing and should not use the same
blue background, card shadow, border treatment, or button styling as calculator
results and site navigation.

## 8. Automatic Ads Decision

Automatic ad placement should remain disabled during the initial rollout.

Manually selected placements provide better control over:

- Calculator usability
- Trust-sensitive financial content
- Distance from buttons and links
- Mobile layout
- Email signup visibility
- Affiliate-offer separation
- Layout movement
- Ad density

Automatic ads may be reconsidered only after manual placements have been
reviewed with real traffic and after every calculator and guide template has
been tested on mobile and desktop.

## 9. Privacy and Compliance Launch Gates

Display advertising must not go live until all applicable launch requirements
have been reviewed.

Before publishing any live ad, confirm:

1. The advertising account and publisher identity are verified.
2. The production domain is approved by the selected advertising network.
3. The privacy policy accurately identifies the advertising technology in use.
4. Required consent or privacy controls have been reviewed for the locations
   where the site receives visitors.
5. Advertising cookies, identifiers, and personalization settings are configured
   according to the reviewed privacy requirements.
6. Any required `ads.txt` record is installed and verified.
7. Test advertisements do not appear on the homepage.
8. Test advertisements do not appear inside calculator controls or results.
9. Display ads remain visually distinct from affiliate or partner offers.
10. The word `Advertisement` appears beside every manually placed display ad.
11. No calculator values or sensitive financial information are sent to the
    advertising network through custom parameters.
12. The privacy policy and affiliate disclosure remain separate and accurate.

Advertising should remain disabled when any required account, privacy, consent,
domain, or technical review is incomplete.

## 10. Pilot Rollout

Do not activate display advertising across every eligible page at once.

Begin with no more than two pilot placements:

- One calculator page
- One long-form Learning Center guide

Select the pilot pages after reviewing actual traffic and engagement data.
Prefer pages with enough traffic to evaluate performance without using the
homepage as a test location.

The pilot should verify:

- The advertisement is clearly labeled.
- Reserved space prevents disruptive layout movement.
- The ad does not overlap text, controls, tables, or cards.
- The placement works at common mobile, tablet, and desktop widths.
- Calculator inputs and results remain easy to use.
- Site navigation remains visually separate.
- Email signup and internal-link calls to action remain noticeable.
- Empty or unfilled ad space fails safely.
- The page remains readable when browser zoom or larger text is used.
- The advertising script does not create console errors.

## 11. Performance and Trust Review

Compare pilot-page behavior with a reasonable pre-advertising baseline.

Review:

- Calculator interaction and completion behavior
- Email signup CTA engagement
- Internal calculator-link engagement
- Learning Center navigation
- Page loading performance
- Layout stability
- Mobile usability
- User complaints or trust concerns
- Advertising revenue and fill rate

Do not optimize solely for advertisement clicks or revenue.

Pause, remove, or relocate a placement when it:

- Interrupts calculator use
- Causes visible layout movement
- Appears too similar to site content
- Sits too close to a clickable control
- Reduces readability
- Covers content on mobile
- Creates horizontal scrolling
- Weakens email or calculator engagement
- Produces policy, privacy, or consent concerns

Expansion beyond the pilot should happen only after the placements remain
stable, understandable, and trustworthy.

## 12. Current Decision Summary

The current display-ad decision is:

- Keep the homepage ad-free.
- Do not install an advertising network yet.
- Do not enable automatic ads.
- Do not create visible ad placeholders before account and privacy review.
- Allow no more than one manual display ad per eligible page during the initial rollout.
- Place calculator ads only after results, educational context, and disclaimer language.
- Place long-guide ads before Helpful Tools.
- Place shorter-guide ads only at the approved semantic section boundaries.
- Keep ads separated from calculator controls, internal links, email signup,
  affiliate offers, partner cards, and lead-generation forms.
- Begin with one calculator pilot and one long-form guide pilot.
- Expand only after reviewing trust, usability, layout stability, privacy, and
  performance results.

## 13. Next Implementation Trigger

Advertising implementation should begin only after the following information is
available:

1. Selected advertising network
2. Verified publisher account
3. Approved production domain
4. Publisher or client identifier
5. Confirmed ad-unit strategy
6. Reviewed privacy and consent requirements
7. Confirmed `ads.txt` requirements
8. Selected calculator pilot page
9. Selected Learning Center pilot page
10. Approved responsive reserved-height behavior

Until those items are confirmed, this document remains a planning reference and
the production site should remain free of display-ad technology.
