"use client";
import {
  HowWeDoCollaboration,
  HowWeDoMethodologies,
  HowWeWorkBanner,
} from "@/components/aboutCompany/howWeWork";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowWeWork = () => {
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
      <HowWeWorkBanner />
      <HowWeDoMethodologies />
      <HowWeDoCollaboration />
    </div>
  );
};

export default HowWeWork;
