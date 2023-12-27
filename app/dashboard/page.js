import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { db } from "@/prisma/client";
import DashboardDesktopNav from "@/components/DashboardDesktopNav";
import DashboardMobileNav from "@/components/DashboardMobileNav";
import { DataTable } from "./DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	const data = await db.projects.findMany({ orderBy: { id: "asc" } });
	console.log(data);
	return (
		<div className="h-screen w-full lg:flex lg:gap-20 bg-[#EAEAEA]">
			<DashboardDesktopNav session={session} />
			<DashboardMobileNav session={session} />
			<div className="w-full p-1 lg:w-2/3 flex flex-col mx-auto pt-20">
				<Link href="/dashboard/addproject" className="lg:self-start self-center">
					<Button className="lg:self-start self-center" variant="destructive">
						Add Project
					</Button>
				</Link>
				<DataTable data={data} />
			</div>
		</div>
	);
}
