"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
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
import { Button } from "@/components/ui/button";
import {columns} from "./DataTableProjectsColumns";

export function DataTable({ data }) {
	const table = useReactTable({
		data,
		columns,
		getPaginationRowModel: getPaginationRowModel(),
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="w-full mt-10">
			<div className="rounded-md w-full border border-[#333333] font-Aleo">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className="border-[#333333]">
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id} className="text-center text-[#333333]">
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
										<TableCell key={cell.id} className="text-center text-[#333333]">
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
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No Data To Show
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
