import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToggleSuspensionTableCell } from "./ToggleSuspensionTableCell";
import { StatType } from "../../../constants/playerProps.constants";

describe("ToggleSuspensionTableCell", () => {
  describe("when #isMarketSuspended is true", () => {
    test("checkbox should be checked", () => {
      render(
        <ToggleSuspensionTableCell
          isMarketSuspended={true}
          playerName={"Russell Westbrook"}
          statType={StatType.Rebounds}
        />
      );

      expect(screen.getByRole("checkbox")).toBeChecked();
    });
  });

  describe("when #isMarketSuspended is false", () => {
    test("checkbox should be checked", () => {
      render(
        <ToggleSuspensionTableCell
          isMarketSuspended={false}
          playerName={"Russell Westbrook"}
          statType={StatType.Rebounds}
        />
      );

      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });
  });
});
