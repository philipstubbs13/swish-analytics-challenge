import React, { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { Row } from "@tanstack/react-table";
import { IColumn } from "../columns";
import { Checkbox } from "../../ui/checkbox";

interface IProps {
  row: Row<IColumn>;
}

export const ToggleSuspensionTableCell = (props: IProps) => {
  const market = props.row.original;
  const isMarketSuspended = market.isMarketSuspended === "Yes";
  const [isSuspended, setIsSuspended] = useState<boolean>(isMarketSuspended);
  const { toast } = useToast();

  return (
    <div>
      <Checkbox
        checked={isSuspended}
        onCheckedChange={(value: boolean) => {
          if (value) {
            setIsSuspended(true);
            toast({
              title: "Market suspended for:",
              description: `${market.playerName} ${market.statType}`,
            });
          } else {
            setIsSuspended(false);
            toast({
              title: "Suspension released for:",
              description: `${market.playerName} ${market.statType}`,
            });
          }
        }}
        aria-label="Select row"
      />
    </div>
  );
};
