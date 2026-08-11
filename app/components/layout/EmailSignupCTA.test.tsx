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

import { trackEmailCtaClick } from "../../lib/analytics";
import EmailSignupCTA from "./EmailSignupCTA";

vi.mock("../../lib/analytics", () => ({
  trackEmailCtaClick: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  window.history.pushState({}, "", "/");
});

describe("EmailSignupCTA", () => {
  it("tracks a homepage email CTA click once", () => {
    window.history.pushState({}, "", "/");

    render(<EmailSignupCTA />);

    fireEvent.click(
      screen.getByRole("link", {
        name: "Subscribe for Free Tips",
      }),
    );

    expect(
      trackEmailCtaClick,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackEmailCtaClick,
    ).toHaveBeenCalledWith("homepage");
  });

  it("tracks a learning-center guide CTA with the guide location", () => {
    window.history.pushState(
      {},
      "",
      "/learning-center/what-is-debt-to-income-ratio",
    );

    render(<EmailSignupCTA />);

    fireEvent.click(
      screen.getByRole("link", {
        name: "Subscribe for Free Tips",
      }),
    );

    expect(
      trackEmailCtaClick,
    ).toHaveBeenCalledTimes(1);

    expect(
      trackEmailCtaClick,
    ).toHaveBeenCalledWith("guide");
  });

  it("preserves the external Brevo signup link safeguards", () => {
    render(<EmailSignupCTA />);

    const signupLink =
      screen.getByRole("link", {
        name: "Subscribe for Free Tips",
      });

    expect(
      signupLink.getAttribute("href"),
    ).toContain("sibforms.com");

    expect(
      signupLink.getAttribute("target"),
    ).toBe("_blank");

    expect(
      signupLink.getAttribute("rel"),
    ).toBe("noopener noreferrer");
  });
});
