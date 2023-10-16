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
import { ChangeEvent, useCallback, useState } from "react";
import { DataTablePagination } from "@/components/data-table/data-table-pagination/DataTablePagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options/DataTableViewOptions";
import {
  MarketSuspensionStatus,
  marketSuspensionStatusFilterOptions,
  Position,
  positionFilterOptions,
  positionLabels,
  statTypeFilterOptions,
} from "@/constants/playerProps.constants";

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex">
                  Filter by position
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[160px] p-2">
                <DropdownMenuLabel>Select a position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {positionFilterOptions.map((position) => (
                  <DropdownMenuCheckboxItem
                    key={position.value}
                    className="capitalize"
                    checked={
                      table.getColumn("position")?.getFilterValue() ===
                      position.value
                    }
                    onCheckedChange={(value) => {
                      table
                        .getColumn("position")
                        ?.setFilterValue(position.value);
                    }}
                  >
                    {position.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex">
                  Filter by stat type
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[160px] p-2">
                <DropdownMenuLabel>Select a stat type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {statTypeFilterOptions.map((statType) => (
                  <DropdownMenuCheckboxItem
                    key={statType.value}
                    className="capitalize"
                    checked={
                      table.getColumn("statType")?.getFilterValue() ===
                      statType.value
                    }
                    onCheckedChange={(value) => {
                      table
                        .getColumn("statType")
                        ?.setFilterValue(statType.value);
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
                <DropdownMenuLabel>Select a status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={
                    table.getColumn("isMarketSuspended")?.getFilterValue() ===
                    "No"
                  }
                  onCheckedChange={(value) => {
                    table.getColumn("isMarketSuspended")?.setFilterValue("No");
                  }}
                >
                  Not Suspended
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={
                    table.getColumn("isMarketSuspended")?.getFilterValue() ===
                    "Yes"
                  }
                  onCheckedChange={(value) => {
                    table.getColumn("isMarketSuspended")?.setFilterValue("Yes");
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
