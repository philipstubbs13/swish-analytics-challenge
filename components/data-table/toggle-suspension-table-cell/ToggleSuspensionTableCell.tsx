import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { Checkbox } from "../../ui/checkbox";
import { StatType } from "../../../constants/playerProps.constants";

interface IProps {
  isMarketSuspended: boolean;
  playerName: string;
  statType: StatType;
}

export const ToggleSuspensionTableCell = (props: IProps) => {
  const [isSuspended, setIsSuspended] = useState<boolean>(
    props.isMarketSuspended
  );
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
              description: `${props.playerName} ${props.statType}`,
            });
          } else {
            setIsSuspended(false);
            toast({
              title: "Suspension released for:",
              description: `${props.playerName} ${props.statType}`,
            });
          }
        }}
        aria-label="Select row"
      />
    </div>
  );
};
