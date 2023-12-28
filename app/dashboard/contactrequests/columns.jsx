"use client";

import { Button } from "@/components/ui/button";

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
		accessorKey: "message",
		header: "Message",
	},
	{
		accessorKey: "created_at",
		header: "Date",
	},
	{
		header: "Operations",
		id: "is_seen",
		cell: ({ row }) => {
			const contactrequest = row.original;

			return (
				<Button onClick={() => updatecontactrequest(contactrequest.id)} className="w-24">
					Seen
				</Button>
			);
		},
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const contactrequest = row.original;

			return (
				<Button variant="destructive" onClick={() => deletecontactrequest(contactrequest.id)}>
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

async function updatecontactrequest(id) {
	const response = await fetch(`/api/contactrequest/${id}`, {
		method: "PUT",
	});
	const data = await response.json();
	window.location.reload();
}
