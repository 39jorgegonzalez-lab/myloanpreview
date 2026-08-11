import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { trackAffiliateClick } from "../../lib/analytics";
import AffiliateLink from "./AffiliateLink";

vi.mock("../../lib/analytics", () => ({
  trackAffiliateClick: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("AffiliateLink", () => {
  it("tracks an affiliate click once with categorical identifiers", () => {
    render(
      <AffiliateLink
        href="https://example.com/offer"
        partnerName="example_partner"
        placement="comparison_card"
      >
        View offer
      </AffiliateLink>,
    );

    fireEvent.click(
      screen.getByRole("link", {
        name: "View offer",
      }),
    );

    expect(
      trackAffiliateClick,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackAffiliateClick,
    ).toHaveBeenCalledWith(
      "example_partner",
      "comparison_card",
    );
  });

  it("preserves sponsored external-link safeguards", () => {
    render(
      <AffiliateLink
        href="https://example.com/offer"
        partnerName="example_partner"
        placement="comparison_card"
      >
        View offer
      </AffiliateLink>,
    );

    const affiliateLink =
      screen.getByRole("link", {
        name: "View offer",
      });

    expect(
      affiliateLink.getAttribute("href"),
    ).toBe("https://example.com/offer");

    expect(
      affiliateLink.getAttribute("target"),
    ).toBe("_blank");

    expect(
      affiliateLink.getAttribute("rel"),
    ).toBe("sponsored noopener noreferrer");
  });
});
