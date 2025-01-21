"use client";
import {
  ELearningAbout,
  ELearningBanner,
  ELearningBenefits,
  ELearningDeliver,
  ELearningDev,
  ELearningEmbrace,
  ELearningOffer,
} from "@/components/industries/eLearning";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ELearning = () => {
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
      <ELearningBanner />
      <ELearningAbout />
      <ELearningDev />
      <ELearningDeliver />
      <ELearningEmbrace />
      <ELearningBenefits />
      <ELearningOffer />
    </div>
  );
};

export default ELearning;
