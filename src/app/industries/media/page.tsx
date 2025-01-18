"use client";
import {
  MediaAbout,
  MediaBanner,
  MediaDevelopment,
  MediaEntertainment,
  MediaStandOut,
  MediaTechnology,
} from "@/components/industries/media";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Media = () => {
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
    <div>
      <MediaBanner />
      <MediaAbout />
      <MediaEntertainment />
      <MediaTechnology />
      <MediaDevelopment />
      <MediaStandOut />
    </div>
  );
};

export default Media;
