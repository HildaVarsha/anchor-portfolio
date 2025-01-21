"use client";
import {
  AngularBanner,
  AngularDevelopment,
  AngularOurClients,
  AngularPartner,
  AngularServices,
} from "@/components/technologies/angular";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Angular = () => {
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
      <AngularBanner />
      <AngularServices />
      <AngularDevelopment />
      <AngularPartner />
      <AngularOurClients />
    </div>
  );
};

export default Angular;
