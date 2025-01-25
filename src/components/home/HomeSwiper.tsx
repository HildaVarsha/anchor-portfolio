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

// Array of slides
const slides = [
  {
    videoSrc:
      "https://cdn.pixabay.com/video/2023/07/21/172528-847499874_large.mp4",
    heading: "We Drive Digital",
    subheading: "Transformation, Globally.",
    animationSequence: ["innovation", 1000, "bright", 1000, "creatively", 1000],
    buttonText: "Let’s Talk",
    link: "/contact-us",
  },
  {
    videoSrc:
      "https://cdn.pixabay.com/video/2016/07/23/3975-176000797_medium.mp4",
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
      "https://cdn.pixabay.com/video/2023/07/19/172170-846731303_large.mp4",
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
    videoSrc: "https://cdn.pixabay.com/video/2024/04/25/209409_large.mp4",
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
    link: "/ai-solutions",
  },
  {
    videoSrc:
      "https://cdn.pixabay.com/video/2022/07/16/124333-730771399_large.mp4",
    heading: "Global Impact",
    subheading: "Through Local Solutions.",
    animationSequence: ["global", 1000, "inclusive", 1000, "resilient", 1000],
    buttonText: "Join Us",
    link: "/join-us",
  },
];

const HomeSwiper = () => {
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="relative flex justify-center h-screen overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className=" relative inset-0 w-full h-full object-cover"
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>

            {/* Content */}
            <div className="absolute z-10 text-center text-white px-4 md:px-0 md:container mx-auto top-64">
              <p className="text-3xl md:text-5xl font-bold text-amber-400">
                {slide.heading}
              </p>
              <p className="text-3xl md:text-5xl font-bold py-4">
                {slide.subheading}
              </p>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-12 px-4 md:px-24">
                <div className="flex items-center gap-2 font-semibold text-3xl w-full">
                  We think
                  <span className="text-amber-400">
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
