"use client";
import {
  SustainableAtAnchor,
  SustainableBanner,
  SustainableMission,
  SustainablePillers,
} from "@/components/aboutCompany/sustainableSoftware";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sustainable = () => {
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
      <SustainableBanner />
      <SustainableMission />
      <SustainableAtAnchor />
      <SustainablePillers />
    </div>
  );
};

export default Sustainable;
