"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function DashboardDesktopNav({ session }) {
	return (
		<div className="hidden lg:flex text-2xl flex-col gap-10 h-full bg-[#2C3E50] lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-[#ECF0F1] items-center justify-center">
			<div className="text-center">
				<a href={"/"}>
					<img
						src="/logo.png"
						alt="logo"
						className="mx-auto w-16 sm:w-[4.5rem] pt-3"
					/>
				</a>
			</div>
			<div className="lg:text-2xl 2xl:text-3xl font-bold mb-6">
				<h1>
					Welcome <span className="text-secondry">{session.user.name}</span>
				</h1>
			</div>
			<Link href="/dashboard" className="lg:text-lg xl:text-xl 2xl:text-2xl">
				Manage Projects
			</Link>
			<Link href="/dashboard/contactrequests" className="lg:text-lg xl:text-xl 2xl:text-2xl">
				Contact Requests
			</Link>
			<div>
				<Button onClick={() => signOut()} variant="destructive" size="lg">
					Signout
				</Button>
			</div>
		</div>
	);
}
