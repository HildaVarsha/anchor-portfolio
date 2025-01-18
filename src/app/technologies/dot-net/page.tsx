"use client";
import {
  DotNetBanner,
  DotNetClients,
  DotNetEngagement,
  DotNetEnterprise,
  DotNetProcess,
  DotNetServices,
  DotNetTechnology,
  DotNetWhyChoose,
  DotNetWhyChooseAnchor,
} from "@/components/technologies/dotNet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DotNet = () => {
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
      <DotNetBanner />
      <DotNetServices />
      <DotNetEnterprise />
      <DotNetProcess />
      <DotNetTechnology />
      <DotNetEngagement />
      <DotNetWhyChoose />
      <DotNetWhyChooseAnchor />
      <DotNetClients />
    </div>
  );
};

export default DotNet;
