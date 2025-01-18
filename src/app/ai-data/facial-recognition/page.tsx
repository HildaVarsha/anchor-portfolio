"use client";
import {
  FacialRecognitionAbout,
  FacialRecognitionAtAnchor,
  FacialRecognitionBanner,
  FacialRecognitionExpertise,
  FacialRecognitionFaq,
  FacialRecognitionGlance,
  FacialRecognitionSoftware,
  FacialRecognitionSoutions,
} from "@/components/services/facialRecognition";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Recognition = () => {
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
      <FacialRecognitionBanner />
      <FacialRecognitionAbout />
      <FacialRecognitionSoutions />
      <FacialRecognitionSoftware />
      <FacialRecognitionExpertise />
      <FacialRecognitionAtAnchor />
      <FacialRecognitionFaq />
      <FacialRecognitionGlance />
    </div>
  );
};

export default Recognition;
