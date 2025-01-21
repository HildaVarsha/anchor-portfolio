"use client";
import {
  AiApAtAnchor,
  AiAppAbout,
  AiAppBanner,
  AiAppExpertise,
  AiAppFAQ,
  AiAppProcess,
} from "@/components/services/aiAppDevelopment";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AiApp = () => {
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
      <AiAppBanner />
      <AiAppAbout />
      <AiAppExpertise />
      <AiAppProcess />
      <AiApAtAnchor />
      <AiAppFAQ />
    </div>
  );
};

export default AiApp;
