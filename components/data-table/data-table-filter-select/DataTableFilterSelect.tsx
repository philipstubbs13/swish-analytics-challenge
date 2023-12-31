import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "../../ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { IValueLabelOption } from "../../data-table/data-table-filter-select/DataTableFilterSelect.types";
import { ColumnName } from "../../data-table/columns";

interface IProps<TData = any> {
  columnName: ColumnName;
  label: string;
  options: IValueLabelOption[];
  table: Table<TData>;
}

export const DataTableFilterSelect = (props: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"sm"} className={"hidden lg:flex"}>
          Filter by {props.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[160px] p-2">
        <DropdownMenuCheckboxItem
          className={"cursor-pointer"}
          onCheckedChange={(value) => {
            props.table.getColumn(props.columnName)?.setFilterValue(undefined);
          }}
        >
          All
        </DropdownMenuCheckboxItem>
        {props.options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            className={"capitalize cursor-pointer"}
            checked={
              props.table.getColumn(props.columnName)?.getFilterValue() ===
              option.value
            }
            onCheckedChange={(value) => {
              if (!value) {
                props.table
                  .getColumn(props.columnName)
                  ?.setFilterValue(undefined);
              } else {
                props.table
                  .getColumn(ColumnName.Position)
                  ?.setFilterValue(option.value);
              }
            }}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
