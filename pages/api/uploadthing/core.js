import { createUploadthing } from "uploadthing/next-legacy";
const f = createUploadthing();
export const ourFileRouter = {
	projectUploader: f({
		"image/gif": { maxFileSize: "16MB" },
		video: { maxFileSize: "64MB" },
	}).onUploadComplete(async ({ metadata, file }) => {
		console.log("Upload complete for userId:", metadata.userId);
		console.log("file url", file.url);
		return { uploadedBy: metadata.userId };
	}),
};
