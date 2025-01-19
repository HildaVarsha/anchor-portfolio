"use client";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveRight } from "lucide-react";

const HomeBanner = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 300, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        autoPlay
        loop
        data-aos="zoom-in"
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
          data-aos="fade-left"
          className="text-3xl md:text-5xl font-bold text-amber-400"
        >
          We Drive Digital
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-3xl md:text-5xl font-bold py-4"
        >
          Transformation, Globally.
        </p>
        <div data-aos="flip-down" data-aos-delay="800">
          <Link href={"/contact-us"} className="mt-4">
            <Button className="w-64">
              Let&apos;s Talk
              <MoveRight data-aos="fade-right" data-aos-delay="500" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
