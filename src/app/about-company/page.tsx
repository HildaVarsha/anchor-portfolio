"use client";
import {
  AboutCompanyBanner,
  AboutCompanyFacts,
  AboutOurWorkProgress,
  AboutSuccessbanner,
  AboutValues,
  AboutVision,
  AboutWhyChooseUs,
  AboutWorkWithUs,
} from "@/components/aboutCompany";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCompany = () => {
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
      <AboutCompanyBanner />
      <AboutCompanyFacts />
      <AboutWorkWithUs />
      <AboutValues />
      <AboutSuccessbanner />
      <AboutVision />
      <AboutOurWorkProgress />
      <AboutWhyChooseUs />
    </div>
  );
};

export default AboutCompany;
