"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import Upload from "@/utils/S3/uploadtobucket";
import GetFileUrl from "@/utils/S3/getfileurl";
import { useRouter } from 'next/navigation'
export default function Create() {
	const [data, setData] = useState({
		title: "",
		description: "",
		preview: "",
		video: "",
	});
	const router = useRouter()
	return (
		<div className="sm:w-full lg:w-5/12 container py-16 ">
			<Card>
				<CardHeader>
					<CardTitle className="font-sans">Project Management</CardTitle>
					<CardDescription className="font-sans">
						All Fields Are Required. While Uploading Files, Please Wait Till You
						Recieve Confirmation.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<label htmlFor="title" className="font-sans">
						Project Title:
					</label>
					<Input
						autoComplete="off"
						type="text"
						name="title"
						id="title"
						defaultValue={data.title}
						onChange={(e) =>
							setData({
								...data,
								title: e.target.value,
							})
						}
						className="font-Aleo"
					/>
					<label htmlFor="description" className="font-sans">
						Project Description:
					</label>
					<Input
						autoComplete="off"
						type="text"
						name="description"
						id="description"
						defaultValue={data.description}
						onChange={(e) =>
							setData({
								...data,
								description: e.target.value,
							})
						}
						className="font-Aleo"
					/>
					<div>
						<Label htmlFor="preview">Preview:</Label>
						<div className="grid w-full justify-center items-center gap-1.5">
							<Input
								id="preview"
								type="file"
								onChange={(e) => {
									Upload(e.target.files?.[0]);
									const fileUrl = GetFileUrl(e.target.files?.[0].name);
									setData({
										...data,
										preview: fileUrl,
									});
								}}
							/>
						</div>
					</div>
					<div>
						<Label htmlFor="Video">Video:</Label>
						<div className="grid w-full justify-center items-center gap-1.5">
							<Input
								id="Video"
								type="file"
								onChange={(e) => {
									Upload(e.target.files?.[0]);
									const fileUrl = GetFileUrl(e.target.files?.[0].name);
									setData({
										...data,
										video: fileUrl,
									});
								}}
							/>
						</div>
					</div>
					<Button
						onClick={async () => {
							let result = await createProject(data);
							if (result.message == "fields are requierd!") {
								alert("Please Fill In All Of The Fields!");
							} else if (result.message == "Success!") {
								router.push('/dashboard')
							}
						}}
					>
						Add Project
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
async function createProject(data) {
	const response = await fetch(`/api/projects/create`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const backeddata = await response.json();
	return backeddata;
}
