"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header/DataTableColumnHeader";
import { Position } from "@/constants/playerProps.constants";

export interface IColumn {
  id: number;
  isMarketSuspended: string;
  line: number;
  playerName: string;
  position: Position;
  statType: string;
  team: string;
}

export const columns: ColumnDef<IColumn>[] = [
  {
    accessorKey: "playerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Player Name"} />
    ),
  },
  {
    accessorKey: "team",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Team"} />
    ),
  },
  {
    accessorKey: "position",
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Position"} />
    ),
  },
  {
    accessorKey: "statType",
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Stat Type"} />
    ),
  },
  {
    accessorKey: "line",
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Line"} />
    ),
  },
  {
    accessorKey: "isMarketSuspended",
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Is Market Suspended"} />
    ),
  },
];
