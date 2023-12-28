"use client";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function DashboardMobileNav({ session }) {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden absolute mt-4 mr-3 w-9 h-9 top-2 left-4">
				<CiMenuFries className="rotate-180 text-2xl sm:text-3xl md:text-4xl m-auto text-black" />
			</SheetTrigger>
			<SheetContent className="rounded-tr-2xl rounded-br-2xl border-r-2 border-gray-500/50">
				<div className="text-2xl flex flex-col gap-10 h-full items-center justify-center text-center">
					<div className="text-center">
						<a href={"/"}>
							<img
								src="/logo.png"
								alt="logo"
								className="mx-auto w-16 sm:w-[4.5rem] pt-3"
							/>
						</a>
					</div>
					<div className="text-3xl font-bold mb-6">
						<h1>
							Welcome <span className="text-secondry">{session.user.name}</span>
						</h1>
					</div>
					<Link href="/dashboard">Manage Projects</Link>
					<Link href="/dashboard/contactrequests">Contact Requests</Link>
					<div>
						<Button onClick={() => signOut()} variant="destructive" size="lg">
							Signout
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
