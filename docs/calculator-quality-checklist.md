# Calculator Quality Checklist

This checklist is the release standard for every calculator published on
MYLOANPREVIEW and PREVIEWMYLOAN.

A calculator is not considered complete merely because it displays a result.
It must calculate reliably, explain its assumptions, handle invalid input
safely, remain usable on mobile devices, and avoid creating unnecessary
confusion or distrust.

## 1. Calculation Accuracy

- [ ] Confirm the formula against an independent calculation.
- [ ] Verify the default example produces the expected result.
- [ ] Verify zero-interest calculations.
- [ ] Verify total paid equals monthly payment multiplied by the loan term,
      allowing for display rounding.
- [ ] Verify total interest equals total paid minus principal.
- [ ] Confirm all currency values use consistent two-decimal formatting.
- [ ] Confirm calculations never display `NaN`, `Infinity`, or negative zero.
- [ ] Confirm long-term totals clearly identify what is and is not included.
- [ ] Confirm labels accurately describe the displayed result.
- [ ] Document important assumptions near the results.

## 2. Input Validation

- [ ] Blank required fields remain blank and show a clear message.
- [ ] Zero values are accepted only where zero is meaningful.
- [ ] Negative values are rejected.
- [ ] Fractional values are rejected for whole-number fields.
- [ ] Minimum safeguards are enforced.
- [ ] Maximum safeguards are enforced.
- [ ] Unusually large values do not break the layout or calculation.
- [ ] Invalid inputs replace results with `—`.
- [ ] Validation messages explain how to correct the problem.
- [ ] Calculator safeguards are not presented as lender eligibility rules.

## 3. Accessibility

- [ ] Every input has a visible label.
- [ ] Every label is connected to its input with `htmlFor` and `id`.
- [ ] Numeric fields use an appropriate `inputMode`.
- [ ] Help text is connected with `aria-describedby` when applicable.
- [ ] Validation messages use an accessible live region.
- [ ] Dynamic result updates use an accessible live region when appropriate.
- [ ] Keyboard-only navigation works in a logical order.
- [ ] Focus indicators remain visible.
- [ ] Text and controls have sufficient contrast.
- [ ] Decorative icons are hidden from assistive technology.

## 4. Mobile and Responsive Behavior

Test at approximately `390 × 844` and at a desktop width.

- [ ] No horizontal page scrolling.
- [ ] Every input fits comfortably within the viewport.
- [ ] Results appear below inputs on narrow screens.
- [ ] Large currency values wrap without overflowing.
- [ ] Long labels wrap without being cut off.
- [ ] Labels and values remain readable and aligned.
- [ ] Buttons and links are easy to tap.
- [ ] No content is hidden behind sticky elements.
- [ ] The page remains usable at browser zoom levels above 100%.
- [ ] No mobile-only development or console warning is caused by site code.

## 5. Trust and Financial Clarity

- [ ] The calculator uses terms such as `estimate`, `possible`, or `approximate`.
- [ ] The calculator does not promise approval or guaranteed rates.
- [ ] The page states that MYLOANPREVIEW is not a lender or financial advisor.
- [ ] Fees excluded from the calculation are clearly disclosed.
- [ ] Results do not imply more precision than the inputs support.
- [ ] Monthly payment labels distinguish partial payments from total costs.
- [ ] Taxes, insurance, fees, or other costs are separated when applicable.
- [ ] Optional fields explain when entering `0` is appropriate.
- [ ] Educational text is accurate and understandable.
- [ ] Affiliate or lead-generation content does not interfere with the tool.

## 6. Automated Tests

- [ ] Default calculation test.
- [ ] Zero-interest test when supported.
- [ ] Blank required-field test.
- [ ] Zero-term or zero-denominator test.
- [ ] Negative-value test.
- [ ] Fractional whole-number-field test.
- [ ] Minimum-boundary test.
- [ ] Maximum-boundary test.
- [ ] Excessive-rate test.
- [ ] Result-formatting test.
- [ ] Automated tests pass with `npm test`.
- [ ] Tests fail when expected calculations or safeguards are intentionally broken.

## 7. Browser and Resilience Testing

- [ ] Test in a clean Chrome Guest or Incognito session.
- [ ] Test in the normal browser profile.
- [ ] Determine whether any hydration warning is caused by site code or by
      browser software modifying the page.
- [ ] Do not use `suppressHydrationWarning` merely to hide unexplained warnings.
- [ ] Do not disable server rendering merely to conceal a development warning.
- [ ] Confirm browser extensions do not expose an actual calculation failure.
- [ ] Confirm unexpected input never causes a frightening user-facing error.
- [ ] Confirm the production page does not expose development overlays.
- [ ] Record any monitored upstream framework or dependency risk.
- [ ] Reevaluate monitored risks before adding uploads, remote images,
      user-generated content, or dynamic CSS.

## 8. Analytics and Privacy

- [ ] Calculator-use tracking fires only once per session or intended interaction.
- [ ] Analytics events contain no sensitive financial values.
- [ ] Analytics events contain no personally identifiable information.
- [ ] Event names are consistent across calculators.
- [ ] Tracking failures do not prevent calculator use.
- [ ] Consent requirements are reviewed before adding advertising or lead forms.

## 9. Build and Code Quality Gates

The following commands must pass before staging:

```powershell
npm test
npm run build
git diff --check
```

Additional checks:

- [ ] Only intended files are modified.
- [ ] No unused imports remain.
- [ ] No temporary debugging code remains.
- [ ] No secrets or private values are present.
- [ ] No unrelated formatting changes are mixed into the commit.
- [ ] The calculator remains statically deployable when intended.
- [ ] Dependency warnings have been reviewed rather than blindly suppressed.
- [ ] `npm audit fix --force` has not been used without a controlled migration plan.

## 10. Deployment Verification

- [ ] Commit contains only the approved calculator and test changes.
- [ ] GitHub push succeeds.
- [ ] Vercel deployment reports `Ready`.
- [ ] Deployment reports `Production`.
- [ ] Live default calculation matches the tested result.
- [ ] Live invalid-input validation works.
- [ ] Live desktop layout works.
- [ ] Live mobile layout works.
- [ ] No `NaN`, `Infinity`, blank results, or broken content appears.
- [ ] Git working tree is clean after deployment.

## Release Decision

A calculator may be marked ready only when:

- calculation accuracy is verified
- validation behaves safely
- accessibility checks pass
- desktop and mobile checks pass
- automated tests pass
- production build passes
- live deployment is smoke-tested

Known failures must be corrected before release. Monitored upstream risks must be
documented with their reachability and current mitigation.