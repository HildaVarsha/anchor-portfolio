"use client";
import { Button } from "@/components/ui";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
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
          src="https://cdn.pixabay.com/video/2017/12/20/13495-248644905_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative md:container mx-auto text-white px-4 md:px-0 z-10 text-center">
        <p
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-green-500"
        >
          We Drive Digital
        </p>
        <p data-aos="fade-up" className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <div
          className="flex flex-col md:flex-row items-center gap-16 mt-12"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 font-semibold text-3xl w-full">
            We think
            <TypeAnimation
              sequence={[
                "innovation",
                1000,
                "bright",
                1000,
                "creatively",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-green-500 "
            />
          </div>
          <div className="w-full">
            <Link href={"/contact-us"} className="mt-4">
              <Button className="w-64">
                Let&apos;s Talk
                <MoveRight data-aos="fade-up" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
