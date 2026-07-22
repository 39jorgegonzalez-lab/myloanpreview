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

import AutoLoanCalculator from "./page";

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

describe("AutoLoanCalculator", () => {
  it("shows the expected default estimate", () => {
    render(<AutoLoanCalculator />);

    expect(getInput("Vehicle Price").value).toBe(
      "30000",
    );
    expect(getInput("Down Payment").value).toBe(
      "3000",
    );
    expect(
      getInput("Interest Rate / APR (%)").value,
    ).toBe("6.5");
    expect(
      getInput("Loan Term (Months)").value,
    ).toBe("60");

    expect(screen.getByText("$528.29")).toBeTruthy();
    expect(
      screen.getByText("$27,000.00"),
    ).toBeTruthy();
    expect(screen.getByText("$0.00")).toBeTruthy();
    expect(
      screen.getByText("$31,697.16"),
    ).toBeTruthy();
    expect(
      screen.getByText("$4,697.16"),
    ).toBeTruthy();
  });

  it("calculates trade-in equity, taxes, fees, and zero interest correctly", () => {
    render(<AutoLoanCalculator />);

    changeInput("Trade-In Value", "5000");
    changeInput(
      "Amount Owed on Trade-In",
      "2000",
    );
    changeInput("Estimated Sales Tax", "1500");
    changeInput("Other Financed Fees", "500");
    changeInput("Interest Rate / APR (%)", "0");

    expect(screen.getByText("$433.33")).toBeTruthy();
    expect(
      screen.getAllByText("$26,000.00"),
    ).toHaveLength(2);
    expect(
      screen.getByText("$3,000.00"),
    ).toBeTruthy();
    expect(screen.getByText("$0.00")).toBeTruthy();
  });

  it("rejects a blank vehicle price", () => {
    render(<AutoLoanCalculator />);

    changeInput("Vehicle Price", "");

    expect(
      screen.getByText("Enter a vehicle price."),
    ).toBeTruthy();

    expect(screen.getAllByText("—")).toHaveLength(
      5,
    );
  });

  it("rejects a zero-month loan term", () => {
    render(<AutoLoanCalculator />);

    changeInput("Loan Term (Months)", "0");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();

    expect(screen.getAllByText("—")).toHaveLength(
      5,
    );
  });

  it("rejects a fractional loan term", () => {
    render(<AutoLoanCalculator />);

    changeInput("Loan Term (Months)", "60.5");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();
  });

  it("accounts for negative trade-in equity", () => {
    render(<AutoLoanCalculator />);

    changeInput("Trade-In Value", "5000");
    changeInput(
      "Amount Owed on Trade-In",
      "7000",
    );
    changeInput("Estimated Sales Tax", "1500");
    changeInput("Other Financed Fees", "500");
    changeInput("Interest Rate / APR (%)", "0");

    expect(screen.getByText("$516.67")).toBeTruthy();
    expect(
      screen.getAllByText("$31,000.00"),
    ).toHaveLength(2);
    expect(
      screen.getByText("-$2,000.00"),
    ).toBeTruthy();
    expect(screen.getByText("$0.00")).toBeTruthy();
  });

  it("explains when no financing is required", () => {
    render(<AutoLoanCalculator />);

    changeInput("Down Payment", "30000");

    expect(
      screen.getByText(
        "The entered down payment and trade-in equity cover the estimated vehicle cost, taxes, and financed fees. The estimated amount financed is $0.00.",
      ),
    ).toBeTruthy();

    expect(screen.getAllByText("$0.00")).toHaveLength(
      5,
    );
  });

  it("rejects a negative down payment", () => {
    render(<AutoLoanCalculator />);

    changeInput("Down Payment", "-1");

    expect(
      screen.getByText(
        "Down payment must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();

    expect(screen.getAllByText("—")).toHaveLength(
      5,
    );
  });
});