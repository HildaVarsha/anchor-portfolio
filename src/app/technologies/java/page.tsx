"use client";
import {
  JavaBanner,
  JavaEndToEndDev,
  JavaEndToEndSolutions,
  JavaExpertise,
  JavaIdealPartner,
  JavaTechnologies,
  JavaTopWays,
} from "@/components/technologies/java";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Java = () => {
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
      <JavaBanner />
      <JavaExpertise />
      <JavaEndToEndDev />
      <JavaTopWays />
      <JavaEndToEndSolutions />
      <JavaIdealPartner />
      <JavaTechnologies />
    </div>
  );
};

export default Java;
