import {
  describe,
  expect,
  it,
} from "vitest";

import {
  SITE_SEARCH_ITEMS,
  searchSite,
} from "./siteSearch";

describe("siteSearch", () => {
  it("contains the expected number of searchable items", () => {
    expect(SITE_SEARCH_ITEMS).toHaveLength(35);
  });

  it("uses unique item IDs and hrefs", () => {
    const ids = SITE_SEARCH_ITEMS.map(
      (item) => item.id,
    );
    const hrefs = SITE_SEARCH_ITEMS.map(
      (item) => item.href,
    );

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("returns featured results for a blank search", () => {
    const results = searchSite("");

    expect(results.length).toBeGreaterThan(0);
    expect(
      results.every((item) => item.featured),
    ).toBe(true);
  });

  it("finds the auto loan calculator using a natural phrase", () => {
    const results = searchSite("car payment");

    expect(results[0]?.title).toBe(
      "Auto Loan Calculator",
    );
  });

  it("finds a guide using a keyword phrase", () => {
    const results = searchSite("soft inquiry");

    expect(results[0]?.title).toBe(
      "Does Checking Loan Rates Hurt Your Credit?",
    );
  });

  it("finds an FAQ result about guaranteed approval", () => {
    const results = searchSite(
      "guaranteed approval",
    );

    expect(results[0]?.title).toBe(
      "Are Loan Approvals Guaranteed?",
    );
    expect(results[0]?.href).toBe(
      "/faq#guaranteed-approval",
    );
  });

  it("matches searches without regard to capitalization", () => {
    const lowercaseResults =
      searchSite("credit score");
    const uppercaseResults =
      searchSite("CREDIT SCORE");

    expect(uppercaseResults).toEqual(
      lowercaseResults,
    );
  });

  it("requires every search term to match", () => {
    const results = searchSite(
      "mortgage credit score",
    );

    expect(
      results.some(
        (item) =>
          item.title ===
          "What Credit Score Do You Need for a Mortgage?",
      ),
    ).toBe(true);

    expect(
      results.every((item) => {
        const searchableText = [
          item.title,
          item.category,
          item.description,
          ...item.keywords,
        ]
          .join(" ")
          .toLowerCase();

        return (
          searchableText.includes("mortgage") &&
          searchableText.includes("credit") &&
          searchableText.includes("score")
        );
      }),
    ).toBe(true);
  });

  it("returns an empty array when nothing matches", () => {
    expect(
      searchSite("unrelated impossible phrase"),
    ).toEqual([]);
  });

  it("respects the requested result limit", () => {
    expect(searchSite("loan", 3)).toHaveLength(
      3,
    );
  });
});