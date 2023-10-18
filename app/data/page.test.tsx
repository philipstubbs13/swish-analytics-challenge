import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DataPage from "./page";

vi.mock("./page.utils", () => {
  return {
    getData: vi.fn(() => Promise.resolve({})),
  };
});

describe("app router", () => {
  test("data page should render", async () => {
    const Result = await DataPage();
    render(Result);

    expect(
      screen.getByRole("heading", { level: 1, name: "Beat the Odds" })
    ).toBeDefined();
  });
});
