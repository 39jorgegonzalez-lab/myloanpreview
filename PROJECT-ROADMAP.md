# MYLOANPREVIEW Product Roadmap

### Version 1.0

### Last Updated: June 2026

---

# Project Structure

MYLOANPREVIEW follows the Next.js App Router architecture.

The goal is to keep the project simple, scalable, and easy to maintain.

---

## Root Files

README.md
Project setup and developer notes.

PROJECT-ROADMAP.md
Master document for the project.
Contains:
- Vision
- Architecture
- Folder structure
- SEO strategy
- Monetization strategy
- Development roadmap
- Decision rules

package.json
Project dependencies and scripts.

package-lock.json
Dependency lock file.

tsconfig.json
TypeScript configuration.

next.config.ts
Next.js configuration.

eslint.config.mjs
Code quality configuration.

postcss.config.mjs
Tailwind/PostCSS configuration.

.gitignore
Git exclusions.

---

## app/

Contains every page on the website.

Each folder represents one URL.

Example:

app/about

becomes

/about

Every route should contain:

page.tsx

Never create duplicate page.js files.

---

## app/components/

Reusable components.

Examples:

Navbar

Footer

Cards

Buttons

Future UI components

Rule:

If multiple pages use something,
it belongs inside components.

---

## app/components/layout/

Global shared layout components.

Navbar

Footer

Future global UI

These are controlled by layout.tsx.

---

## app/learning-center/

Educational content.

Every article receives its own folder.

Example:

learning-center/
    what-credit-score-do-you-need-for-a-personal-loan/
        page.tsx

This will eventually become the largest section of the website.

---

## Calculator Pages

Each calculator has its own folder.

Examples:

auto-loan-calculator

personal-loan-calculator

mortgage-calculator

debt-to-income-calculator

credit-score-loan-estimate

Each calculator should remain independent.

---

## public/

Static assets.

Logo

Images

Icons

Future downloadable resources

---

## layout.tsx

The most important file.

Owns:

• Global metadata

• Navbar

• Footer

• Analytics

• Schema

Every page automatically uses this layout.

Never duplicate the Navbar or Footer inside individual pages.

---

# Development Rules

1. One Navbar
2. One Footer
3. One layout
4. Every route uses page.tsx
5. Learning Center contains educational content
6. Calculators remain independent
7. Reusable code belongs in components
8. Never duplicate code when a shared component can be created

---

# Mission

MYLOANPREVIEW exists to help people understand loans before they borrow.

We are not a lender.

We are not a bank.

We are not a financial advisor.

We provide educational calculators, loan estimates, and financial guides that help visitors make informed borrowing decisions.

Every feature should support this mission.

---

# Vision

Build the most trusted educational loan platform for consumers looking to estimate payments, understand credit, compare borrowing options, and improve financial confidence.

Our long-term objective is to become the website people visit **before** applying for a loan.

---

# Core Principles

## 1. Trust Before Revenue

Trust is our biggest competitive advantage.

We never promise approval.

We never exaggerate results.

We always explain estimates clearly.

Revenue follows trust.

---

## 2. Education First

Every calculator should teach.

Every guide should solve a problem.

Every page should leave the visitor more informed than when they arrived.

---

## 3. Simplicity Wins

Financial topics are already confusing.

Our job is to simplify them.

Pages should feel clean, calm, fast, and easy to understand.

---

## 4. Build Once, Expand Forever

Every new feature should support future growth.

We avoid creating pages or systems that will need to be rebuilt later.

Scalability is part of every design decision.

---

# Website Architecture

## Home

Purpose:

Introduce MYLOANPREVIEW.

Guide visitors toward calculators and educational resources.

---

## Calculators

Current calculators:

* Personal Loan Calculator
* Auto Loan Calculator
* Mortgage Calculator
* Car Affordability Calculator
* Debt-to-Income Calculator
* Credit Score Loan Estimate

Future calculators:

* Refinance Calculator
* APR Calculator
* Loan Comparison Calculator
* Extra Payment Calculator
* Rent Affordability Calculator

Every calculator should include:

* Introduction
* Calculator
* Results
* Educational explanation
* Related guides
* FAQ
* Disclaimer

---

## Learning Center

Purpose:

Become the educational hub of MYLOANPREVIEW.

The Learning Center should support long-term SEO growth while helping visitors understand loans and financial concepts.

Future categories include:

* Personal Loans
* Auto Loans
* Mortgages
* Credit Scores
* Financial Basics

Every guide should follow the same structure:

1. Title
2. Introduction
3. Main content
4. Helpful tips
5. Frequently Asked Questions
6. Related calculators
7. Related guides
8. Disclaimer

---

# Internal Linking Strategy

