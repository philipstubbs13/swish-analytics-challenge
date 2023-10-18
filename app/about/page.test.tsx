import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("app router", () => {
  test("about page should render", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About" })
    ).toBeDefined();
  });
});
