"use client";
import {
  MachineLearningAbout,
  MachineLearningAdvance,
  MachineLearningBanner,
  MachineLearningDevelopment,
  MachineLearningExperts,
  MachinelearningFaq,
  MachineLearningGlance,
  MachineLearningSolutions,
} from "@/components/services/machineLearning";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MachineLearn = () => {
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
      <MachineLearningBanner />
      <MachineLearningAbout />
      <MachineLearningExperts />
      <MachineLearningSolutions />
      <MachineLearningDevelopment />
      <MachineLearningAdvance />
      <MachineLearningGlance />
      <MachinelearningFaq />
    </div>
  );
};

export default MachineLearn;