Every guide should recommend one or more calculators.

Every calculator should recommend one or more guides.

The website should feel connected rather than a collection of separate pages.

---

# SEO Strategy

Primary goals:

* Publish high-quality educational guides.
* Target long-tail search queries.
* Answer real consumer questions.
* Build topical authority around loans.

Content should always be written for people first and search engines second.

---

# Monetization Strategy

Revenue should never reduce trust.

Priority order:

## Phase 1

Grow organic traffic.

Publish educational guides.

Improve calculator usage.

---

## Phase 2

Email list.

Offer valuable financial tips and educational updates.

---

## Phase 3

Google AdSense.

Ads should remain limited and never interfere with usability.

---

## Phase 4

Affiliate partnerships.

Recommend reputable financial products only when they genuinely help users.

No aggressive sales tactics.

---

## Phase 5

Lead generation opportunities.

Only after trust, traffic, and content have been established.

---

# Design Standards

Every page should:

* Load quickly.
* Be mobile-first.
* Feel trustworthy.
* Use consistent typography.
* Include generous spacing.
* Avoid clutter.
* Use simple navigation.
* Maintain consistent colors and branding.

Visitors should recognize every page as part of MYLOANPREVIEW.

---

# Content Standards

Every guide should answer a real question.

Examples:

* What Credit Score Do You Need for a Personal Loan?
* Does Checking Loan Rates Hurt Your Credit?
* How Much Car Can I Afford?
* Loan Prequalification vs. Preapproval
* How Much Mortgage Can I Afford?

Guides should educate, not sell.

---

# Future Features

Potential additions:

* Learning Center search
* Guide categories
* Popular guides
* Related guides
* Newsletter signup
* Loan glossary
* Financial terms dictionary
* Saved calculations
* Printable loan summaries
* Calculator comparison tools

Features should only be added if they improve user experience or support business goals.

---

# Success Metrics

We measure progress by:

* Organic traffic growth
* Indexed pages
* Calculator usage
* Time on site
* Returning visitors
* Email subscribers
* Affiliate conversions
* Ad revenue

Not by the number of pages published.

---

# Decision Rule

Before building any new feature, ask:

1. Does this help visitors?
2. Does this strengthen trust?
3. Does this support SEO?
4. Does this support future monetization?
5. Will this still make sense two years from now?

If the answer to most of these questions is "no," we should not build it.

---

# Final Goal

MYLOANPREVIEW should become the first website consumers visit when they want to understand loans, estimate payments, improve affordability, and make informed borrowing decisions.

We are building a trusted educational platform—not just a collection of calculators.

---

# September 29, 2026 Completion Program

**Program window:** August 3 through September 29, 2026
**Current status:** Step 2 of 9 complete; Step 3 is next
**Primary objective:** Complete Version 1 creation, perform a full-site review,
establish measurement and responsible monetization systems, and build a strong,
repeatable Google visibility foundation.

This program does not depend on publishing the largest number of pages. It
depends on making each important calculator, guide, and user journey accurate,
useful, trustworthy, connected, measurable, and worthy of continued search
visibility.

The long-term mission is comprehensive coverage across loan categories. Version
1 establishes the high-quality platform, core tools, and priority topic coverage
needed to expand responsibly without publishing shallow content.

## Verified Baseline — August 3, 2026

### Repository and production

- Production branch: `main`
- Production commit: `d23848f`
- Automated tests: 78 passed
- Production build: 41 of 41 routes generated
- Live sitemap content URLs: 33
- Live self-referencing canonicals: 33 of 33 correct
- Intentional permanent redirects: 3
- Broken redirect destinations: 0

### Current completion estimates

- Overall Version 1 site: approximately 75%
- Learning Center: approximately 85%
- Trust, legal, and disclosure work: 100% for Version 1
- Current calculators: 7
- Current Learning Center guides: 19

### Google Search Console baseline

Three-month performance recorded before this program:

- Total clicks: 42
- Total impressions: 714
- Average CTR: 5.9%
- Average position: 74.9
- Indexed pages: 25
- Missing content pages identified in indexing exclusions: 0
- Manual actions: PASS — no issues detected
- Security issues: PASS — no issues detected
- HTTPS: PASS — 0 non-HTTPS URLs
- Core Web Vitals: not yet evaluated because of insufficient field data
- External links reported by Search Console: 0

### Last 28 Days Search Console baseline — August 3, 2026

- Search type: Web
- Total clicks: 0
- Total impressions: 768
- Average CTR: 0%
- Average position: 81.9
- Reported query rows: 248
- Reported page rows: 23

### First priority pages selected from Search Console

