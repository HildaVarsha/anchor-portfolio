"use client";
import {
  DetectionAbout,
  DetectionAtAnchor,
  DetectionAtGlance,
  DetectionBanner,
  DetectionCustomized,
  DetectionServices,
  DetectionSolutions,
} from "@/components/services/anomalyDetection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Detection = () => {
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
      <DetectionBanner />
      <DetectionAbout />
      <DetectionSolutions />
      <DetectionServices />
      <DetectionCustomized />
      <DetectionAtAnchor />
      <DetectionAtGlance />
    </div>
  );
};

export default Detection;
