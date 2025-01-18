"use client";
import {
  AiDevAbout,
  AiDevApproach,
  AiDevAtAnchor,
  AiDevBanner,
  AiDevIndustry,
  AiDevPartner,
  AiDevServices,
  AiDevSolutions,
  AiDevTechnology,
} from "@/components/services/aiDev";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AiDev = () => {
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
      <AiDevBanner />
      <AiDevAbout />
      <AiDevAtAnchor />
      <AiDevSolutions />
      <AiDevIndustry />
      <AiDevApproach />
      <AiDevServices />
      <AiDevTechnology />
      <AiDevPartner />
    </div>
  );
};

export default AiDev;
