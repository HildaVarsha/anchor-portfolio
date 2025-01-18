"use client";
import {
  HomeBanner,
  HomeClientSays,
  HomeHowCanHelp,
  HomeLatestTechnology,
  HomeLatestThinking,
  HomeOurExpertise,
} from "@/components/home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 200, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);
  return (
    <>
      <HomeBanner />
      <HomeClientSays />
      <HomeHowCanHelp />
      <HomeLatestTechnology />
      <HomeOurExpertise />
      <HomeLatestThinking />
    </>
  );
};

export default Home;
