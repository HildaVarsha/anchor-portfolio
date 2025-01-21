"use client";
import {
  AboutAskYourSelf,
  AboutBuildNewLife,
  AboutCareerBanner,
  AboutFlexibility,
  AboutOurCapabilities,
  AboutPlayingSucceed,
  AboutSuitableJob,
  AboutTransaparency,
  AboutWhoShouldApply,
  AboutWhoWeAre,
} from "@/components/aboutCompany/aboutCareer";
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
      <AboutCareerBanner />
      <AboutWhoWeAre />
      <AboutOurCapabilities />
      <AboutWhoShouldApply />
      <AboutAskYourSelf />
      <AboutTransaparency />
      <AboutPlayingSucceed />
      <AboutFlexibility />
      <AboutBuildNewLife />
      <AboutSuitableJob />
    </div>
  );
};

export default Page;
