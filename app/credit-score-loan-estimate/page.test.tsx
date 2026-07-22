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

import CreditScoreLoanEstimate from "./page";

vi.mock("../lib/analytics", () => ({
  trackCalculatorUse: vi.fn(),
}));

afterEach(() => {
  cleanup();
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

  it("lowers the APR and payment range for a stronger score", () => {
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

  it("raises the APR and payment range for a lower score", () => {
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

  it("uses the new-auto score bands and APR assumptions", () => {
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

  it("uses separate used-auto APR assumptions", () => {
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
});