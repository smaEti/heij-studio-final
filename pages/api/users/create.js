import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions);
	if (session) {
		if (req.method === "POST") {
			try {
				const { user_name, name, password } = req.body;
				const data = {
					name: name,
					user_name: user_name,
					password: password,
				};
				const schema = vine.object({
					user_name: vine.string(),
					name: vine.string(),
					password: vine.string().minLength(8).maxLength(20),
				});
				const output = await vine.validate({
					schema,
					data,
				});
				let errorsCount = 0;
				[user_name, name].map((item) => {
					if (item == "" || item == undefined || item == null) {
						errorsCount += 1;
					}
				});
				if (errorsCount > 0) {
					return res.status(422).send({ message: "fields are required!" });
				} else {
					const result = await db.user.create({
						data,
					});
					return res.status(200).send(result);
				}
			} catch (error) {
				return res.status(500).send({ message: error.message });
			}
		}
	} else {
		return res.status(403).send({
			error:
				"You must be signed in to view the protected content on this page.",
		});
	}
}