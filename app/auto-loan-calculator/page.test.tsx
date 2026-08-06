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
import AutoLoanCalculator from "./page";

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
      getInput("Interest Rate (%)").value,
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
    changeInput("Interest Rate (%)", "0");

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
    changeInput("Interest Rate (%)", "0");

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
  it("rejects a vehicle price below the minimum", () => {
    render(<AutoLoanCalculator />);

    changeInput("Vehicle Price", "499");

    expect(
      screen.getByText(
        "Vehicle price must be at least $500.",
      ),
    ).toBeTruthy();
  });

  it("rejects a vehicle price above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Vehicle Price", "5000001");

    expect(
      screen.getByText(
        "Vehicle price must be $5,000,000 or less.",
      ),
    ).toBeTruthy();
  });

  it("rejects a down payment above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Down Payment", "5000001");

    expect(
      screen.getByText(
        "Down payment must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects a negative trade-in value", () => {
    render(<AutoLoanCalculator />);

    changeInput("Trade-In Value", "-1");

    expect(
      screen.getByText(
        "Trade-in value must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects a trade-in value above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Trade-In Value", "5000001");

    expect(
      screen.getByText(
        "Trade-in value must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects a negative trade-in payoff", () => {
    render(<AutoLoanCalculator />);

    changeInput("Amount Owed on Trade-In", "-1");

    expect(
      screen.getByText(
        "Trade-in payoff must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects a trade-in payoff above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Amount Owed on Trade-In", "5000001");

    expect(
      screen.getByText(
        "Trade-in payoff must be between $0 and $5,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects negative estimated sales tax", () => {
    render(<AutoLoanCalculator />);

    changeInput("Estimated Sales Tax", "-1");

    expect(
      screen.getByText(
        "Estimated sales tax must be between $0 and $1,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects estimated sales tax above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Estimated Sales Tax", "1000001");

    expect(
      screen.getByText(
        "Estimated sales tax must be between $0 and $1,000,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects negative financed fees", () => {
    render(<AutoLoanCalculator />);

    changeInput("Other Financed Fees", "-1");

    expect(
      screen.getByText(
        "Other financed fees must be between $0 and $250,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects financed fees above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Other Financed Fees", "250001");

    expect(
      screen.getByText(
        "Other financed fees must be between $0 and $250,000.",
      ),
    ).toBeTruthy();
  });

  it("rejects a blank interest rate", () => {
    render(<AutoLoanCalculator />);

    changeInput("Interest Rate (%)", "");

    expect(
      screen.getByText("Enter an interest rate."),
    ).toBeTruthy();
  });

  it("rejects a negative interest rate", () => {
    render(<AutoLoanCalculator />);

    changeInput("Interest Rate (%)", "-0.01");

    expect(
      screen.getByText(
        "Interest rate must be between 0% and 100%.",
      ),
    ).toBeTruthy();
  });

  it("rejects an interest rate above the safeguard", () => {
    render(<AutoLoanCalculator />);

    changeInput("Interest Rate (%)", "100.01");

    expect(
      screen.getByText(
        "Interest rate must be between 0% and 100%.",
      ),
    ).toBeTruthy();
  });

  it("rejects a blank loan term", () => {
    render(<AutoLoanCalculator />);

    changeInput("Loan Term (Months)", "");

    expect(
      screen.getByText("Enter a loan term."),
    ).toBeTruthy();
  });

  it("rejects a loan term above 120 months", () => {
    render(<AutoLoanCalculator />);

    changeInput("Loan Term (Months)", "121");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();
  });

  it("tracks calculator use once without financial values", () => {
    render(<AutoLoanCalculator />);

    changeInput("Vehicle Price", "32000");
    changeInput("Down Payment", "4000");

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith("auto_loan");
  });
});
