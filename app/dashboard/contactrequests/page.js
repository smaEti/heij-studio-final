import CommentTabs from "./tabs";
import { db } from "@/prisma/client";

export default async function users() {
	const [unseenData, seenData] = await getData();
	return (
		<div className="py-16 lg:py-8 h-screen w-full bg-[#EAEAEA]">
			<CommentTabs unseenData={unseenData} seenData={seenData} />
		</div>
	);
}

async function getData() {
	const unseenData = await db.contactrequest.findMany({
		where: {
			is_seen: false,
		},
		orderBy: { id: "asc" },
	});
	const seenData = await db.contactrequest.findMany({
		where: {
			is_seen: true,
		},
		orderBy: { id: "asc" },
	});

	return [unseenData, seenData];
}
