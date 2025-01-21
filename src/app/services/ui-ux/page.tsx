"use client";
import {
  UiUxAbout,
  UiUXAtAnchor,
  UiUxBanner,
  UiUxDesign,
  UiUxProcess,
} from "@/components/services/uiUx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UiUx = () => {
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
      <UiUxBanner />
      <UiUxAbout />
      <UiUxDesign />
      <UiUxProcess />
      <UiUXAtAnchor />
    </div>
  );
};

export default UiUx;
