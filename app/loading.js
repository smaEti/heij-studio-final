export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="lg:w-1/6 md:w-1/5 w-1/2 h-full flex flex-col justify-center items-center">
      <img src="/logo.png" alt="logo" className="animate-bounce w-1/2" />
      <h1 className="lg:text-6xl text-5xl text-background font-Aleo">Loading...</h1>
      </div>
    </section>
  );
}
