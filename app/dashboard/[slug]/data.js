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
import { useRouter } from "next/navigation";
export default function Edit({ projectData }) {
	const [data, setData] = useState({
		title: projectData.title,
		description: projectData.description,
		preview: projectData.preview,
		video: projectData.video,
	});
	const router = useRouter();
	return (
		<div className="sm:w-full lg:w-5/12 container flex items-center justify-center py-16 ">
			<Card>
				<CardHeader>
					<CardTitle className="font-sans">Project Management</CardTitle>
					<CardDescription className="font-sans">
						Any Unchanged Field Will Not Be Edited And Will Remain The Same{" "}
						<br />
						<span className="text-red-500 text-xl font-bold font-Aleo">
							While Uploading Files, Please Wait Till You Recieve Confirmation.
						</span>
						<br />
						<span className="text-red-500 text-xl font-bold font-Aleo">
							File Name SHOULD NOT Include Spaces.
						</span>
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
						onClick={() => {
							let res = editProject(data, projectData.id);
							res.then((e) => {
								if (e.message) {
									alert(e.message);
								} else {
									router.push("/dashboard");
								}
							});
						}}
					>
						Add Project
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
async function editProject(data, slug) {
	const response = await fetch(`/api/projects/${slug}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const backeddata = await response.json();
	return backeddata;
}
