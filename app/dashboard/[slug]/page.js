import {db} from "@/prisma/client"
import Edit from "./data"

export default async function Data({params}) {
    const data = await db.projects.findUnique({
        where: {
            id: parseInt(params.slug)
        }
    })
    return (
        <Edit projectData={data}/>
    )
}