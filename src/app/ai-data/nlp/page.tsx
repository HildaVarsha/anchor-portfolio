"use client";
import {
  NlpAbout,
  NlpAtAnchor,
  NlpBanner,
  NlpFaq,
  NlpGlance,
  NlpIndustry,
  NlpOverview,
  Nlpprocess,
  NlpSolutions,
  NlpTechnology,
} from "@/components/services/nlpServices";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nlp = () => {
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
      <NlpBanner />
      <NlpAbout />
      <NlpOverview />
      <NlpSolutions />
      <NlpIndustry />
      <NlpTechnology />
      <Nlpprocess />
      <NlpAtAnchor />
      <NlpFaq />
      <NlpGlance />
    </div>
  );
};

export default Nlp;
