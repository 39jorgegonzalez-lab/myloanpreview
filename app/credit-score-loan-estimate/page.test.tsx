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

import { trackCalculatorUse } from "../lib/analytics";
import CreditScoreLoanEstimate from "./page";

vi.mock("../lib/analytics", () => ({
  trackCalculatorUse: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function getInput(name: string): HTMLInputElement {
  return screen.getByRole("spinbutton", {
    name,
  }) as HTMLInputElement;
}

function getLoanTypeSelect(): HTMLSelectElement {
  return screen.getByRole("combobox", {
    name: "Loan Type",
  }) as HTMLSelectElement;
}

function changeInput(
  name: string,
  value: string,
): void {
  fireEvent.change(getInput(name), {
    target: {
      value,
    },
  });
}

function changeLoanType(value: string): void {
  fireEvent.change(getLoanTypeSelect(), {
    target: {
      value,
    },
  });
}

describe("CreditScoreLoanEstimate", () => {
  it("shows the expected default personal-loan estimate", () => {
    render(<CreditScoreLoanEstimate />);

    expect(getLoanTypeSelect().value).toBe(
      "personal",
    );

    expect(
      getInput("Estimated Credit Score").value,
    ).toBe("700");

    expect(
      getInput("Loan Amount").value,
    ).toBe("25000");

    expect(
      getInput("Loan Term (Months)").value,
    ).toBe("60");

    expect(
      screen.getByText(
        "$568.83 – $704.76",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "700 — Good (670–739)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText("13% – 23%"),
    ).toBeTruthy();

    expect(
      screen.getByText("$25,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "$34,129.61 – $42,285.71",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "$9,129.61 – $17,285.71",
      ),
    ).toBeTruthy();
  });

  it("lowers the interest rate and payment range for a stronger score", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "820",
    );

    expect(
      screen.getByText(
        "820 — Exceptional (800–850)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText("7% – 13%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "$495.03 – $568.83",
      ),
    ).toBeTruthy();
  });

  it("raises the interest rate and payment range for a lower score", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "400",
    );

    expect(
      screen.getByText(
        "400 — Lower Score Range (300–579)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "29% – 35.99%",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "$793.55 – $903.16",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "LIMITED AVAILABILITY AND HIGH-COST WARNING",
      ),
    ).toBeTruthy();
  });

  it("uses the new-auto score bands and interest-rate assumptions", () => {
    render(<CreditScoreLoanEstimate />);

    changeLoanType("new-auto");

    expect(getLoanTypeSelect().value).toBe(
      "new-auto",
    );

    expect(
      screen.getByText(
        "700 — Prime (661–780)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText("4.5% – 8%"),
    ).toBeTruthy();
  });

  it("uses separate used-auto interest-rate assumptions", () => {
    render(<CreditScoreLoanEstimate />);

    changeLoanType("used-auto");

    expect(getLoanTypeSelect().value).toBe(
      "used-auto",
    );

    expect(
      screen.getByText(
        "700 — Prime (661–780)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText("7% – 10.5%"),
    ).toBeTruthy();
  });

  it("rejects a blank credit score", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "",
    );

    expect(
      screen.getByText(
        "Enter an estimated credit score.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it("rejects a credit score below 300", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "299",
    );

    expect(
      screen.getByText(
        "Credit score must be a whole number from 300 to 850.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it("rejects a fractional credit score", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "700.5",
    );

    expect(
      screen.getByText(
        "Credit score must be a whole number from 300 to 850.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it("rejects a personal-loan amount above the safeguard", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Loan Amount",
      "250001",
    );

    expect(
      screen.getByText(
        "Loan amount must be between $1 and $250,000 for this loan type.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it("rejects a personal-loan term above 120 months", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Loan Term (Months)",
      "121",
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months for this loan type.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it("rejects an auto-loan term above 96 months", () => {
    render(<CreditScoreLoanEstimate />);

    changeLoanType("new-auto");

    changeInput(
      "Loan Term (Months)",
      "97",
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 96 months for this loan type.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(7);
  });

  it.each(
    [
      [
        "credit score above 850",
        "personal",
        "Estimated Credit Score",
        "851",
        "Credit score must be a whole number from 300 to 850.",
      ],
      [
        "blank loan amount",
        "personal",
        "Loan Amount",
        "",
        "Enter a loan amount.",
      ],
      [
        "zero loan amount",
        "personal",
        "Loan Amount",
        "0",
        "Loan amount must be between $1 and $250,000 for this loan type.",
      ],
      [
        "auto-loan amount above the safeguard",
        "new-auto",
        "Loan Amount",
        "500001",
        "Loan amount must be between $1 and $500,000 for this loan type.",
      ],
      [
        "blank loan term",
        "personal",
        "Loan Term (Months)",
        "",
        "Enter a loan term.",
      ],
      [
        "zero loan term",
        "personal",
        "Loan Term (Months)",
        "0",
        "Loan term must be a whole number from 1 to 120 months for this loan type.",
      ],
      [
        "fractional loan term",
        "personal",
        "Loan Term (Months)",
        "60.5",
        "Loan term must be a whole number from 1 to 120 months for this loan type.",
      ],
    ] as const,
  )(
    "rejects invalid credit-score estimate inputs: %s",
    (
      _caseName,
      loanType,
      inputName,
      value,
      expectedMessage,
    ) => {
      render(<CreditScoreLoanEstimate />);

      if (loanType !== "personal") {
        changeLoanType(loanType);
      }

      changeInput(inputName, value);

      expect(
        screen.getByText(expectedMessage),
      ).toBeTruthy();

      expect(
        screen.getAllByText("—"),
      ).toHaveLength(7);
    },
  );

  it.each(
    [
      [
        "579",
        "579 — Lower Score Range (300–579)",
        "29% – 35.99%",
        "LIMITED AVAILABILITY AND HIGH-COST WARNING",
      ],
      [
        "580",
        "580 — Fair (580–669)",
        "19% – 30%",
        "ELEVATED BORROWING-COST SCENARIO",
      ],
      [
        "669",
        "669 — Fair (580–669)",
        "19% – 30%",
        "ELEVATED BORROWING-COST SCENARIO",
      ],
      [
        "670",
        "670 — Good (670–739)",
        "13% – 23%",
        null,
      ],
      [
        "739",
        "739 — Good (670–739)",
        "13% – 23%",
        null,
      ],
      [
        "740",
        "740 — Very Good (740–799)",
        "9% – 16%",
        null,
      ],
      [
        "799",
        "799 — Very Good (740–799)",
        "9% – 16%",
        null,
      ],
      [
        "800",
        "800 — Exceptional (800–850)",
        "7% – 13%",
        null,
      ],
    ] as const,
  )(
    "uses the correct personal-loan score band at boundary %s",
    (
      score,
      expectedContext,
      expectedRateRange,
      expectedWarning,
    ) => {
      render(<CreditScoreLoanEstimate />);

      changeInput(
        "Estimated Credit Score",
        score,
      );

      expect(
        screen.getByText(expectedContext),
      ).toBeTruthy();

      expect(
        screen.getByText(expectedRateRange),
      ).toBeTruthy();

      if (expectedWarning) {
        expect(
          screen.getByText(expectedWarning),
        ).toBeTruthy();
      }
    },
  );

  it.each(
    [
      [
        "500",
        "500 — Deep Subprime (300–500)",
        "11.5% – 20.5%",
        "VERY HIGH-COST AND LIMITED-AVAILABILITY WARNING",
      ],
      [
        "501",
        "501 — Subprime (501–600)",
        "9.9% – 16.9%",
        "HIGH-COST AUTO-FINANCING SCENARIO",
      ],
      [
        "600",
        "600 — Subprime (501–600)",
        "9.9% – 16.9%",
        "HIGH-COST AUTO-FINANCING SCENARIO",
      ],
      [
        "601",
        "601 — Near Prime (601–660)",
        "7.2% – 12.2%",
        null,
      ],
      [
        "660",
        "660 — Near Prime (601–660)",
        "7.2% – 12.2%",
        null,
      ],
      [
        "661",
        "661 — Prime (661–780)",
        "4.5% – 8%",
        null,
      ],
      [
        "780",
        "780 — Prime (661–780)",
        "4.5% – 8%",
        null,
      ],
      [
        "781",
        "781 — Super Prime (781–850)",
        "3.3% – 5.8%",
        null,
      ],
    ] as const,
  )(
    "uses the correct new-auto score band at boundary %s",
    (
      score,
      expectedContext,
      expectedRateRange,
      expectedWarning,
    ) => {
      render(<CreditScoreLoanEstimate />);

      changeLoanType("new-auto");

      changeInput(
        "Estimated Credit Score",
        score,
      );

      expect(
        screen.getByText(expectedContext),
      ).toBeTruthy();

      expect(
        screen.getByText(expectedRateRange),
      ).toBeTruthy();

      if (expectedWarning) {
        expect(
          screen.getByText(expectedWarning),
        ).toBeTruthy();
      }
    },
  );

  it("uses the deep-subprime used-auto rate assumptions", () => {
    render(<CreditScoreLoanEstimate />);

    changeLoanType("used-auto");

    changeInput(
      "Estimated Credit Score",
      "500",
    );

    expect(
      screen.getByText(
        "500 — Deep Subprime (300–500)",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "17.3% – 26.3%",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "VERY HIGH-COST AND LIMITED-AVAILABILITY WARNING",
      ),
    ).toBeTruthy();
  });

  it("tracks calculator use once without sending financial values", () => {
    render(<CreditScoreLoanEstimate />);

    changeInput(
      "Estimated Credit Score",
      "720",
    );

    changeInput(
      "Loan Amount",
      "26000",
    );

    changeLoanType("new-auto");

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith(
      "credit_score_loan_estimate",
    );
  });});