1. **Car-loan credit-score guide — primary near-term opportunity**
   - Page impressions: 259
   - Page average position: 68.6
   - `what credit score do you need for a car loan`: position 18.0
   - `credit score needed for car loan`: position 19.2
   - `credit score needed for auto loan`: position 20.2

2. **Loan-terms guide — closest-ranking opportunity**
   - Page impressions: 24
   - Page average position: 42.4
   - `how does choosing a shorter loan term affect my monthly payment?`:
     position 11.0
   - `how do loan terms affect the cost of credit`: position 18.0
   - Current query volume is limited, so repeated impressions are required
     before treating one-position readings as stable.

3. **Mortgage credit-score guide — longer-term authority opportunity**
   - Page impressions: 329
   - Page average position: 93.3
   - `credit score for mortgage`: 148 impressions at position 97.0
   - Strong demand signal exists, but the page is not yet a near-term ranking
     opportunity.

The personal-loan credit-score guide is not a first-round priority because its
visible queries currently rank mainly between positions 78 and 98.

### September 29 search visibility working targets

These are directional performance targets, not ranking guarantees:

- Reach at least 1,500 impressions in a comparable Last 28 Days report.
- Reach at least 10 organic clicks in a comparable Last 28 Days report.
- Move sitewide CTR above 0%, with a working target of at least 0.5%.
- Establish at least three non-brand priority queries at average positions of
  30 or better with repeated impressions.
- Establish at least one priority query in the top 10 with repeated impressions.
- Move at least two car-loan credit-score queries to position 15 or better.
- Establish at least one loan-terms query at position 10 or better with at least
  five impressions during the comparison period.
- Improve the mortgage credit-score guide from page position 93.3 toward
  position 75 or better while preserving or increasing impressions.
- Maintain no manual actions, no security issues, no non-HTTPS URLs, and no
  identified content-page indexing regressions.

### Measurement baseline

- Google Analytics 4 is installed in production.
- Production page-view tracking is verified.
- `calculator_used` is verified in GA4 Realtime.
- `email_cta_click` is verified in GA4 Realtime.
- All 7 calculators call the calculator-use tracking helper.
- Email CTA click tracking is live.
- Affiliate click tracking infrastructure exists.
- Guide CTA tracking exists but is not yet wired to live guide links.
- Lead-form start and completed-lead tracking exist but are not yet used.

### Email baseline

- Brevo signup CTA is live.
- The CTA opens the external signup form successfully.
- Email CTA clicks are recorded in GA4.
- A complete test subscription and Brevo subscriber-record verification are
  still required.

### Monetization baseline

- Display advertising: planning only
- Ad network installed: no
- Live display advertisements: no
- Affiliate components: built but not placed on live pages
- Active affiliate partnerships: not established
- Lead-generation forms: not implemented
- Email signup: live
- Monetization must remain secondary to trust, usefulness, and compliance.

## Program Rules

1. Quality beats quantity.
2. Every material change must solve a verified user, search, measurement, or
   business need.
3. No guaranteed-approval, guaranteed-rate, or guaranteed-financing language.
4. Search visibility and educational promotion continue in parallel with
   remaining Version 1 work.
5. Paid advertising waits until conversion measurement, lead handling, and
   compliance are ready.
6. Purchased backlinks, bulk directories, and mass low-quality promotion are
   prohibited.
7. Every production change requires tests, build verification, staged-diff
   review, deployment verification, and live production verification.
8. Terminal output and production evidence are the source of truth.
9. No unnecessary reorganization or speculative rewrites.
10. September 29 is the Version 1 completion and growth-foundation checkpoint,
    not the end of long-term expansion.

## Step 1 — Lock Roadmap, Baseline, and Completion Criteria

**Dates:** August 3–4
**Status:** PASS

Complete when:

- This execution program is committed and deployed to the repository.
- The Last 28 Days Search Console baseline is recorded.
- Current GA4, email, monetization, and production status are documented.
- Priority pages and search opportunities are selected from real data.
- September 29 completion and measurement criteria are finalized.

## Step 2 — Finish Remaining Version 1 Creation Gaps

**Dates:** August 5–14
**Status:** PASS

Complete when:

- Every current calculator has its required educational, related-resource, FAQ,
  and disclaimer structure where appropriate.
- Every current guide has a useful next action and sufficient supporting depth.
- Missing Version 1 content and navigation gaps are documented and resolved.
- No unfinished placeholders or unsupported claims remain.
- New work is limited to justified Version 1 requirements.

### Step 2 completion record — August 4, 2026

- All seven calculators now provide a relevant Learning Center action.
- Focused FAQ sections were added to the four calculators that lacked them.
- All 19 Learning Center guides were inventoried and confirmed to contain a
  useful next action, email signup opportunity, and educational disclaimer.
