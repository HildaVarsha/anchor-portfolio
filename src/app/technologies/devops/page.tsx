"use client";
import {
  DevopsAbout,
  DevopsAtAnchor,
  DevopsBanner,
  DevopsBenefits,
  DevopsConsulting,
  DevopsOurClients,
  DevopsProcess,
  DevopsServices,
  DevopsTechnology,
} from "@/components/technologies/devops";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Devops = () => {
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
      <DevopsBanner />
      <DevopsAbout />
      <DevopsServices />
      <DevopsProcess />
      <DevopsConsulting />
      <DevopsBenefits />
      <DevopsAtAnchor />
      <DevopsTechnology />
      <DevopsOurClients />
    </div>
  );
};

export default Devops;
