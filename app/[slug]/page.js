import MobileProjectNav from "@/components/MobileProjectNav";
import DesktopProjectNav from "@/components/DesktopProjectNav";
import { db } from "@/prisma/client";
export default async function Project({ params }) {
	const data = await db.projects.findFirst({
		where: {
			id: parseInt(params.slug),
		},
	});
	console.log(params);

	return (
		<section>
			<div>
				<DesktopProjectNav />
				<MobileProjectNav />
			</div>
			<div className="flex md:flex-row flex-col justify-center gap-2 md:gap-5 md:container h-[60vh] mt-12 md:mt-0 p-3">
				<div className="aspect-video bg-secondry rounded-3xl md:rounded-l-3xl md:rounded-r-md w-full md:w-3/4"></div>
				<div className="aspect-video bg-background rounded-3xl md:rounded-r-3xl md:rounded-l-md w-full md:w-1/4"></div>
			</div>
		</section>
	);
}
