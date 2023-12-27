import { db } from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function handler(req, res) {
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
    }
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
