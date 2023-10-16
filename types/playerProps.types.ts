import { Position, StatType } from "@/constants/playerProps.constants";

export interface IPlayerProps {
  line: number;
  marketSuspended: 0 | 1;
  playerId: number;
  playerName: string;
  position: Position;
  teamAbbr: string;
  teamId: number;
  teamNickname: string;
  statType: StatType;
  statTypeId: number;
}

export type IPlayerPropsResponse = {
  data: IPlayerProps[];
};
