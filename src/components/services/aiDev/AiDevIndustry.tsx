import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Healthcare & biotech",
    description:
      "Leverage AI-powered healthcare solutions to enhance diagnostics, elevate patient care, streamline doctor-patient communication, and optimize hospital operations and population health management.",
  },
  {
    title: "Life sciences",
    description:
      "Speed up drug development, explore drug repurposing opportunities, identify better drug candidates, targets, and biomarkers, and optimize clinical trials with our advanced, user-friendly AI solutions.",
  },
  {
    title: "Finance & banking",
    description:
      "Streamline banking and financial processes, reduce operational costs, enhance security, and unlock the full potential of intelligent banking and financial management.",
  },

  {
    title: "Retail & eCommerce",
    description:
      "Speed up decision-making, enhance demand forecasting, streamline inventory management, optimize product flow, and gain valuable insights into customer behavior with AI-powered retail solutions.",
  },
  {
    title: "Supply Chain & logistics",
    description:
      "Gain complete control over shipments, reduce paperwork, and optimize vendor communication, deliveries, and warehousing operations with AI-driven software.",
  },
  {
    title: "Education & eLearning",
    description:
      "Leverage AI to personalize learning programs, develop engaging educational content, automate administrative tasks, and improve access to quality education for students with special needs.",
  },
];

const AiDevIndustry = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );

  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-industry.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Industry-Specific
          <span className="text-amber-400">AI Development Services</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Whether you&apos;re looking to automate back-office processes, enhance
          customer experience, boost security, or create an innovative software
          product, our AI developers are ready to help. Explore Anchor AI
          development services tailored to your industry:
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800 py-6">
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiDevIndustry;
