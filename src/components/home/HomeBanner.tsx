"use client";
import { Button } from "@/components/ui";
import Link from "next/link";

import "aos/dist/aos.css";
import { MoveRight } from "lucide-react";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        autoPlay
        loop
        data-aos="fade-up"
        muted
        playsInline
        className="absolute inset-0 w-screen h-screen object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/4146815/4146815-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative md:container mx-auto text-white px-4 md:px-0 z-10 text-center">
        <p
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-amber-400"
        >
          We Drive Digital
        </p>
        <p data-aos="fade-up" className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <div data-aos="fade-up">
          <Link href={"/contact-us"} className="mt-4">
            <Button className="w-64">
              Let&apos;s Talk
              <MoveRight data-aos="fade-up" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
