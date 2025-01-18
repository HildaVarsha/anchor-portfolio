"use client";
import {
  GraphicDesignAbout,
  GraphicDesignBanner,
  GraphicDesignExperts,
  GraphicDesignServices,
  GraphicDesignStayAhead,
  GraphicDesignTechnologies,
} from "@/components/services/graphicDesign";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GraphicDesign = () => {
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
      <GraphicDesignBanner />
      <GraphicDesignAbout />
      <GraphicDesignServices />
      <GraphicDesignExperts />
      <GraphicDesignStayAhead />
      <GraphicDesignTechnologies />
    </div>
  );
};

export default GraphicDesign;
