export enum StatType {
  Assists = "assists",
  Points = "points",
  Rebounds = "rebounds",
  Steals = "steals",
}

export const statTypeLabels: Record<StatType, string> = {
  [StatType.Assists]: "Assists",
  [StatType.Points]: "Points",
  [StatType.Rebounds]: "Rebounds",
  [StatType.Steals]: "Steals",
};

export const statTypeFilterOptions = [
  { label: statTypeLabels[StatType.Assists], value: StatType.Assists },
  {
    label: statTypeLabels[StatType.Points],
    value: StatType.Points,
  },
  {
    label: statTypeLabels[StatType.Rebounds],
    value: StatType.Rebounds,
  },
  {
    label: statTypeLabels[StatType.Steals],
    value: StatType.Steals,
  },
];

export enum Position {
  PointGuard = "PG",
  ShootingGuard = "SG",
  SmallForward = "SF",
  PowerForward = "PF",
  Center = "C",
}

export const positionLabels: Record<Position, string> = {
  [Position.PointGuard]: "Point Guard",
  [Position.ShootingGuard]: "Shooting Guard",
  [Position.SmallForward]: "Small Forward",
  [Position.PowerForward]: "Power Forward",
  [Position.Center]: "Center",
};

export const positionFilterOptions = [
  { label: positionLabels[Position.PointGuard], value: Position.PointGuard },
  {
    label: positionLabels[Position.ShootingGuard],
    value: Position.ShootingGuard,
  },
  {
    label: positionLabels[Position.SmallForward],
    value: Position.SmallForward,
  },
  {
    label: positionLabels[Position.PowerForward],
    value: Position.PowerForward,
  },
  { label: positionLabels[Position.Center], value: Position.Center },
];

export enum MarketSuspensionStatus {
  NotSuspended = 0,
  Suspended = 1,
}

export const marketSuspensionStatusLabels: Record<
  MarketSuspensionStatus,
  string
> = {
  [MarketSuspensionStatus.NotSuspended]: "Not Suspended",
  [MarketSuspensionStatus.Suspended]: "Suspended",
};

export const marketSuspensionStatusFilterOptions = [
  {
    label: marketSuspensionStatusLabels[MarketSuspensionStatus.NotSuspended],
    value: MarketSuspensionStatus.NotSuspended,
  },
  {
    label: marketSuspensionStatusLabels[MarketSuspensionStatus.Suspended],
    value: MarketSuspensionStatus.Suspended,
  },
];
