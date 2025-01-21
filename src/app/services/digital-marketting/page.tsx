"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MarkettingAbout,
  MarkettingBanner,
  MarkettingExperts,
  MarkettingService,
  MarkettingStayAhead,
  MarkettingTechnology,
} from "@/components/services/digitalMarketting";
import React from "react";

const DigitalMarketting = () => {
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
      <MarkettingBanner />
      <MarkettingAbout />
      <MarkettingService />
      <MarkettingExperts />
      <MarkettingStayAhead />
      <MarkettingTechnology />
    </div>
  );
};

export default DigitalMarketting;
