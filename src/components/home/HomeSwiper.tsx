"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Button } from "../ui";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

// Array of slides
const slides = [
  {
    videoSrc:
      "https://videos.pexels.com/video-files/8721923/8721923-uhd_2732_1440_25fps.mp4",
    heading: "We Drive Digital",
    subheading: "Transformation, Globally.",
    animationSequence: ["innovation", 1000, "bright", 1000, "creatively", 1000],
    buttonText: "Let’s Talk",
    link: "/contact-us",
  },
  {
    videoSrc:
      "https://videos.pexels.com/video-files/4389357/4389357-uhd_2732_1440_30fps.mp4",
    heading: "Unleashing the Future",
    subheading: "One Idea at a Time.",
    animationSequence: [
      "futuristic",
      1000,
      "impactful",
      1000,
      "sustainable",
      1000,
    ],
    buttonText: "Learn More",
    link: "/about-us",
  },
  {
    videoSrc:
      "https://videos.pexels.com/video-files/9783952/9783952-uhd_2732_1440_25fps.mp4",
    heading: "Empowering Businesses",
    subheading: "Through Technology.",
    animationSequence: [
      "empowerment",
      1000,
      "efficiency",
      1000,
      "growth",
      1000,
    ],
    buttonText: "Our Services",
    link: "/services",
  },
  {
    videoSrc:
      "https://videos.pexels.com/video-files/5495784/5495784-uhd_2560_1080_30fps.mp4",
    heading: "AI-Driven Insights",
    subheading: "For Smarter Decisions.",
    animationSequence: [
      "intelligent",
      1000,
      "adaptive",
      1000,
      "reliable",
      1000,
    ],
    buttonText: "Discover AI",
    link: "/ai-data/ai-dev",
  },
  {
    videoSrc:
      "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    heading: "Global Impact",
    subheading: "Through Local Solutions.",
    animationSequence: ["global", 1000, "inclusive", 1000, "resilient", 1000],
    buttonText: "Join Us",
    link: "/contact-us",
  },
];

const HomeSwiper = () => {
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const [loadedIndex, setloadedIndex] = useState<number[]>([]);
  useEffect(() => {
    if (!loadedIndex.includes(ActiveIndex)) {
      setloadedIndex((prev) => [...prev, ActiveIndex]);
    }
  }, [ActiveIndex]);
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      loop
      onSwiper={(swiper) => {
        console.log(swiper);
      }}
      onBeforeTransitionStart={(event) => {
        // debugger;
      }}
      onSlideChange={(event) => {
        setActiveIndex(event.activeIndex);
        console.log("slide change");
      }}
      className="relative flex justify-center h-screen overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            {/* Video Background */}
            {ActiveIndex == index ||
            ActiveIndex + 1 == index ||
            loadedIndex.includes(index) ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className=" relative inset-0 w-full h-full object-cover"
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <></>
            )}

            {/* Content */}
            <div className="absolute z-10 text-center text-white px-4 lg:px-0 lg:container mx-auto top-64 w-full">
              <p className="text-3xl lg:text-5xl font-bold text-lime-500">
                {slide.heading}
              </p>
              <p className="text-3xl lg:text-5xl font-bold py-4">
                {slide.subheading}
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-12 px-4 lg:px-24">
                <div className="flex items-center justify-center gap-2 font-semibold text-3xl w-full">
                  We think
                  <span className="text-lime-500">
                    <TypeAnimation
                      sequence={slide.animationSequence}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </div>
                <Link href={slide.link}>
                  <Button className="w-64 mt-4">
                    {slide.buttonText}
                    <MoveRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSwiper;
