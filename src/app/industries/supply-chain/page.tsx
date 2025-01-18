"use client";
import {
  SupplyChainAbout,
  SupplyChainBanner,
  SupplyChainManufacture,
  SupplyChainTransformation,
} from "@/components/industries/supplyChain";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Supply = () => {
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
      <SupplyChainBanner />
      <SupplyChainAbout />
      <SupplyChainManufacture />
      <SupplyChainTransformation />
    </div>
  );
};

export default Supply;
