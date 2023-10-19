import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavigationMenu } from "./NavigationMenu";
import { Routes } from "../../constants/router.constants";

describe("NavigationMenu", () => {
  test("should render navigation links", () => {
    render(<NavigationMenu />);

    expect(screen.getByText(/home/i).closest("a")).toHaveAttribute(
      "href",
      Routes.Home
    );
    expect(screen.getByText(/data/i).closest("a")).toHaveAttribute(
      "href",
      Routes.Data
    );
    expect(screen.getByText(/about/i).closest("a")).toHaveAttribute(
      "href",
      Routes.About
    );
    expect(screen.getByText(/api/i).closest("a")).toHaveAttribute(
      "href",
      Routes.ApiDocumentation
    );
  });
});
