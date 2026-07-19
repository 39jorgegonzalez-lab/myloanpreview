"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type CalculatorName =
  | "auto_loan"
  | "car_affordability"
  | "credit_score_loan_estimate"
  | "debt_to_income"
  | "monthly_payment"
  | "mortgage"
  | "personal_loan";

type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue>;

function sendEvent(
  eventName: string,
  parameters: AnalyticsParameters = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sendGAEvent("event", eventName, parameters);
  } catch {
    // Analytics must never interrupt a calculator, form, or navigation.
  }
}

export function trackCalculatorUse(
  calculatorName: CalculatorName,
): void {
  sendEvent("calculator_used", {
    calculator_name: calculatorName,
  });
}

export function trackEmailCtaClick(
  ctaLocation: string,
): void {
  sendEvent("email_cta_click", {
    cta_location: ctaLocation,
  });
}

export function trackGuideCtaClick(
  guideSlug: string,
  destinationType: "calculator" | "guide" | "email" | "other",
  ctaLocation: string,
): void {
  sendEvent("guide_cta_click", {
    guide_slug: guideSlug,
    destination_type: destinationType,
    cta_location: ctaLocation,
  });
}

export function trackAffiliateClick(
  partnerName: string,
  placement: string,
): void {
  sendEvent("affiliate_click", {
    partner_name: partnerName,
    placement,
  });
}

export function trackLeadFormStart(
  formName: string,
  placement: string,
): void {
  sendEvent("lead_form_start", {
    form_name: formName,
    placement,
  });
}

export function trackLeadGenerated(
  formName: string,
  placement: string,
): void {
  sendEvent("generate_lead", {
    form_name: formName,
    placement,
  });
}
