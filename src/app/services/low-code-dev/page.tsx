"use client";
import {
  LowCodeAbout,
  LowCodeAtAnchor,
  LowCodeBanner,
  LowCodeCreation,
  LowCodeFaq,
  LowCodeGlance,
  LowCodeTypes,
} from "@/components/services/lowCodeDev";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LowCodeDev = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);
  return (
    <div>
      <LowCodeBanner />
      <LowCodeAbout />
      <LowCodeTypes />
      <LowCodeCreation />
      <LowCodeAtAnchor />
      <LowCodeFaq />
      <LowCodeGlance />
    </div>
  );
};

export default LowCodeDev;
