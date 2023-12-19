import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id={'contact'} className="md:h-screen flex justify-center items-center px-5 my-20">
      <div className="bg-background rounded-[60px] flex flex-col md:flex-row md:justify-around md:container p-8 gap-5">
        <div className="basis-3/6 flex flex-col items-start mb-8">
          <img
            src="/3dlogo.png"
            alt="logo"
            className="h-3/4 w-1/2 self-center"
          />
          <div className="basis-1/2 flex flex-col gap-5 ">
            <h1 className="font-semibold text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-Aleo md:pl-2 text-primary">
              Contact Us
            </h1>
            <p className="text-primary font-Montserrat text-2xl md:text-4xl ">
              Contact us today and let's make something amazing together.
            </p>
            <div className="text-primary font-Montserrat text-lg md:text-xl">
              <p>Phone : +98-9355525896</p>
              <p>Email : Heijstudio@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="basis-2/6 flex flex-col gap-3 justify-center text-primary font-Montserrat">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