- The unfinished-marker review found zero actionable placeholders after binary
  image false positives were excluded.
- The static internal-link audit reviewed 186 links and found zero broken
  destinations.
- The orphan-page audit found zero orphan candidates and confirmed three
  intentional redirect pages.
- The claim review found no direct approval or qualification promises requiring
  correction.
- The mortgage credit-score guide was updated to avoid presenting 620 as a
  universal cutoff and now links to official Fannie Mae, HUD, and VA resources.
- Automated tests passed: 78 of 78.
- Production build passed: 41 of 41 routes generated.
- Production commit `5d32127` was deployed successfully, and the updated
  mortgage guidance was verified on the live website.

## Step 3 — Full Site and Calculator Review

**Dates:** August 15–21
**Status:** NOT STARTED

Complete when:

- All calculator formulas, safeguards, examples, and disclosures are reviewed.
- Desktop and mobile layouts are verified.
- Navigation, search, footer, email CTAs, forms, redirects, and internal links
  are verified.
- Metadata, canonicals, sitemap, robots rules, structured data, and assets are
  audited.
- Accessibility, performance, trust, legal, and content consistency checks are
  completed.
- Full tests and production build pass.

## Step 4 — Measurement, Conversion, and Email Readiness

**Dates:** August 22–27
**Status:** NOT STARTED

Complete when:

- GA4 page views and required custom events are verified in production.
- Calculator, email, guide CTA, affiliate, and future lead events have defined
  names and parameters.
- A complete Brevo test subscription is verified.
- Conversion events and reporting views are documented.
- Lead handling, data collection, consent, and privacy requirements are defined
  before any lead-generation launch.

## Step 5 — Responsible Monetization Establishment

**Dates:** August 28–September 3
**Status:** NOT STARTED

Complete when:

- The monetization channel order is finalized.
- Required publisher, affiliate, or partner applications are completed where
  appropriate.
- Approved placements, disclosures, tracking, and mobile safeguards are ready.
- No monetization element resembles a calculator result or approval outcome.
- No unapproved advertising network or unreviewed lender offer is forced live.
- At least one responsible revenue path is technically and operationally ready,
  subject to third-party approval where required.

## Step 6 — Strengthen Topical Authority and Original Value

**Dates:** September 4–13
**Status:** NOT STARTED

Complete when:

- Priority loan-topic clusters are clearly connected.
- Important underlinked guides receive relevant contextual links.
- Priority pages include original practical value such as scenario tables,
  comparisons, decision checkpoints, cost breakdowns, or calculators.
- Thin, repetitive, or generic sections are improved only where evidence
  supports the change.
- Internal linking supports both users and search discovery.

## Step 7 — Educational Distribution and Legitimate Outreach

**Dates:** September 14–20
**Status:** NOT STARTED

Complete when:

- Useful guides and tools are distributed through selected legitimate channels.
- Outreach targets relevant organizations, publications, educators, and
  resource pages.
- Outreach is personalized and value-based.
- Referral visits, earned links, mentions, and responses are recorded.
- No purchased links, mass submissions, or spam promotion are used.

## Step 8 — Search Measurement and Query-Informed Optimization

**Dates:** September 21–25
**Status:** NOT STARTED

Complete when:

- Search Console performance is compared with the locked baseline.
- Query, page, device, and country results are reviewed.
- Priority pages are adjusted only when real search data supports the change.
- Indexing, HTTPS, manual actions, security, Core Web Vitals, and links reports
  are rechecked.
- Improvements, declines, and inconclusive results are recorded honestly.

## Step 9 — Final Production Review and Next 90-Day Plan

**Dates:** September 26–29
**Status:** NOT STARTED

Complete when:

- The final Version 1 production audit passes.
- Repository, GitHub, and Vercel production are synchronized.
- Tests, build, routes, sitemap, canonicals, redirects, and critical live
  journeys pass.
- Version 1 completion status is documented.
- Analytics, email, monetization, and search-growth results are summarized.
- Remaining risks and dependencies are documented.
- A quality-first October through December expansion roadmap is approved.

## September 29 Success Standard

By September 29, MYLOANPREVIEW should be:

- A finished and reviewed Version 1 product
- Technically healthy and production-verified
- Accurate, transparent, and useful across its core loan categories
- Measurable through verified analytics and conversion events
- Supported by a functioning email-growth system
- Ready for responsible monetization without weakening trust
- Showing measurable Google visibility growth or clear evidence about what must
  improve next
- Operating from a repeatable content, optimization, and outreach process

Google rankings cannot be guaranteed on a fixed date. The program succeeds by
giving visitors and search engines increasingly strong reasons to trust, use,
return to, cite, and recommend MYLOANPREVIEW.
