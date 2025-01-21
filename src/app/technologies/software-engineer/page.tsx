"use client";
import {
  SoftwareEngineerAbout,
  SoftwareEngineerBanner,
  SoftwareEngineerDedication,
  SoftwareEngineerHighlight,
  SoftwareEngineerOverview,
  SoftwareEngineerServices,
  SoftwareEngineerTechnology,
} from "@/components/technologies/softwareEngineer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Software = () => {
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
      <SoftwareEngineerBanner />
      <SoftwareEngineerAbout />
      <SoftwareEngineerHighlight />
      <SoftwareEngineerTechnology />
      <SoftwareEngineerServices />
      <SoftwareEngineerDedication />
      <SoftwareEngineerOverview />
    </div>
  );
};

export default Software;
