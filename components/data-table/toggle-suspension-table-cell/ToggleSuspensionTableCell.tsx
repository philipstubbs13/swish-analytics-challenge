import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { MoreHorizontal } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { IColumn } from "../columns";

interface IProps {
  row: Row<IColumn>;
}

export const ToggleSuspensionTableCell = (props: IProps) => {
  const market = props.row.original;
  const isMarketSuspended = market.isMarketSuspended === "Yes";
  const { toast } = useToast();

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
              toast({
                title: "Suspension released for:",
                description: `${market.playerName} ${market.statType}`,
              });
            }}
          >
            Release suspension
          </DropdownMenuItem>
        )}
        {!isMarketSuspended && (
          <DropdownMenuItem
            onClick={() => {
              toast({
                title: "Market suspended for:",
                description: `${market.playerName} ${market.statType}`,
              });
            }}
          >
            Suspend
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
