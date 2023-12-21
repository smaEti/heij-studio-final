"use client";
import { ourFileRouter } from "@/pages/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
export default function UploadthingUploadButton({onUploadComplete}) {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<UploadButton
				endpoint="projectUploader"
				onClientUploadComplete={(res) => {
					onUploadComplete(res[0]);
					alert("Upload Completed");
				}}
				onUploadError={(error) => {
					alert(`ERROR! Please Try Again A Few Minutes Later! Error Message: ${error.message}`);
				}}
			/>
		</main>
	);
}
