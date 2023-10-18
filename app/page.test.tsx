import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";
import { Routes } from "../constants/router.constants";

describe("app router", () => {
  test("HomePage should render", async () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Beat the Odds" })
    ).toBeDefined();
    expect(screen.getByRole("link", { name: "Get Started" })).toHaveAttribute(
      "href",
      Routes.Data
    );
  });
});
