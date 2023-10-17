import { MarketSuspensionStatus } from "@/constants/playerProps.constants";
import { IPlayerAlternates } from "@/types/playerAlternates.types";
import { IHighLowLine, IPlayerProps } from "@/types/playerProps.types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMarketSuspended = (
  playerProps: IPlayerProps,
  alternates: IPlayerAlternates[]
): boolean => {
  const { line, marketSuspended, playerId, statType, playerName } = playerProps;
  const marketOptimalLineExistsInAlternates = getMarketOptimalLineInAlternates(
    playerProps,
    alternates
  );
  const marketOptimalLineIsLessThan40 = alternates.find(
    (alternate) =>
      alternate.line === line &&
      alternate.playerId === playerId &&
      alternate.statType === statType &&
      alternate.pushOdds <= 0.4 &&
      alternate.overOdds <= 0.4 &&
      alternate.underOdds <= 0.4
  );

  return (
    marketSuspended === MarketSuspensionStatus.Suspended ||
    !Boolean(marketOptimalLineExistsInAlternates) ||
    Boolean(marketOptimalLineIsLessThan40)
  );
};

export const getMarketOptimalLineInAlternates = (
  props: IPlayerProps,
  alternates: IPlayerAlternates[]
): IPlayerAlternates | undefined => {
  return alternates.find(
    (alternate) =>
      alternate.line === props.line &&
      alternate.playerId === props.playerId &&
      alternate.statType === props.statType
  );
};

export const getLowAndHighLinesInAlternates = (
  props: IPlayerProps,
  alternates: IPlayerAlternates[]
): IHighLowLine => {
  const result = alternates.reduce(
    (acc, alternate) => {
      if (
        alternate.playerId === props.playerId &&
        alternate.statType === props.statType
      ) {
        if (alternate.line > acc.high) {
          acc.high = alternate.line;
        }

        if (alternate.line < acc.low) {
          acc.low = alternate.line;
        }
      }

      return acc;
    },
    { high: -Infinity, low: Infinity }
  );

  return result;
};
