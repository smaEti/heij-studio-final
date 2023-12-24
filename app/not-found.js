import Link from "next/link";
export default function NotFound() {
  return (
    <section className="flex flex-col  items-center justify-center gap-8  text-background ">
      <img src="/3dlogo.png" alt="logo" className="xl:w-1/3 lg:w-1/2 w-full h-[50vh]" />
      <h1 className="lg:text-8xl md:text-7xl text-5xl font-Aleo font-extrabold basis-3/5 ">Oooppss!!</h1>
      <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-Montserrat text-center basis-1/5">
        The page you are looking for does not exist or another error has
        occurred.
      </p>
      <Link
        href="/"
        className="text-background hover:text-secondry  lg:w-auto lg:h-fit md:text-lg font-semibold font-Aleo lg:text-xl xl:text-base 2xl:text-xl underline underline-offset-8"
      >
        Go back to main page
      </Link>
    </section>
  );
}
