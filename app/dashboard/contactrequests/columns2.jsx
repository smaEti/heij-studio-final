"use client";

import { Button } from "@/components/ui/button";

export const columns2 = [
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
		accessorKey: "message",
		header: "Message",
	},
	{
		accessorKey: "created_at",
		header: "Date",
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const contactrequest = row.original;

			return (
				<Button
					variant="destructive"
					onClick={() => deletecontactrequest(contactrequest.id)}
				>
					Delete
				</Button>
			);
		},
	},
];

async function deletecontactrequest(id) {
	const response = await fetch(`/api/contactrequest/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	window.location.reload();
}
