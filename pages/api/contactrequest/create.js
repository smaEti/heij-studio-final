import { db } from "@/prisma/client";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;
      const schema = vine.object({
        name: vine.string(),
        email: vine.string().email(),
        subject: vine.string(),
        message: vine.string(),
      });
      const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const array = [email, name, subject, message];
      let errorsCount = 0;
      array.map((item) => {
        if (item == "" || item == undefined || item == null) {
          errorsCount += 1;
        }
      });
      const output = await vine.validate({
        schema,
        data,
      });
      if (errorsCount > 0) {
        res.status(422).send({ message: "fields are required!" });
        errorsCount = 0;
      } else {
        const result = await db.contactrequest.create({
          data: {
            name: name,
            email: email,
            subject: subject,
            message: message,
            is_seen: false,
          },
        });
        res.status(200).send(result);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
