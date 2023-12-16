import Link from "next/link";
export default function DesktopProjectNav() {
  return (
    <div className="hidden md:block top-0 w-full px-20 py-20">
      <div className="flex justify-between items-start">
        <div>
          <img
            src="/logo.png"
            alt="logo"
            className="md:w-16 lg:w-16 xl:w-20 2xl:w-20"
          />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <Link
            href={'/'}
            className="text-white hover:text-secondry w-24 lg:w-auto lg:h-fit md:text-xs font-semibold font-Aleo xl:text-base 2xl:text-xl underline underline-offset-8"
          >
            Back to main page
          </Link>
        </div>
      </div>
    </div>
  );
}
