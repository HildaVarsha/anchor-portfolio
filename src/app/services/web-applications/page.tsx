"use client";
import { MobileAppProcess } from "@/components/services/mobileApplication";
import {
  WebAppAbout,
  WebAppBanner,
  WebAppExperts,
  WebAppServices,
  WebAppStayAhead,
  WebAppTechnology,
} from "@/components/services/webApplication";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WebApp = () => {
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
      <WebAppBanner />
      <WebAppAbout />
      <WebAppServices />
      <WebAppExperts />
      <MobileAppProcess />
      <WebAppStayAhead />
      <WebAppTechnology />
    </div>
  );
};

export default WebApp;
