"use client";
import {
  RetailAbout,
  RetailBanner,
  RetailBoost,
  RetailEngagging,
  RetailGain,
  RetailOvercome,
} from "@/components/industries/retail";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RetailIndustry = () => {
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
      <RetailBanner />
      <RetailAbout />
      <RetailBoost />
      <RetailOvercome />
      <RetailEngagging />
      <RetailGain />
    </div>
  );
};

export default RetailIndustry;
