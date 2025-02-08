"use client";
"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const categories = ["All", "Strategy", "Trending", "Development"];
const titles = [
  "Artificial Intelligence / Generative AI / Healthcare",
  "Data Management / Product Development Strategies",
  "Generative AI / Artificial Intelligence / Product Development",
  "Artificial Intelligence / Healthcare Innovations / Product Development",
  "AI Technologies / Data Management Solutions",
  "Generative AI / Artificial Intelligence / Product Development / Data Management",
  "DevOps / Machine Learning / Product Development",
  "Innovative Product Development Strategies",
  "Generative AI / Artificial Intelligence / Healthcare / Pharma",
  "Generative AI / Product Development / Retail & Ecommerce Innovations",
  "Generative AI / FinTech Innovations / Artificial Intelligence / Product Development",
  "AI Applications / Generative AI / Product Development Insights",
  "AI Solutions / Product Development Expertise",
  "Big Data Solutions / Product Development Approaches",
  "Generative AI / Artificial Intelligence / Healthcare / Product Development Focus",
  "Data Management / Big Data / Product Development Expertise",
  "Artificial Intelligence Applications in Product Development",
  "Advanced AI Solutions for Product Development",
  "Artificial Intelligence / Machine Learning / Product Development Innovations",
  "Generative AI / Product Development / Artificial Intelligence Integration",
  "Data Analytics / Big Data Solutions / Product Development Strategies",
  "AI and Big Data / Data Management / Product Development Solutions",
  "Generative AI / Artificial Intelligence / Product Development Insights",
  "Generative AI Technologies",
  "Product Development / Quality Assurance (QA)",
  "Artificial Intelligence Solutions for Product Development",
  "Generative AI / Retail / Product Development Strategies",
  "AI & Generative AI / Supply Chain Management Innovations",
  "Big Data & Analytics / Data Management Approaches",
  "Generative AI Applications in Product Development",
  "Machine Learning Solutions for Product Development",
  "Comprehensive Product Development Approaches",
  "Generative AI in Healthcare / Product Development Insights",
  "Product Development / Retail & Ecommerce Trends",
  "IoT / Product Development Innovations",
  "Generative AI / Machine Learning Solutions for Product Development",
  "Core Artificial Intelligence Insights",
  "Product Development Strategies & Solutions",
  "Key Trends in Product Development",
  "Artificial Intelligence & Machine Learning Applications",
  "Product Development / QA Insights",
  "Big Data / Analytics in Pharma / Product Development Solutions",
  "Data Analytics / Management Strategies in Healthcare",
  "Artificial Intelligence / IoT in Product Development",
  "Retail & Product Development Innovations",
  "AI for Healthcare / Natural Language Processing (NLP)",
];

const descriptions = [
  "Exploring Generative AI use cases in life sciences to stay competitive in the market.",
  "Developing an effective strategy for enterprise data management.",
  "A deep dive into the Generative AI value chain for businesses.",
  "Analyzing the costs and benefits of implementing AI solutions in healthcare.",
  "Understanding AI agents, their applications, and implementation strategies.",
  "Leveraging synthetic data with Generative AI to create more efficient models.",
  "What is MLOps and why it is essential for AI-driven enterprises.",
  "A complete guide to electronics product design and development.",
  "Examining the role of Generative AI in drug discovery and development.",
  "How Generative AI is reshaping e-commerce and creating new opportunities.",
  "Exploring the significant cost-saving potential of Generative AI in the finance sector.",
  "Understanding Generative AI trends from a C-level executive perspective.",
  "The top 5 use cases of Generative AI every business should consider implementing.",
  "A practical guide to mastering data discovery in business processes.",
  "Generative AI in banking: current trends and future potential.",
  "Evaluating the impact of Generative AI on the pharmaceutical industry.",
  "Understanding the importance of data mapping and its business implications.",
  "Tips for outsourcing AI technology and choosing the right partner.",
  "Building a comprehensive AI system: A guide for business owners.",
  "Step-by-step guide for businesses on training machine learning models effectively.",
  "Breaking down the costs of Generative AI implementation.",
  "Understanding data migration and its best practices for business success.",
  "Exploring the role of text mining and its applications in business optimization.",
  "Evaluating the pros and cons of Generative AI for business use.",
  "Choosing the right AI technology: Generative AI vs AI.",
  "Is test automation a necessity in modern software development?",
  "How to create an AI-powered clone of yourself using Generative AI.",
  "Top 5 use cases for applying Generative AI in retail industries.",
  "Revolutionizing supply chains with Generative AI technologies.",
  "How automated data collection benefits modern businesses.",
  "What businesses should know about large language models (LLMs) and their applications.",
  "Factors that influence machine learning cost calculations for businesses.",
  "The cost factors to consider when developing a minimum viable product (MVP) in 2024.",
  "Exploring five key ways Generative AI can impact the healthcare sector.",
  "The essential steps for turning an idea into a reality through software development.",
  "Adobe Commerce pricing: what businesses need to know to develop successfully.",
  "Top industrial IoT security challenges and how to overcome them.",
  "Leveraging machine learning for predictive maintenance in businesses.",
  "The significance of anomaly detection and how it benefits companies.",
  "Why scalability should be a priority for your business and how to achieve it.",
  "Understanding proof of concept (PoC) in software development and when it's necessary.",
  "Exploring machine learning trends in e-commerce and their potential impact.",
  "Best practices for reducing costs associated with QA documentation creation and maintenance.",
  "Big data in pharma: From drug development to marketing applications.",
  "How technology is transforming hospital facility management and operations.",
  "The process of building a recommendation engine using advanced technologies.",
  "Understanding the Internet of Behaviors and its potential impact on businesses.",
  "Magento vs WooCommerce: The ultimate showdown for online retailers.",
  "How Adobe Commerce benefits e-commerce businesses and enhances customer experience.",
  "Natural Language Processing (NLP) applications in healthcare: Adoption path and benefits.",
];

// Ensure we have 50 unique entries
const blogs = Array.from({ length: 50 }, (_, i) => ({
  image: `/blog-${i + 1}.png`,
  title: titles[i % titles.length], // Repeats if less than 50
  description: descriptions[i % descriptions.length], // Repeats if less than 50
  category: categories[(i % (categories.length - 1)) + 1], // Cycles through "Strategy", "Trending", "Development"
}));

const BlogsListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        {/* Category Links */}
        <div className="flex flex-wrap gap-4 font-semibold">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category ? "text-blue-600" : ""
              } hover:text-blue-600`}
              data-aos="fade-up"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8"
          data-aos="fade-up"
        >
          {filteredBlogs.map((item, index) => (
            <div key={index} data-aos="fade-up">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full rounded-md"
              />
              <p className="py-4 font-semibold" data-aos="fade-up">
                {item.title}
              </p>
              <p className="font-bold text-2xl" data-aos="fade-up">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsListing;
