"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		id: "edit",
		cell: ({ row }) => {
			const projects = row.original;
			return (
				<Link href={`/dashboard/projects/edit/${projects.id}`}>
					<Button>Edit</Button>
				</Link>
			);
		},
		header: "Edit",
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const projects = row.original;
			return (
				<Button onClick={() => deleteprojects(projects.id)}>Delete</Button>
			);
		},
		header: "Delete",
	},
];

async function deleteprojects(id) {
	const response = await fetch(`/api/projects/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	window.location.reload();
}