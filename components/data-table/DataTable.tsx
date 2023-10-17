"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DataTablePagination } from "@/components/data-table/data-table-pagination/DataTablePagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options/DataTableViewOptions";
import {
  positionFilterOptions,
  statTypeFilterOptions,
} from "@/constants/playerProps.constants";
import { ColumnName } from "@/components/data-table/columns";
import { DataTableFilterSelect } from "@/components/data-table/data-table-filter-select/DataTableFilterSelect";

interface IProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>(props: IProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      globalFilter,
      sorting,
      columnVisibility,
    },
  });

  return (
    <>
      <div className={"rounded-md border"}>
        <div className={"flex items-center py-4 px-2"}>
          <Input
            placeholder={"Search by player or team"}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className={"max-w-sm"}
          />
          <div className="ml-auto flex items-center gap-x-4">
            <DataTableFilterSelect
              columnName={ColumnName.Position}
              label={"position"}
              options={positionFilterOptions}
              table={table}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className={"hidden lg:flex"}
                >
                  Filter by stat
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[160px] p-2">
                <DropdownMenuCheckboxItem
                  className={"cursor-pointer"}
                  onCheckedChange={() => {
                    table
                      .getColumn(ColumnName.StatType)
                      ?.setFilterValue(undefined);
                  }}
                >
                  All
                </DropdownMenuCheckboxItem>
                {statTypeFilterOptions.map((statType) => (
                  <DropdownMenuCheckboxItem
                    key={statType.value}
                    className="capitalize"
                    checked={
                      table.getColumn(ColumnName.StatType)?.getFilterValue() ===
                      statType.value
                    }
                    onCheckedChange={(value) => {
                      if (!value) {
                        table
                          .getColumn(ColumnName.StatType)
                          ?.setFilterValue(undefined);
                      } else {
                        table
                          .getColumn(ColumnName.StatType)
                          ?.setFilterValue(statType.value);
                      }
                    }}
                  >
                    {statType.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex">
                  Filter by status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[160px] p-2">
                <DropdownMenuCheckboxItem
                  className={"cursor-pointer"}
                  onCheckedChange={() => {
                    table
                      .getColumn(ColumnName.IsMarketSuspended)
                      ?.setFilterValue(undefined);
                  }}
                >
                  All
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={
                    table
                      .getColumn(ColumnName.IsMarketSuspended)
                      ?.getFilterValue() === "No"
                  }
                  onCheckedChange={(value) => {
                    if (!value) {
                      table
                        .getColumn(ColumnName.IsMarketSuspended)
                        ?.setFilterValue(undefined);
                    } else {
                      table
                        .getColumn(ColumnName.IsMarketSuspended)
                        ?.setFilterValue("No");
                    }
                  }}
                >
                  Not Suspended
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={
                    table
                      .getColumn(ColumnName.IsMarketSuspended)
                      ?.getFilterValue() === "Yes"
                  }
                  onCheckedChange={(value) => {
                    if (!value) {
                      table
                        .getColumn(ColumnName.IsMarketSuspended)
                        ?.setFilterValue(undefined);
                    } else {
                      table
                        .getColumn(ColumnName.IsMarketSuspended)
                        ?.setFilterValue("Yes");
                    }
                  }}
                >
                  Suspended
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DataTableViewOptions table={table} />
          </div>
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={props.columns.length}
                  className={"h-24 text-center"}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={"mt-5"}>
        <DataTablePagination table={table} />
      </div>
    </>
  );
};
