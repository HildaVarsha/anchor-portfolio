"use client";
import {
  MobileAppAbout,
  MobileAppBanner,
  MobileAppExperts,
  MobileAppProcess,
  MobileAppServices,
  MobileAppStayAhead,
  MobileAppTechnology,
} from "@/components/services/mobileApplication";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
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
      <MobileAppBanner />
      <MobileAppAbout />
      <MobileAppServices />
      <MobileAppExperts />
      <MobileAppProcess />
      <MobileAppStayAhead />
      <MobileAppTechnology />
    </div>
  );
};

export default Page;
