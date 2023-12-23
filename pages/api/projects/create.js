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
          data.description == undefined ||
          data.description == null ||
          data.preview == "" ||
          data.preview == undefined ||
          data.preview == null ||
          data.video == "" ||
          data.video == undefined ||
          data.video == null
        ) {
          res.status(422).send({ message: "fields are requierd!" });
        } else {
          const result = await db.projects.create({
            data,
          });
          res.status(200).json({message: "Success!"});
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