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
import DebtToIncomeCalculator from "./page";

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

describe("DebtToIncomeCalculator", () => {
  it("shows the expected default DTI estimates and caution signal", () => {
    render(<DebtToIncomeCalculator />);

    expect(
      getInput("Gross Monthly Income").value,
    ).toBe("6000");

    expect(
      getInput("Monthly Housing Payment").value,
    ).toBe("1500");

    expect(
      getInput("Other Monthly Debt Payments").value,
    ).toBe("500");

    expect(
      getInput("Proposed New Monthly Payment").value,
    ).toBe("500");

    expect(screen.getByText("41.7%")).toBeTruthy();
    expect(screen.getByText("33.3%")).toBeTruthy();
    expect(screen.getByText("$6,000.00")).toBeTruthy();
    expect(screen.getByText("$2,000.00")).toBeTruthy();
    expect(screen.getByText("$2,500.00")).toBeTruthy();
    expect(screen.getByText("$4,000.00")).toBeTruthy();
    expect(screen.getByText("$3,500.00")).toBeTruthy();

    expect(
      screen.getByText(
        "Elevated projected debt load",
      ),
    ).toBeTruthy();

    const projectedCard = screen.getByText(
      "Estimated Projected DTI Ratio",
    ).parentElement;

    expect(projectedCard?.className).toContain(
      "bg-amber-50",
    );

    expect(
      screen.queryByText(
        "STOP AND REVIEW THIS SCENARIO",
      ),
    ).toBeNull();
  });

  it("rejects a blank gross monthly income", () => {
    render(<DebtToIncomeCalculator />);

    changeInput("Gross Monthly Income", "");

    expect(
      screen.getByText(
        "Enter your gross monthly income.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("shows current-only mode when the proposed payment is zero", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "0",
    );

    expect(
      screen.getAllByText("33.3%"),
    ).toHaveLength(2);

    expect(
      screen.getByText(
        "No proposed new monthly payment is entered, so the current and projected DTI ratios are the same.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$2,000.00"),
    ).toHaveLength(2);

    expect(
      screen.getAllByText("$4,000.00"),
    ).toHaveLength(2);

    expect(screen.getByText("$0.00")).toBeTruthy();

    expect(
      screen.getByText(
        "Lower projected debt load",
      ),
    ).toBeTruthy();

    const projectedCard = screen.getByText(
      "Estimated Projected DTI Ratio",
    ).parentElement;

    expect(projectedCard?.className).toContain(
      "bg-blue-600",
    );
  });

  it("shows a critical stop signal when projected debts exceed income", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Monthly Housing Payment",
      "5000",
    );

    changeInput(
      "Other Monthly Debt Payments",
      "1500",
    );

    changeInput(
      "Proposed New Monthly Payment",
      "500",
    );

    expect(screen.getByText("116.7%")).toBeTruthy();
    expect(screen.getByText("108.3%")).toBeTruthy();

    expect(
      screen.getByText(
        "STOP AND REVIEW THIS SCENARIO",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "Projected monthly debt equals or exceeds gross monthly income. This scenario leaves no gross income remaining for taxes or ordinary living expenses. Test a smaller proposed payment or review the entered debt amounts before proceeding.",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "Planning signal only. Lender calculations and limits vary.",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText("-$500.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("-$1,000.00"),
    ).toBeTruthy();

    const projectedCard = screen.getByText(
      "Estimated Projected DTI Ratio",
    ).parentElement;

    expect(projectedCard?.className).toContain(
      "bg-red-700",
    );

    const negativeCurrentRow =
      screen.getByText("-$500.00").parentElement;

    const negativeProjectedRow =
      screen.getByText("-$1,000.00").parentElement;

    expect(
      negativeCurrentRow?.className,
    ).toContain("bg-red-700");

    expect(
      negativeProjectedRow?.className,
    ).toContain("bg-red-700");
  });

  it("rejects a negative housing payment", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Monthly Housing Payment",
      "-1",
    );

    expect(
      screen.getByText(
        "Monthly housing payment must be between $0 and $1,000,000.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("rejects a negative proposed payment", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "-1",
    );

    expect(
      screen.getByText(
        "Proposed new monthly payment must be between $0 and $1,000,000.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("rejects an income above the calculator safeguard", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Gross Monthly Income",
      "1000001",
    );

    expect(
      screen.getByText(
        "Gross monthly income must be between $1 and $1,000,000.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("treats optional debt inputs as zero when left blank", () => {
    render(<DebtToIncomeCalculator />);

    changeInput("Monthly Housing Payment", "");
    changeInput("Other Monthly Debt Payments", "");
    changeInput("Proposed New Monthly Payment", "");

    expect(
      screen.getAllByText("0.0%"),
    ).toHaveLength(2);

    expect(
      screen.getAllByText("$0.00"),
    ).toHaveLength(3);

    expect(
      screen.getAllByText("$6,000.00"),
    ).toHaveLength(3);

    expect(
      screen.getByText(
        "No proposed new monthly payment is entered, so the current and projected DTI ratios are the same.",
      ),
    ).toBeTruthy();
  });

  it.each(
    [
      [
        "income below the minimum",
        "Gross Monthly Income",
        "0",
        "Gross monthly income must be between $1 and $1,000,000.",
      ],
      [
        "housing payment above the safeguard",
        "Monthly Housing Payment",
        "1000001",
        "Monthly housing payment must be between $0 and $1,000,000.",
      ],
      [
        "negative other monthly debt payments",
        "Other Monthly Debt Payments",
        "-1",
        "Other monthly debt payments must be between $0 and $1,000,000.",
      ],
      [
        "other monthly debt payments above the safeguard",
        "Other Monthly Debt Payments",
        "1000001",
        "Other monthly debt payments must be between $0 and $1,000,000.",
      ],
      [
        "proposed payment above the safeguard",
        "Proposed New Monthly Payment",
        "1000001",
        "Proposed new monthly payment must be between $0 and $1,000,000.",
      ],
    ] as const,
  )(
    "rejects invalid DTI inputs: %s",
    (
      _caseName,
      inputName,
      value,
      expectedMessage,
    ) => {
      render(<DebtToIncomeCalculator />);

      changeInput(inputName, value);

      expect(
        screen.getByText(expectedMessage),
      ).toBeTruthy();
    },
  );

  it("uses the elevated signal at exactly 36 percent projected DTI", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "160",
    );

    expect(
      screen.getByText("36.0%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "Elevated projected debt load",
      ),
    ).toBeTruthy();
  });

  it("uses the high signal at exactly 45 percent projected DTI", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "700",
    );

    expect(
      screen.getByText("45.0%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "High projected debt load",
      ),
    ).toBeTruthy();
  });

  it("keeps the high signal at exactly 50 percent projected DTI", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "1000",
    );

    expect(
      screen.getByText("50.0%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "High projected debt load",
      ),
    ).toBeTruthy();

    expect(
      screen.queryByText(
        "Very high projected debt load",
      ),
    ).toBeNull();
  });

  it("uses the very-high signal above 50 percent projected DTI", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "1060",
    );

    expect(
      screen.getByText("51.0%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "Very high projected debt load",
      ),
    ).toBeTruthy();
  });

  it("uses the critical stop signal at exactly 100 percent projected DTI", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Proposed New Monthly Payment",
      "4000",
    );

    expect(
      screen.getByText("100.0%"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "STOP AND REVIEW THIS SCENARIO",
      ),
    ).toBeTruthy();

    expect(
      screen.getByText(
        "Projected monthly debt equals or exceeds gross monthly income. This scenario leaves no gross income remaining for taxes or ordinary living expenses. Test a smaller proposed payment or review the entered debt amounts before proceeding.",
      ),
    ).toBeTruthy();
  });

  it("tracks calculator use once without financial values", () => {
    render(<DebtToIncomeCalculator />);

    changeInput(
      "Gross Monthly Income",
      "6500",
    );

    changeInput(
      "Monthly Housing Payment",
      "1600",
    );

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith(
      "debt_to_income",
    );
  });});