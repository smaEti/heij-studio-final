export default function Contact() {
  return (
    <section className="md:h-screen flex justify-center items-center px-5 my-20">
      <div className="bg-background md:h-[70vh] rounded-2xl flex flex-col md:flex-row md:justify-around md:container p-8 gap-5">
        <div className="basis-3/6 flex flex-col items-start">
          <img src="/3dlogo.png" alt="logo" className="h-3/4 w-1/2 self-center" />
          <div className="basis-1/2 flex flex-col gap-5 ">
            {/* <h1 className="font-extrabold text-4xl md:text-9xl font-serif text-primary">Contact Us</h1> */}
            <p className="text-primary font-Montserrat text-2xl md:text-4xl xl:text-5xl">
              Contact us today and let's make something amazing together.
            </p>
            {/* <p>asdasd</p>
                <p>Email : Heijstudio@gmail.com</p> */}
          </div>
        </div>
        <div className="basis-2/6 flex flex-col gap-3 justify-center text-primary">
          <h2>Email</h2>
          <p>Heijstudio@gmail.com</p>
          <hr className="bg-primary h-1" />
          <h2>Telegram</h2>
          <p>+98-9355525896</p>
          <hr className="bg-primary h-1" />
          <h2>Behance</h2>
          <p>some address</p>
          <hr className="bg-primary h-1" />
          <h2>Linkedin</h2>
          <p>some address</p>
          <hr className="bg-primary h-1" />
          <h2>Instagram</h2>
          <p>some address</p>
        </div>
      </div>
    </section>
  );
}
