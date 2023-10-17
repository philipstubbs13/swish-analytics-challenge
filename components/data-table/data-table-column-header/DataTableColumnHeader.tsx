import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HTMLAttributes } from "react";

interface IProps<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export const DataTableColumnHeader = <TData, TValue>(
  props: IProps<TData, TValue>
) => {
  if (!props.column.getCanSort()) {
    return <div className={cn(props.className)}>{props.title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", props.className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className={"-ml-3 h-8 data-[state=open]:bg-accent"}
          >
            <span>{props.title}</span>
            {props.column.getIsSorted() === "desc" && (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}

            {props.column.getIsSorted() === "asc" && (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            )}

            {props.column.getIsSorted() !== "desc" &&
              props.column.getIsSorted() !== "asc" && (
                <CaretSortIcon className="ml-2 h-4 w-4" />
              )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={"start"}>
          <DropdownMenuItem onClick={() => props.column.toggleSorting(false)}>
            <ArrowUpIcon
              className={"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}
            />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => props.column.toggleSorting(true)}>
            <ArrowDownIcon
              className={"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}
            />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => props.column.toggleVisibility(false)}
          >
            <EyeNoneIcon
              className={"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}
            />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
