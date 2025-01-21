"use client";
import {
  IndustrialRetail,
  IndustriesBanner,
  IndustriesConsumer,
  IndustriesDrivingDigital,
  IndustriesFuture,
  IndustriesLifeScience,
  IndustriesTechnology,
  IndustriesUtilityEnergy,
  IndustriesWeServe,
} from "@/components/services/industries";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Industries = () => {
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
      <IndustriesBanner />
      <IndustriesWeServe />
      <IndustrialRetail />
      <IndustriesDrivingDigital />
      <IndustriesLifeScience />
      <IndustriesConsumer />
      <IndustriesTechnology />
      <IndustriesUtilityEnergy />
      <IndustriesFuture />
    </div>
  );
};

export default Industries;
