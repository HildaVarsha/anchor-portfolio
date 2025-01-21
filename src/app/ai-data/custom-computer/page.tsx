"use client";
import {
  CustomComputerAbout,
  CustomComputerAtAnchor,
  CustomComputerBanner,
  CustomComputerFeatures,
  CustomComputerServices,
  CustomComputerSolutions,
  CustomComputerTech,
  CustomComputerVision,
} from "@/components/services/customComputer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomComputer = () => {
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
      <CustomComputerBanner />
      <CustomComputerAbout />
      <CustomComputerVision />
      <CustomComputerFeatures />
      <CustomComputerSolutions />
      <CustomComputerTech />
      <CustomComputerServices />
      <CustomComputerAtAnchor />
    </div>
  );
};

export default CustomComputer;
