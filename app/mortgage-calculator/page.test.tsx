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
import MortgageCalculator from "./page";

vi.mock("../lib/analytics", () => ({
  trackCalculatorUse: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("MortgageCalculator", () => {
  it("shows the expected default mortgage estimate", () => {
    render(<MortgageCalculator />);

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Home Price",
        }) as HTMLInputElement
      ).value,
    ).toBe("350000");

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Down Payment",
        }) as HTMLInputElement
      ).value,
    ).toBe("70000");

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Interest Rate (%)",
        }) as HTMLInputElement
      ).value,
    ).toBe("6.25");

    expect(
      screen.getAllByText("$1,724.01"),
    ).toHaveLength(2);

    expect(
      screen.getByText("$280,000.00"),
    ).toBeTruthy();

        expect(
      screen.getAllByText("$620,642.94"),
    ).toHaveLength(2);

    expect(
      screen.getByText("$340,642.94"),
    ).toBeTruthy();
  });

  it("calculates a zero-interest mortgage correctly", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Interest Rate (%)",
      }),
      {
        target: {
          value: "0",
        },
      },
    );

    expect(
      screen.getAllByText("$777.78"),
    ).toHaveLength(2);

        expect(
      screen.getAllByText("$280,000.00"),
    ).toHaveLength(3);

    expect(
      screen.getAllByText("$0.00").length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("includes financed costs in the estimated loan amount", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Financed Loan Costs",
      }),
      {
        target: {
          value: "5000",
        },
      },
    );

    expect(
      screen.getByText("$285,000.00"),
    ).toBeTruthy();

    expect(
      screen.getAllByText("$1,754.79"),
    ).toHaveLength(2);

        expect(
      screen.getAllByText("$631,725.85"),
    ).toHaveLength(2);

    expect(
      screen.getByText("$346,725.85"),
    ).toBeTruthy();
  });

  it("includes taxes, insurance, HOA fees, and other costs", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Annual Property Taxes",
      }),
      {
        target: {
          value: "3600",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Annual Homeowners Insurance",
      }),
      {
        target: {
          value: "1200",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Monthly Mortgage Insurance",
      }),
      {
        target: {
          value: "150",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Monthly HOA Fees",
      }),
      {
        target: {
          value: "250",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Other Monthly Housing Costs",
      }),
      {
        target: {
          value: "75",
        },
      },
    );

    expect(
      screen.getByText("$2,599.01"),
    ).toBeTruthy();

    expect(
      screen.getByText("$300.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$100.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$150.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$250.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$75.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$315,000.00"),
    ).toBeTruthy();

    expect(
      screen.getByText("$935,642.94"),
    ).toBeTruthy();
  });

  it("rejects a blank home price", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Home Price",
      }),
      {
        target: {
          value: "",
        },
      },
    );

    expect(
      screen.getByText("Enter a home price."),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(12);
  });

  it("rejects a down payment equal to the home price", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Down Payment",
      }),
      {
        target: {
          value: "350000",
        },
      },
    );

    expect(
      screen.getByText(
        "Down payment must be less than the home price to estimate a financed mortgage.",
      ),
    ).toBeTruthy();

    expect(
      screen.getAllByText("—"),
    ).toHaveLength(12);
  });

  it("rejects a blank interest rate", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Interest Rate (%)",
      }),
      {
        target: {
          value: "",
        },
      },
    );

    expect(
      screen.getByText("Enter an interest rate."),
    ).toBeTruthy();
  });

  it("rejects a fractional loan term", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Term (Years)",
      }),
      {
        target: {
          value: "30.5",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 50 years.",
      ),
    ).toBeTruthy();
  });

  it("rejects negative property taxes", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Annual Property Taxes",
      }),
      {
        target: {
          value: "-1",
        },
      },
    );

    expect(
      screen.getByText(
        "Annual property taxes cannot be negative.",
      ),
    ).toBeTruthy();
  });

  it("rejects an estimated loan above the safeguard", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Home Price",
      }),
      {
        target: {
          value: "100000000",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Down Payment",
      }),
      {
        target: {
          value: "0",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Financed Loan Costs",
      }),
      {
        target: {
          value: "1",
        },
      },
    );

    expect(
      screen.getByText(
        "The estimated loan amount must be $100,000,000 or less.",
      ),
    ).toBeTruthy();
  });

  it("tracks calculator use once without financial values", () => {
    render(<MortgageCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Home Price",
      }),
      {
        target: {
          value: "400000",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Down Payment",
      }),
      {
        target: {
          value: "80000",
        },
      },
    );

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith("mortgage");
  });
});