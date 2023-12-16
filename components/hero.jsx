import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
export default function Hero() {
	return (
		<div>
			<div className="relative">
				<video
					src="/Demoreel.mp4"
					autoPlay
					loop
					muted
					className="aspect-video w-full"
				></video>
			</div>
            <DesktopNav/>
            <MobileNav/>
		</div>
	);
}
