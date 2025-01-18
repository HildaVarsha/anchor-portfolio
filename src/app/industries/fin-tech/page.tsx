"use client";
import {
  FinTechAbout,
  FinTechBanner,
  FinTechEstablish,
  FinTechIndustry,
  FinTechPower,
  FinTechSpectrum,
  FinTechTrust,
} from "@/components/industries/finTech";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fintech = () => {
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
      <FinTechBanner />
      <FinTechAbout />
      <FinTechPower />
      <FinTechSpectrum />
      <FinTechIndustry />
      <FinTechEstablish />
      <FinTechTrust />
    </div>
  );
};

export default Fintech;
