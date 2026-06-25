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
