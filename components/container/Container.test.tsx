import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  test("should render", () => {
    render(<Container>some content</Container>);

    expect(screen.getByText(/some content/i)).toBeInTheDocument();
  });
});
