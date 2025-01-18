"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Strategy", "Trending", "Development"];
const titles = [
  "Artificial Intelligence / Gen AI / Healthcare",
  "Data Management / Product Development",
  "Artificial Intelligence / Gen AI / Product Development",
  "Artificial Intelligence / Healthcare / Product Development",
  "Artificial Intelligence / Data Management",
  "Artificial Intelligence / Data Management / Gen AI / Product Development",
  "DevOps / ML / Product Development",
  "Product Development",
  "Artificial Intelligence / Gen AI / Healthcare / Pharma",
  "Artificial Intelligence / Gen AI / Product Development / Retail & Ecommerce",
  "Artificial Intelligence / FinTech / Gen AI / Product Development",
  "Artificial Intelligence / Gen AI / Product Development",
  "Artificial Intelligence / Gen AI / Product Development",
  "Big Data / Product Development",
  "Artificial Intelligence / FinTech / Gen AI / Product Development",
  "Artificial Intelligence / Gen AI / Healthcare / Product Development",
  "Big Data / Data Management / Product Development",
  "Artificial Intelligence / Product Development",
  "Artificial Intelligence / Product Development",
  "Artificial Intelligence / ML / Product Development",
  "Artificial Intelligence / Gen AI / Product Development",
  "Big Data & Analytics / Data Migration / Product Development",
  "Artificial Intelligence / Big Data / Data Management / Product Development",
  "Artificial Intelligence / Gen AI / Product Development",
  "Artificial Intelligence / Gen AI",
  "Product Development / QA",
  "Artificial Intelligence / Product Development",
  "Artificial Intelligence / Gen AI / Product Development / Retail",
  "Artificial Intelligence / Gen AI / Supply Chain",
  "Big Data / Big Data & Analytics",
  "Artificial Intelligence / Product Development",
  "Artificial Intelligence / ML / Product Development",
  "Product Development",
  "Artificial Intelligence / Gen AI / Healthcare / Product Development",
  "Product Development",
  "Product Development / Retail & Ecommerce",
  "IoT / Product Development",
  "Artificial Intelligence / ML / Product Development",
  "Artificial Intelligence",
  "Product Development",
  "Product Development",
  "Artificial Intelligence / ML",
  "Product Development / QA",
  "Big Data / Big Data & Analytics / Pharma",
  "Data Analytics / Data Management / Healthcare",
  "Artificial Intelligence / Product Development",
  "Artificial Intelligence / IoT",
  "Product Development / Retail",
  "Product Development / Retail",
  "Artificial Intelligence / Healthcare / NLP",
];
const descriptions = [
  "Generative AI in Life Sciences: Key Use Cases to Stay Ahead in a Competitive Market.",
  "How to Develop an Effective Enterprise Data Strategy.",
  "Exploring the Generative AI Value Chain.",
  "Evaluating the Cost of Implementing AI in Healthcare.",
  "What Are AI Agents and How Do You Implement Them?",
  "How Synthetic Data Generation Using Generative AI Enhances the Creation of Better, More Efficient Models.",
  "What is MLOps and Why is It Necessary?",
  "Your Ultimate Guide to Electronics Product Design and Development.",
  "Evaluating the Impact of Generative AI in Drug Discovery.",
  "Exploring the Potential of Generative AI in E-commerce.",
  "How Using Generative AI in Finance Drives Significant Cost Savings and Enhances Customer Experience.",
  "Navigating Generative AI Trends for C-Level Executives.",
  "Generative AI in Business: Top 5 Use Cases Every Company Should Consider.",
  "Mastering Data Discovery: A Practical Guide.",
  "Generative AI in Banking: The Current State of Affairs.",
  "Generative AI in Pharma: Assessing the Impact.",
  "What Is Data Mapping and Why Is It Important?",
  "AI Outsourcing: Tips for Choosing the Right Technology Partner for Your Company",
  "Building an AI System: A Comprehensive Guide for Business Owners",
  "Comprehensive Guide to Training Machine Learning Models for Businesses",
  "Evaluating the Cost of Generative AI",
  "What Is Data Migration and How to Do It Right",
  "What Is Text Mining and How Does It Help Businesses",
  "Understanding the Advantages and Disadvantages of Generative AI",
  "Generative AI vs AI Choosing the Right Technology",
  "Is Test Automation Essential in Software Development?",
  "Creating an AI Clone of Yourself Is No Longer Science Fiction",
  "Generative AI in Retail Top 5 Use Cases to Explore",
  "Generative AI for Supply Chain Pioneering a New Era",
  "How Your Company Can Benefit from Automated Data Collection",
  "What Businesses Need to Know About Large Language Models (LLMs)",
  "Calculating Machine Learning Costs Price Factors",
  "What Is the Cost of an MVP in 2024?",
  "5 Ways to Utilize Generative AI in Healthcare",
  "From Idea to Reality The Essential Steps in Software Development",
  "Adobe Commerce Pricing How Much Does It Cost to Create",
  "Top 5 Industrial IoT (IIoT) Security Challenges and How to Overcome Them",
  "How Companies Can Leverage Machine Learning for Predictive Maintenance",
  "What Is Anomaly Detection and How Can It Benefit Your Company?",
  "What Is Software Scalability and Why Should Your Company Prioritize It?",
  "What Is Proof of Concept (PoC) in Software Development and When Does Your Company Need It?",
  "Machine Learning in Ecommerce 11 Trends Shaping the Future Today",
  "What Is QA Documentation and How to Reduce Its Creation and Maintenance Costs?",
  "From Drug Development to Marketing The Potential of Big Data in Pharma",
  "How Technology Is Transforming Hospital Facility Management",
  "Zooming In on the Process of Building a Recommendation Engine",
  "Internet of Behaviors What It Is and How It Could Impact Your Business",
  "Magento vs WooCommerce The Ultimate Showdown",
  "What Is Adobe Commerce and What Benefits Does It Offer for Online Retail Companies?",
  "Natural Language Processing (NLP) in Healthcare An Adoption Path",
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

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
          {filteredBlogs.map((item, index) => (
            <div key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full rounded-md"
                data-aos="flip-left"
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
