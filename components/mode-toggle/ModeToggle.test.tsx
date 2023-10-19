import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ModeToggle } from "./ModeToggle";

describe("ModeToggle", () => {
  test("should render", () => {
    render(<ModeToggle />);

    expect(screen.getByTestId("mode-toggle-button")).toBeInTheDocument();
  });
});
