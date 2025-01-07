import { Button } from "@/components/ui";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-screen h-screen object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/6823023/6823023-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative md:container mx-auto text-white px-4 md:px-0 z-10 text-center">
        <p className="text-3xl md:text-5xl font-bold text-amber-400">
          We Drive Digital
        </p>
        <p className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <Link href={"/contact-us"} className="mt-4">
          <Button className="w-64">Let&apos;s Talk</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
