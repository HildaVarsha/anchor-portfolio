"use client";
import { PrivacyContent } from "@/components/privacy-policy";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Privacy = () => {
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
      {/* <PrivacyBanner /> */}
      <PrivacyContent />
    </div>
  );
};

export default Privacy;
