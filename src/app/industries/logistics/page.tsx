"use client";
import {
  LogisticBanner,
  LogisticsAbout,
  LogisticsCustom,
  LogisticsPotential,
  LogisticsTransport,
} from "@/components/industries/logistics";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Logistics = () => {
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
      <LogisticBanner />
      <LogisticsAbout />
      <LogisticsCustom />
      <LogisticsPotential />
      <LogisticsTransport />
    </div>
  );
};

export default Logistics;
