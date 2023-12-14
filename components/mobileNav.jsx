import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
export default function MobileNav() {
	return (
		<>
			<Sheet>
				<SheetTrigger  className="md:hidden absolute mt-4 mr-3 w-9 h-9 top-2 left-4">
					<CiMenuFries className="rotate-180 text-2xl sm:text-3xl md:text-4xl m-auto text-[#fff1d6]" />
				</SheetTrigger>
				<SheetContent className="bg-[#fff1d6]/50 w-[250px] overflow-scroll rounded-tr-2xl rounded-br-2xl border-r-2 border-gray-300/25">
					<div className="text-center">
						<a href={"/"}>
							<img src="/logo.png" alt="logo" className="mx-auto w-16 sm:w-[4.5rem] pt-3" />
						</a>
					</div>
                <div className="flex flex-col gap-7 mt-9">
                    <Link href="/" className="font-steiner font-semibold text-xl">Projects</Link>
                    <Link href="/" className="font-steiner font-semibold text-xl">About Us</Link>
                    <Link href="/" className="font-steiner font-semibold text-xl">Contact Us</Link>
                </div>
				</SheetContent>
			</Sheet>
		</>
	);
}
