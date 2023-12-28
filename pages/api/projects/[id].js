import { db } from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
	const { id } = req.query;
	const session = await getServerSession(req, res, authOptions);
	if (session) {
		if (req.method === "DELETE") {
			try {
				let Id = req.query.id;
				const response = await db.projects.delete({
					where: { id: parseInt(Id) },
				});
				res.status(200).send({ message: "project deleted successfully!" });
			} catch (error) {
				res.status(500).json({
					message: error,
				});
			}
		} else if (req.method === "GET") {
			try {
				const foundProject = await db.projects.findUnique({
					where: {
						id: parseInt(id),
					},
				});
				res.status(200).send(foundProject);
			} catch (error) {
				res.send({ message: error.message });
			}
		} else if (req.method === "PUT") {
			try {
				const schema = vine.object({
					title: vine.string(),
					description: vine.string(),
					preview: vine.string(),
					video: vine.string(),
				});
				const { title, description, preview, video } = req.body;
				const data = {
					title: title,
					description: description,
					preview: preview,
					video: video,
				};
				await vine.validate({
					schema,
					data,
				});
				if (
					data.title == "" ||
					data.title == undefined ||
					data.title == null ||
					data.description == "" ||
					data.description == null ||
					data.description == undefined ||
					data.preview == "" ||
					data.preview == null ||
					data.preview == undefined ||
					data.video == "" ||
					data.video == null ||
					data.video == undefined
				) {
					res.status(422).send({ message: "fields are requierd!" });
				} else {
					const result = await db.projects.update({
						where: {
							id: parseInt(id),
						},
						data: data,
					});
					res.status(200).send(result);
				}
			} catch (error) {
				return res.status(500).json({ message: error.message });
			}
		}
	} else {
		res.send({
			error:
				"You must be signed in to view the protected content on this page.",
		});
	}
}
