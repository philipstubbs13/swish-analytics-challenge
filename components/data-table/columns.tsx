"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header/DataTableColumnHeader";
import { Position, StatType } from "@/constants/playerProps.constants";
import { MoreHorizontal } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useToast } from "@/components/ui/use-toast";
import { updateMarketStatus } from "@/lib/api";

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
    enableGlobalFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Is Market Suspended"} />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const market = row.original;
      const isMarketSuspended = market.isMarketSuspended === "Yes";
      // const { toast } = useToast();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isMarketSuspended && (
              <DropdownMenuItem
                onClick={() => {
                  updateMarketStatus({
                    marketSuspended: 0,
                    playerName: market.playerName,
                    statType: market.statType,
                  });
                  // toast({
                  //   title: "Suspension released for:",
                  //   description: `${market.playerName} ${market.statType}`,
                  // });
                }}
              >
                Release suspension
              </DropdownMenuItem>
            )}
            {!isMarketSuspended && (
              <DropdownMenuItem
                onClick={() => {
                  updateMarketStatus({
                    marketSuspended: 1,
                    statType: market.statType,
                    playerName: market.playerName,
                  });
                  // toast({
                  //   title: "Market suspended for:",
                  //   description: `${market.playerName} ${market.statType}`,
                  // });
                }}
              >
                Suspend
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
