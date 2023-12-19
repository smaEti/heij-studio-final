import MobileProjectNav from "@/components/MobileProjectNav";
import DesktopProjectNav from "@/components/DesktopProjectNav";

export default function project() {
  return (
    <section>
      <div>
        <DesktopProjectNav />
        <MobileProjectNav />
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-5 md:container  h-[60vh]">
        <div className="aspect-video bg-secondry rounded-l-3xl rounded-r-md w-3/4"></div>
        <div className="aspect-video bg-background rounded-r-3xl rounded-l-md w-1/4"></div>
        
      </div>
    </section>
  );
}
