"use client";
import {
  CtoBenefits,
  CtoBuildProject,
  CtoOurClients,
  CtoServiceAbout,
  CtoServiceBanner,
  CtoTailored,
  CtoTransform,
  CtoVendor,
} from "@/components/technologies/ctoService";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CtoService = () => {
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
      <CtoServiceBanner />
      <CtoServiceAbout />
      <CtoTailored />
      <CtoBenefits />
      <CtoBuildProject />
      <CtoTransform />
      <CtoVendor />
      <CtoOurClients />
    </div>
  );
};

export default CtoService;
