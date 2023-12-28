import { db } from "@/prisma/client";
import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function Projects() {
  const data = await db.projects.findMany();
  return (
    <section id={"projects"}>
      <div className="flex justify-center mb-20">
        <h1 className="font-Aleo text-background font-semibold text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl border-b-4 p-3 border-secondry w-fit">
          Projects
        </h1>
      </div>
      <div className="md:container grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {data.map((item) => (
          <Link key={item.id} href={"/" + item.id}>
            <div className="bg-secondry rounded-xl overflow-hidden relative z-0 group">
              <div className="absolute w-full h-full bg-slate-950/30 z-30 hidden group-hover:block md:p-8 p-3" ><h2 className="font-Aleo text-background border-b-4 border-secondry w-fit md:text-3xl text-lg">{item.title}</h2></div>
              <img loop muted src={item.preview} className="w-full h-full" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
