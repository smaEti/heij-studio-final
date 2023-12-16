export default function About() {
  return (
    <section className="md:h-screen flex items-center justify-center px-5 ">
      <div className="md:container bg-background rounded-[60px] flex flex-col-reverse md:flex-row justify-between gap-10 p-3 md:p-8 my-10">
        <div className="flex flex-col basis-6/12 md:py-12 md:gap-12 gap-3 md:mb-0 mb-6 self-center">
          <h1 className="font-semibold text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-Aleo md:pl-2 text-primary">
            About Us
          </h1>
          <div className="text-primary font-Montserrat text-2xl md:text-2xl xl:text-4xl !leading-tight md:pl-2">
            <p>
              We are HEIJ Studio , a creative team of motion designers,
              animators, and storytellers. We help you bring your ideas to life
              with stunning visuals and engaging narratives.
            </p>
          </div>
        </div>
        <div className="basis-1/2 lg:px-16 flex justify-center items-center">
          <img
            src="/3dlogo.png"
            alt="logo"
            className="md:w-full md:h-full h-[30vh]"
          />
        </div>
      </div>
    </section>
  );
}
