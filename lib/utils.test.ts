import {
  findLowAndHighLinesInAlternates,
  findMarketOptimalLineInAlternates,
  isMarketSuspended,
} from "../lib/utils";
import {
  MarketSuspensionStatus,
  Position,
  StatType,
} from "../constants/playerProps.constants";
import { IPlayerAlternates } from "@/types/playerAlternates.types";

describe(".isMarketSuspended()", () => {
  it("should return true when market suspension status is suspended", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(true);
  });

  it("should return false when market suspension status is not suspended", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(false);
  });

  it("should return true when market optimal line does not exist in alternates", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 2,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(true);
  });

  it("should return false when market optimal line does exist in alternates", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(false);
  });

  it("should return true when market exists in the alternates dataset, but none of the 3 probabilities for the optimal line are greater than 40%", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.359,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(true);
  });

  it("should return false when market exists in the alternates dataset and at least one of the 3 probabilities for the optimal line are greater than 40%", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(false);
  });

  it("should return true when market exists in the alternates dataset, but none of the 3 probabilities for the optimal line are greater than 40%", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.NotSuspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.359,
        pushOdds: 0.102,
      },
    ];

    expect(isMarketSuspended(playerProps, alternates)).toEqual(true);
  });
});

describe(".findMarketOptimalLineInAlternates()", () => {
  it("should return the matching alternate when it exists", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1.5,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];
    const result = findMarketOptimalLineInAlternates(playerProps, alternates);

    expect(result).toEqual(alternates[0]);
  });

  it("should return undefined when no matching alternate is found", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 2,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];
    const result = findMarketOptimalLineInAlternates(playerProps, alternates);

    expect(result).toBeUndefined();
  });
});

describe(".findLowAndHighLinesInAlternates()", () => {
  it("should return the correct high and low lines when alternates exist", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
      {
        playerName: "Russell Westbrook",
        playerId: 1,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 3,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];
    const result = findLowAndHighLinesInAlternates(playerProps, alternates);

    expect(result).toEqual({ high: 3, low: 1 });
  });

  it("should return 0 for high and low when no matching alternates are found", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [
      {
        playerName: "Russell Westbrook",
        playerId: 2,
        statType: StatType.Assists,
        statTypeId: 103,
        line: 1,
        underOdds: 0.139,
        overOdds: 0.759,
        pushOdds: 0.102,
      },
    ];
    const result = findLowAndHighLinesInAlternates(playerProps, alternates);

    expect(result).toEqual({ high: 0, low: 0 });
  });

  it("should return 0 for high and low when no lines are found in alternates", () => {
    const playerProps = {
      line: 1.5,
      marketSuspended: MarketSuspensionStatus.Suspended,
      playerId: 1,
      playerName: "Russell Westbrook",
      position: Position.PointGuard,
      statType: StatType.Assists,
      statTypeId: 103,
      teamAbbr: "LAL",
      teamNickname: "Lakers",
      teamId: 13,
    };
    const alternates = [] as IPlayerAlternates[];
    const result = findLowAndHighLinesInAlternates(playerProps, alternates);

    expect(result).toEqual({ high: 0, low: 0 });
  });
});
