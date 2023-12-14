export default function About() {
  return (
    <section className="h-screen flex items-center justify-center px-10">
      <div className="md:container bg-[hsl(21,100%,50%,15%)] md:h-[70vh] rounded-2xl border-2 border-[hsl(21,100%,50%,30%)] flex flex-col-reverse md:flex-row gap-10 p-3 md:p-8">
        <div className="flex flex-col basis-1/2 xl:py-12 md:gap-12 gap-3 md:mb-0 mb-6">
          <h1 className="font-extrabold text-2xl md:text-4xl font-steiner md:pl-2">
            About Us
          </h1>
          <div className="text-primary font-outfit text-2xl md:text-[45px] leading-none text-justify md:pl-2">
            <p>
              We are <span className="font-steiner ">HEIJ Studio</span> , a
              creative team of motion designers, animatiors, and storytellers.
            </p>
            <p>
              We help you bring your ideas to life with stunning visuals and
              engaging narratives.
            </p>
          </div>
        </div>
        <div className="basis-1/2 md:py-8 lg:px-16 xl:px-28 flex justify-center items-center">
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
