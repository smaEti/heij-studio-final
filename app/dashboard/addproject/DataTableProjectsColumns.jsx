"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "subject",
		header: "Subject",
	},
	{
		id: "seen",
		cell: ({ row }) => {
			const projects = row.original;
			return <Button onClick={() => {See}}>Seen</Button>;
		},
		header: "Seen",
	},
];

async function deleteprojects(id) {
	const response = await fetch(`/api/contactrequest/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	console.log(data);
	window.location.reload();
}
