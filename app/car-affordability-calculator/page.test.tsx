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
import CarAffordabilityCalculator from "./page";

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

describe("CarAffordabilityCalculator", () => {
  it("shows the expected default estimate", () => {
    render(<CarAffordabilityCalculator />);

    expect(
      getInput("Monthly Take-Home Income").value,
    ).toBe("6000");

    expect(
      getInput(
        "Monthly Expenses and Existing Debt Payments",
      ).value,
    ).toBe("2500");

    expect(
      getInput(
        "Vehicle Budget Share of Remaining Cash Flow (%)",
      ).value,
    ).toBe("15");

    expect(
      getInput("Interest Rate (%)").value,
    ).toBe("6.5");

    expect(
      getInput("Loan Term (Months)").value,
    ).toBe("60");

    expect(
      screen.getByText("$31,832.06"),
    ).toBeTruthy();

    expect(
      screen.getByText("$3,500.00"),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$525.00"),
    ).toHaveLength(2);

    expect(
      screen.getByText("$26,832.06"),
    ).toBeTruthy();

    expect(
      screen.getByText("$5,000.00"),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$0.00"),
    ).toHaveLength(2);
  });

  it("calculates the complete zero-interest scenario correctly", () => {
    render(<CarAffordabilityCalculator />);

    changeInput("Monthly Safety Cushion", "500");

    changeInput(
      "Vehicle Budget Share of Remaining Cash Flow (%)",
      "20",
    );

    changeInput(
      "Estimated Monthly Insurance, Fuel, and Maintenance",
      "200",
    );

    changeInput(
      "Down Payment or Trade-In Equity",
      "4000",
    );

    changeInput(
      "Estimated Sales Tax Rate (%)",
      "8",
    );

    changeInput("Other Financed Fees", "1000");

    changeInput("Interest Rate (%)", "0");

    expect(
      screen.getByText("$25,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$3,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$600.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$400.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$24,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$4,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$2,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$1,000.00"),
    ).toBeTruthy();
  });

  it("rejects a blank monthly take-home income", () => {
    render(<CarAffordabilityCalculator />);

    changeInput("Monthly Take-Home Income", "");

    expect(
      screen.getByText(
        "Enter your monthly take-home income.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("rejects a zero-month loan term", () => {
    render(<CarAffordabilityCalculator />);

    changeInput("Loan Term (Months)", "0");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("rejects a fractional loan term", () => {
    render(<CarAffordabilityCalculator />);

    changeInput("Loan Term (Months)", "60.5");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();
  });

  it("rejects a negative monthly safety cushion", () => {
    render(<CarAffordabilityCalculator />);

    changeInput("Monthly Safety Cushion", "-1");

    expect(
      screen.getByText(
        "Monthly safety cushion must be between $0 and $1,000,000.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("rejects a vehicle budget percentage above 100 percent", () => {
    render(<CarAffordabilityCalculator />);

    changeInput(
      "Vehicle Budget Share of Remaining Cash Flow (%)",
      "101",
    );

    expect(
      screen.getByText(
        "Vehicle budget percentage must be between 0% and 100%.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(8);
  });

  it("explains when expenses leave no remaining monthly cash flow", () => {
    render(<CarAffordabilityCalculator />);

    changeInput(
      "Monthly Expenses and Existing Debt Payments",
      "7000",
    );

    expect(
      screen.getByText(
        "No remaining monthly cash flow is available after the entered expenses and safety cushion. The estimated vehicle price reflects only the down payment or trade-in equity entered.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$5,000.00"),
    ).toHaveLength(2);

    expect(
      screen.getAllByText("$0.00"),
    ).toHaveLength(6);
  });

  it("explains when ownership costs use the full planned vehicle budget", () => {
    render(<CarAffordabilityCalculator />);

    changeInput(
      "Estimated Monthly Insurance, Fuel, and Maintenance",
      "600",
    );

    expect(
      screen.getByText(
        "The estimated monthly insurance, fuel, and maintenance costs use the planned vehicle budget, leaving $0.00 for a monthly loan payment. The estimated vehicle price reflects only the down payment or trade-in equity entered.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$5,000.00"),
    ).toHaveLength(2);

    expect(
      screen.getAllByText("$0.00"),
    ).toHaveLength(4);
  });
  it.each(
    [
      [
        "take-home income below the minimum",
        "Monthly Take-Home Income",
        "499",
        "Monthly take-home income must be between $500 and $1,000,000.",
      ],
      [
        "take-home income above the safeguard",
        "Monthly Take-Home Income",
        "1000001",
        "Monthly take-home income must be between $500 and $1,000,000.",
      ],
      [
        "blank monthly expenses",
        "Monthly Expenses and Existing Debt Payments",
        "",
        "Enter your monthly expenses and existing debt payments.",
      ],
      [
        "negative monthly expenses",
        "Monthly Expenses and Existing Debt Payments",
        "-1",
        "Monthly expenses must be between $0 and $1,000,000.",
      ],
      [
        "monthly expenses above the safeguard",
        "Monthly Expenses and Existing Debt Payments",
        "1000001",
        "Monthly expenses must be between $0 and $1,000,000.",
      ],
      [
        "safety cushion above the safeguard",
        "Monthly Safety Cushion",
        "1000001",
        "Monthly safety cushion must be between $0 and $1,000,000.",
      ],
      [
        "blank vehicle budget percentage",
        "Vehicle Budget Share of Remaining Cash Flow (%)",
        "",
        "Enter a vehicle budget percentage.",
      ],
      [
        "negative vehicle budget percentage",
        "Vehicle Budget Share of Remaining Cash Flow (%)",
        "-0.1",
        "Vehicle budget percentage must be between 0% and 100%.",
      ],
      [
        "negative estimated monthly vehicle costs",
        "Estimated Monthly Insurance, Fuel, and Maintenance",
        "-1",
        "Estimated monthly vehicle costs must be between $0 and $100,000.",
      ],
      [
        "estimated monthly vehicle costs above the safeguard",
        "Estimated Monthly Insurance, Fuel, and Maintenance",
        "100001",
        "Estimated monthly vehicle costs must be between $0 and $100,000.",
      ],
      [
        "negative down payment or trade-in equity",
        "Down Payment or Trade-In Equity",
        "-1",
        "Down payment or trade-in equity must be between $0 and $5,000,000.",
      ],
      [
        "down payment or trade-in equity above the safeguard",
        "Down Payment or Trade-In Equity",
        "5000001",
        "Down payment or trade-in equity must be between $0 and $5,000,000.",
      ],
      [
        "negative estimated sales tax rate",
        "Estimated Sales Tax Rate (%)",
        "-0.01",
        "Estimated sales tax rate must be between 0% and 25%.",
      ],
      [
        "estimated sales tax rate above the safeguard",
        "Estimated Sales Tax Rate (%)",
        "25.01",
        "Estimated sales tax rate must be between 0% and 25%.",
      ],
      [
        "negative financed fees",
        "Other Financed Fees",
        "-1",
        "Other financed fees must be between $0 and $250,000.",
      ],
      [
        "financed fees above the safeguard",
        "Other Financed Fees",
        "250001",
        "Other financed fees must be between $0 and $250,000.",
      ],
      [
        "blank interest rate",
        "Interest Rate (%)",
        "",
        "Enter an interest rate.",
      ],
      [
        "negative interest rate",
        "Interest Rate (%)",
        "-0.01",
        "Interest rate must be between 0% and 100%.",
      ],
      [
        "interest rate above the safeguard",
        "Interest Rate (%)",
        "100.01",
        "Interest rate must be between 0% and 100%.",
      ],
      [
        "blank loan term",
        "Loan Term (Months)",
        "",
        "Enter a loan term.",
      ],
      [
        "loan term above 120 months",
        "Loan Term (Months)",
        "121",
        "Loan term must be a whole number from 1 to 120 months.",
      ],
    ] as const,
  )(
    "rejects invalid car-affordability inputs: %s",
    (
      _caseName,
      inputName,
      value,
      expectedMessage,
    ) => {
      render(<CarAffordabilityCalculator />);

      changeInput(inputName, value);

      expect(
        screen.getByText(expectedMessage),
      ).toBeTruthy();
    },
  );

  it("tracks calculator use once without financial values", () => {
    render(<CarAffordabilityCalculator />);

    changeInput(
      "Monthly Take-Home Income",
      "6500",
    );

    changeInput(
      "Monthly Expenses and Existing Debt Payments",
      "2600",
    );

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith(
      "car_affordability",
    );
  });
});
