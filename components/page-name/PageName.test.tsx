import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageName } from "./PageName";

describe("PageName", () => {
  test("should render", () => {
    render(<PageName>About</PageName>);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
