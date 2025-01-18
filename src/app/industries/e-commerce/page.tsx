"use client";
import {
  EComAbout,
  EComAdopt,
  EComBanner,
  EComEndToEnd,
  EComIntegrate,
  EComTechnology,
} from "@/components/industries/eCommerce";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ECommerce = () => {
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
      <EComBanner />
      <EComAbout />
      <EComIntegrate />
      <EComAdopt />
      <EComEndToEnd />
      <EComTechnology />
    </div>
  );
};

export default ECommerce;
