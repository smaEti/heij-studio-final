import MobileProjectNav from "@/components/MobileProjectNav";
import DesktopProjectNav from "@/components/DesktopProjectNav";
import { db } from "@/prisma/client";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function Project({ params }) {
  try {
    const data = await db.projects.findFirst({
      where: {
        id: parseInt(params.slug),
      },
    });
    if (data == null) {
      return notFound();
    }
    return (
      <section>
        <div>
          <DesktopProjectNav />
          <MobileProjectNav />
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-2 md:gap-5 md:container h-[70vh] p-2 mt-12 md:mt-0">
          <video
            className="aspect-video bg-secondry rounded-3xl md:rounded-l-3xl md:rounded-r-md w-full md:w-3/4 overflow-hidden"
            src={data.video}
            loop
            muted
            controls
            controlsList="nodownload"
            onContextMenu="return false;"
          ></video>
          <div className="aspect-video bg-background rounded-3xl md:rounded-r-3xl md:rounded-l-md w-full md:w-1/4 px-4 py-8 text-primary font-Montserrat text-2xl text-justify">
            <h1>
              <b>Title :</b> {data.title}
            </h1>
            <p>
              <b>description :</b> {data.description}
            </p>
          </div>
        </div>
      </section>
    );
  } catch (e) {
    return notFound();
  }
}
