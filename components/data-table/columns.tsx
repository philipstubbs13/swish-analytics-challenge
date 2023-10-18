"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header/DataTableColumnHeader";
import { Position, StatType } from "../../constants/playerProps.constants";
import React, { ReactNode } from "react";
import { ToggleSuspensionTableCell } from "./toggle-suspension-table-cell/ToggleSuspensionTableCell";

export interface IColumn {
  actions?: ReactNode;
  high: number;
  isMarketSuspended: string;
  line: number;
  low: number;
  playerName: string;
  position: Position;
  statType: StatType;
  team: string;
}

export enum ColumnName {
  High = "high",
  IsMarketSuspended = "isMarketSuspended",
  Line = "line",
  Low = "low",
  PlayerName = "playerName",
  Position = "position",
  StatType = "statType",
  Team = "team",
}

export const columns: ColumnDef<IColumn>[] = [
  {
    accessorKey: ColumnName.PlayerName,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Player Name"} />
    ),
  },
  {
    accessorKey: ColumnName.Team,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Team"} />
    ),
  },
  {
    accessorKey: ColumnName.Position,
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Position"} />
    ),
  },
  {
    accessorKey: ColumnName.StatType,
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Stat Type"} />
    ),
  },
  {
    accessorKey: ColumnName.Line,
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Line"} />
    ),
  },
  {
    accessorKey: ColumnName.Low,
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Low"} />
    ),
  },
  {
    accessorKey: ColumnName.High,
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"High"} />
    ),
  },
  {
    accessorKey: ColumnName.IsMarketSuspended,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Is Market Suspended"} />
    ),
    cell: ({ row }) => <ToggleSuspensionTableCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
