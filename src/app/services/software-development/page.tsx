"use client";
import {
  SoftwareDevBanner,
  SoftwareDevelopmentAbout,
  SoftwareDevExperts,
  SoftwareDevServices,
  SoftwareDevStayAhead,
  SoftwareDevTechnologies,
} from "@/components/services/softwareDevelopment";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SoftwareDevelopment = () => {
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
      <SoftwareDevBanner />
      <SoftwareDevelopmentAbout />
      <SoftwareDevServices />
      <SoftwareDevExperts />
      <SoftwareDevStayAhead />
      <SoftwareDevTechnologies />
    </div>
  );
};

export default SoftwareDevelopment;
