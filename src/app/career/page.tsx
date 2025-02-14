"use client";
import {
  CareerBanner,
  CareerBuildNewLife,
  CareerCapabilities,
  CareerEthicalEngineer,
  CareerFlexibility,
  CareerFullTimeJob,
  CareerJobs,
  CareerJoinOurTeam,
  CareerLifeAtAnchor,
} from "@/components/career";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
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
      <CareerBanner />
      <CareerLifeAtAnchor />
      <CareerCapabilities />
      <CareerJoinOurTeam />
      <CareerFullTimeJob />
      <CareerEthicalEngineer />
      <CareerFlexibility />
      <CareerJobs />
      <CareerBuildNewLife />
    </div>
  );
};

export default Career;
