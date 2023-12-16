import { db } from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      try {
        const schema = vine.object({
          title: vine.string(),
          description: vine.string(),
          gif: vine.string(),
          link: vine.string(),
        });
        const { title, description, gif, link } = req.body;
        const data = {
          title: title,
          description: description,
          gif: gif,
          link: link,
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
          data.description == undefined ||
          data.description == null ||
          data.gif == "" ||
          data.gif == undefined ||
          data.gif == null ||
          data.link == "" ||
          data.link == undefined ||
          data.link == null
        ) {
          res.status(422).send({ message: "fields are requierd!" });
        } else {
          const result = await db.user.create({
            data,
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