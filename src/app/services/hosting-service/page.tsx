"use client";
import {
  HostingAbout,
  HostingBanner,
  HostingExperts,
  HostingServices,
  HostingStayAhead,
  HostingTechnology,
} from "@/components/services/hostingService";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HostingService = () => {
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
      <HostingBanner />
      <HostingAbout />
      <HostingServices />
      <HostingExperts />
      <HostingStayAhead />
      <HostingTechnology />
    </div>
  );
};

export default HostingService;
