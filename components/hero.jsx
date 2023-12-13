import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
export default function Hero() {
	return (
		<div className="w-screen">
			<div className="h-[50vh] sm:h-screen relative">
				<video
					src="/Demoreel.mp4"
					autoPlay
					loop
					className="object-cover h-full w-full"
				></video>
			</div>
            <DesktopNav/>
            <MobileNav/>
		</div>
	);
}
