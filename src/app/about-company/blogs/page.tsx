"use client";
import { BlogsBanner, BlogsListing } from "@/components/aboutCompany/blogs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// !data Updated
const Blogs = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 100, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);
  return (
    <div>
      <BlogsBanner />
      <BlogsListing />
    </div>
  );
};

export default Blogs;
