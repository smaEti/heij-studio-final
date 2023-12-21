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
import { Textarea } from "@/components/ui/textarea";
import UploadthingUploadButton from "@/components/UploadButton";
export default function create() {
	const [data, setData] = useState({
		title: "",
		description: "",
		preview: "",
		video: "",
	});
	return (
		<div className="sm:w-full lg:w-5/12 container py-16 ">
			<Card>
				<CardHeader>
					<CardTitle className="font-sans">Project Management</CardTitle>
					<CardDescription className="font-sans">
						All Fields Are Required
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
					<label htmlFor="preview">Preview:</label>
					<UploadthingUploadButton
						id="preview"
						name="preview"
						onUploadComplete={(res) => {
							setData({
								...data,
								preview: res.url,
							});
						}}
					/>
					<label htmlFor="video">Video URL:</label>
					<Textarea
						placeholder="Paste Your Video URL Here."
						name="video"
						id="video"
						onChange={(e) => {
							setData({
								...data,
								video: e.target.value,
							});
						}}
					/>
					<Button
						onClick={() => {
							createProject(data);
							console.log(data);
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
