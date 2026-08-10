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
import MonthlyPaymentCalculator from "./page";

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

describe("MonthlyPaymentCalculator", () => {
  it("shows the expected default estimate", () => {
    render(<MonthlyPaymentCalculator />);

    expect(
      getInput("Loan Amount").value,
    ).toBe("25000");

    expect(
      getInput("Interest Rate (%)").value,
    ).toBe("6.5");

    expect(
      getInput("Loan Term (Months)").value,
    ).toBe("60");

    expect(
      screen.getByText("$489.15"),
    ).toBeTruthy();

    expect(
      screen.getByText("$25,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$29,349.22"),
    ).toBeTruthy();

    expect(
      screen.getByText("$4,349.22"),
    ).toBeTruthy();
  });

  it("calculates a zero-interest loan correctly", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput(
      "Interest Rate (%)",
      "0",
    );

    expect(
      screen.getByText("$416.67"),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$25,000.00"),
    ).toHaveLength(2);

    expect(
      screen.getByText("$0.00"),
    ).toBeTruthy();
  });

  it("rejects a blank loan amount", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput("Loan Amount", "");

    expect(
      screen.getByText(
        "Enter a loan amount.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(4);
  });

  it("rejects a zero-month loan term", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput("Loan Term (Months)", "0");

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 480 months.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(4);
  });

  it("rejects a fractional loan term", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput(
      "Loan Term (Months)",
      "60.5",
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 480 months.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(4);
  });

  it("rejects an interest rate above the safeguard", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput(
      "Interest Rate (%)",
      "100.01",
    );

    expect(
      screen.getByText(
        "Interest rate must be between 0% and 100%.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(4);
  });

  it("rejects a negative loan amount", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput("Loan Amount", "-1");

    expect(
      screen.getByText(
        "Loan amount must be between $1 and $5,000,000.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(4);
  });

  it.each(
    [
      [
        "zero loan amount",
        "Loan Amount",
        "0",
        "Loan amount must be between $1 and $5,000,000.",
      ],
      [
        "loan amount above the safeguard",
        "Loan Amount",
        "5000001",
        "Loan amount must be between $1 and $5,000,000.",
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
        "blank loan term",
        "Loan Term (Months)",
        "",
        "Enter a loan term.",
      ],
      [
        "loan term above 480 months",
        "Loan Term (Months)",
        "481",
        "Loan term must be a whole number from 1 to 480 months.",
      ],
    ] as const,
  )(
    "rejects invalid monthly-payment inputs: %s",
    (
      _caseName,
      inputName,
      value,
      expectedMessage,
    ) => {
      render(<MonthlyPaymentCalculator />);

      changeInput(inputName, value);

      expect(
        screen.getByText(expectedMessage),
      ).toBeTruthy();

      expect(
        screen.getAllByText("—"),
      ).toHaveLength(4);
    },
  );

  it("tracks calculator use once without financial values", () => {
    render(<MonthlyPaymentCalculator />);

    changeInput(
      "Loan Amount",
      "26000",
    );

    changeInput(
      "Interest Rate (%)",
      "7",
    );

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith(
      "monthly_payment",
    );
  });});