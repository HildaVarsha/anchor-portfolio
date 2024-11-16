import { Button } from "@/components/ui";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/29306492/12637575_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative container mx-auto text-white px-4 md:px-0 z-10">
        <p className="text-3xl md:text-5xl font-bold text-amber-400">
          We Drive Digital
        </p>
        <p className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <Link href={"/contact-us"} className="mt-4">
          <Button className="w-64">Lets Talk</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
