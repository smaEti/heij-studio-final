export default function Loading() {
    // Or a custom loading skeleton component
    return (<section className="flex justify-center items-center">
        <img
            src="/logo.png"
            alt="logo"
            className="animate-bounce"
          />
          <h1 className="lg:text-8xl text-6xl">Loading . . .</h1>
    </section>)
  }