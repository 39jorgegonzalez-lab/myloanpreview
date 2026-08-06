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
import PersonalLoanCalculator from "./page";

vi.mock("../lib/analytics", () => ({
  trackCalculatorUse: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("PersonalLoanCalculator", () => {
  it("shows the expected default estimate", () => {
    render(<PersonalLoanCalculator />);

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Loan Amount",
        }) as HTMLInputElement
      ).value,
    ).toBe("10000");

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Interest Rate (%)",
        }) as HTMLInputElement
      ).value,
    ).toBe("11.5");

    expect(
      (
        screen.getByRole("spinbutton", {
          name: "Loan Term (Months)",
        }) as HTMLInputElement
      ).value,
    ).toBe("36");

    expect(screen.getByText("$329.76")).toBeTruthy();
    expect(screen.getByText("$10,000.00")).toBeTruthy();
    expect(screen.getByText("$11,871.36")).toBeTruthy();
    expect(screen.getByText("$1,871.36")).toBeTruthy();
  });

  it("calculates a zero-interest loan correctly", () => {
    render(<PersonalLoanCalculator />);

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

    expect(screen.getByText("$277.78")).toBeTruthy();
    expect(screen.getAllByText("$10,000.00")).toHaveLength(
      2,
    );
    expect(screen.getByText("$0.00")).toBeTruthy();
  });

  it("rejects a blank loan amount", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Amount",
      }),
      {
        target: {
          value: "",
        },
      },
    );

    expect(
      screen.getByText("Enter a loan amount."),
    ).toBeTruthy();

    expect(screen.getAllByText("—")).toHaveLength(4);
  });

  it("rejects a zero-month loan term", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Term (Months)",
      }),
      {
        target: {
          value: "0",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();

    expect(screen.getAllByText("—")).toHaveLength(4);
  });

  it("rejects a fractional loan term", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Term (Months)",
      }),
      {
        target: {
          value: "36.5",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();
  });

  it("rejects an interest rate above the safeguard", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Interest Rate (%)",
      }),
      {
        target: {
          value: "101",
        },
      },
    );

    expect(
      screen.getByText(
        "Interest rate must be between 0% and 100%.",
      ),
    ).toBeTruthy();
  });
  it("rejects a loan amount below the minimum", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Amount",
      }),
      {
        target: {
          value: "99",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan amount must be at least $100.",
      ),
    ).toBeTruthy();
  });

  it("rejects a loan amount above the safeguard", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Amount",
      }),
      {
        target: {
          value: "1000001",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan amount must be $1,000,000 or less.",
      ),
    ).toBeTruthy();
  });

  it("rejects a blank interest rate", () => {
    render(<PersonalLoanCalculator />);

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

  it("rejects a negative interest rate", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Interest Rate (%)",
      }),
      {
        target: {
          value: "-0.01",
        },
      },
    );

    expect(
      screen.getByText(
        "Interest rate must be between 0% and 100%.",
      ),
    ).toBeTruthy();
  });

  it("rejects a blank loan term", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Term (Months)",
      }),
      {
        target: {
          value: "",
        },
      },
    );

    expect(
      screen.getByText("Enter a loan term."),
    ).toBeTruthy();
  });

  it("rejects a loan term above 120 months", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Term (Months)",
      }),
      {
        target: {
          value: "121",
        },
      },
    );

    expect(
      screen.getByText(
        "Loan term must be a whole number from 1 to 120 months.",
      ),
    ).toBeTruthy();
  });

  it("tracks calculator use once without financial values", () => {
    render(<PersonalLoanCalculator />);

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Loan Amount",
      }),
      {
        target: {
          value: "12000",
        },
      },
    );

    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: "Interest Rate (%)",
      }),
      {
        target: {
          value: "10",
        },
      },
    );

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackCalculatorUse,
    ).toHaveBeenCalledWith("personal_loan");
  });
});
