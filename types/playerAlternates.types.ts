import { StatType } from "@/constants/playerProps.constants";

export interface IPlayerAlternates {
  line: number;
  overOdds: number;
  playerId: number;
  playerName: string;
  pushOdds: number;
  statTypeId: number;
  statType: StatType;
  underOdds: number;
}

export type IPlayerAlternatesResponse = {
  data: IPlayerAlternates[];
};
