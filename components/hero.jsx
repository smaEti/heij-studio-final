import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
export default function Hero() {
	return (
		<div>
			<div className="h-[50vh] sm:h-screen relative">
				<video
					src="/Demoreel.mp4"
					autoPlay
					loop
					muted
					className="object-cover h-full w-full"
				></video>
			</div>
            <DesktopNav/>
            <MobileNav/>
		</div>
	);
}
