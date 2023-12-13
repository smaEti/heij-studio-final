import Link from "next/link";
export default function DesktopNav() {
	return (
		<div className="hidden md:block md:absolute top-0 w-full px-20 py-5">
			<div className="flex justify-between">
				<div>
					<img
						src="/logo.png"
						alt="logo"
						className="md:w-20 lg:w-20 xl:w-24 2xl:w-28"
					/>
				</div>
				<div className="flex gap-5">
					<Link
						href="#"
						className="bg-[#ff5900]/75 text-white flex items-center justify-center my-2 h-12 w-24 lg:w-auto lg:h-fit md:text-xs lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-12 2xl:py-5 lg:my-3 xl:my-4 2xl:my-5 rounded-2xl font-semibold font-outfit xl:text-base 2xl:text-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300"
					>
						Projects
					</Link>
					<Link
						href="#"
						className="bg-[#ff5900]/75 text-white flex items-center justify-center my-2 h-12 w-24 lg:w-auto lg:h-fit md:text-xs lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-12 2xl:py-5 lg:my-3 xl:my-4 2xl:my-5 rounded-2xl font-semibold font-outfit xl:text-base 2xl:text-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300"
					>
						About Us
					</Link>
					<Link
						href="#"
						className="bg-[#ff5900]/75 text-white flex items-center justify-center my-2 h-12 w-24 lg:w-auto lg:h-fit md:text-xs lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-12 2xl:py-5 lg:my-3 xl:my-4 2xl:my-5 rounded-2xl font-semibold font-outfit xl:text-base 2xl:text-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300"
					>
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
}
