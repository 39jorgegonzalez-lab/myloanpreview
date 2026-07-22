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

import DebtToIncomeCalculator from "./page";

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
        "Projected monthly debt exceeds gross monthly income. This scenario leaves no gross income remaining for taxes or ordinary living expenses. Test a smaller proposed payment or review the entered debt amounts before proceeding.",
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
});