export default function About() {
  return (
    <section className="md:h-screen flex items-center justify-center px-5">
      <div className="md:container bg-background  rounded-2xl flex flex-col-reverse md:flex-row justify-between gap-10 p-3 md:p-8 my-20">
        <div className="flex flex-col basis-5/12 md:py-12 md:gap-12 gap-3 md:mb-0 mb-6 self-center">
          <h1 className="font-extrabold text-4xl md:text-6xl xl:text-8xl 2xl:text-9xl font-serif md:pl-2 text-primary">
            About Us
          </h1>
          <div className="text-primary font-outfit text-2xl md:text-xl xl:text-4xl leading-none text-justify md:pl-2">
            <p>
              We are HEIJ Studio , a creative team of motion designers,
              animatiors, and storytellers. We help you bring your ideas to life
              with stunning visuals and engaging narratives.
            </p>
          </div>
        </div>
        <div className="basis-1/2 lg:px-16 xl:px-28 flex justify-center items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="md:w-full md:h-full h-[30vh]"
          />
        </div>
      </div>
    </section>
  );
}
