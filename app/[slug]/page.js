import MobileProjectNav from "@/components/MobileProjectNav";
import DesktopProjectNav from "@/components/DesktopProjectNav";

export default function project(){
    return(
    <section>
        <DesktopProjectNav/>
        <MobileProjectNav/>
    </section>
    );
}