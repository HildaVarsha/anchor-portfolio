"use client";
import {
  AiProofAbout,
  AiProofBanner,
  AiProofBenefit,
  AiProofExplore,
  AiProofFaq,
  AiProofGlance,
  AiProofPartner,
} from "@/components/services/aiProof";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Proof = () => {
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
      <AiProofBanner />
      <AiProofAbout />
      <AiProofBenefit />
      <AiProofExplore />
      <AiProofPartner />
      <AiProofFaq />
      <AiProofGlance />
    </div>
  );
};

export default Proof;
