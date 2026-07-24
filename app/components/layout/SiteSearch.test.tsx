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

import SiteSearch from "./SiteSearch";

afterEach(() => {
  cleanup();
  document.body.style.overflow = "";
});

describe("SiteSearch", () => {
  it("does not render when closed", () => {
    render(
      <SiteSearch
        open={false}
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("dialog"),
    ).toBeNull();
  });

  it("shows the search dialog when open", () => {
    render(
      <SiteSearch
        open
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("dialog", {
        name: "Search MYLOANPREVIEW",
      }),
    ).toBeTruthy();

    expect(
      screen.getByRole("combobox", {
        name: "Search calculators and guides",
      }),
    ).toBeTruthy();
  });

  it("filters results as the visitor types", () => {
    render(
      <SiteSearch
        open
        onClose={vi.fn()}
      />,
    );

    fireEvent.change(
      screen.getByRole("combobox", {
        name: "Search calculators and guides",
      }),
      {
        target: {
          value: "soft inquiry",
        },
      },
    );

    expect(
      screen.getByRole("option", {
        name: /Does Checking Loan Rates Hurt Your Credit\?/,
      }),
    ).toBeTruthy();
  });

  it("shows an explicit no-results message", () => {
    render(
      <SiteSearch
        open
        onClose={vi.fn()}
      />,
    );

    fireEvent.change(
      screen.getByRole("combobox", {
        name: "Search calculators and guides",
      }),
      {
        target: {
          value: "unrelated impossible phrase",
        },
      },
    );

    expect(
      screen.getByText("No results found"),
    ).toBeTruthy();

    expect(
      screen.getByText(
        /Try a broader term such as loan payment/,
      ),
    ).toBeTruthy();
  });

  it("clears the current search query", () => {
    render(
      <SiteSearch
        open
        onClose={vi.fn()}
      />,
    );

    const input = screen.getByRole("combobox", {
      name: "Search calculators and guides",
    }) as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "mortgage",
      },
    });

    expect(input.value).toBe("mortgage");

    fireEvent.click(
      screen.getByRole("button", {
        name: "Clear search",
      }),
    );

    expect(input.value).toBe("");
  });

  it("closes when Escape is pressed", () => {
    const onClose = vi.fn();

    render(
      <SiteSearch
        open
        onClose={onClose}
      />,
    );

    fireEvent.keyDown(
      screen.getByRole("dialog"),
      {
        key: "Escape",
      },
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes when the close button is selected", () => {
    const onClose = vi.fn();

    render(
      <SiteSearch
        open
        onClose={onClose}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Close search",
      }),
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("updates the active result with arrow keys", () => {
    render(
      <SiteSearch
        open
        onClose={vi.fn()}
      />,
    );

    const input = screen.getByRole("combobox", {
      name: "Search calculators and guides",
    });

    const initialActiveResult =
      input.getAttribute(
        "aria-activedescendant",
      );

    fireEvent.keyDown(input, {
      key: "ArrowDown",
    });

    expect(
      input.getAttribute(
        "aria-activedescendant",
      ),
    ).not.toBe(initialActiveResult);
  });

  it("closes when a search result is selected", () => {
    const onClose = vi.fn();

    render(
      <SiteSearch
        open
        onClose={onClose}
      />,
    );

    fireEvent.change(
      screen.getByRole("combobox", {
        name: "Search calculators and guides",
      }),
      {
        target: {
          value: "auto loan calculator",
        },
      },
    );

              const resultLink = screen.getByRole("option", {
      name: /Auto Loan Calculator/,
    });

    resultLink.addEventListener(
      "click",
      (event) => event.preventDefault(),
      {
        once: true,
      },
    );

    fireEvent.click(resultLink);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});