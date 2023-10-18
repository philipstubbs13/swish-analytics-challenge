import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ApiDocumentationPage from "./page";

describe("app router", () => {
  test("api documentation page should render", () => {
    render(<ApiDocumentationPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About the API" })
    ).toBeDefined();
  });
});
