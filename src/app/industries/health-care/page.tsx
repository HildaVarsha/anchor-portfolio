"use client";
import {
  HealthCareAbout,
  HealthCareBanner,
  HealthCareSecurity,
  HealthCareSoftware,
  HealthCareSolutions,
  HealthCareTech,
} from "@/components/industries/healthCare";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Helathcare = () => {
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
      <HealthCareBanner />
      <HealthCareAbout />

      <HealthCareSecurity />
      <HealthCareSolutions />
      <HealthCareSoftware />
      <HealthCareTech />
    </div>
  );
};

export default Helathcare;
