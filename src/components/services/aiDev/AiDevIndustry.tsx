import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Healthcare & Biotech",
    description:
      "Harness AI-powered healthcare solutions to improve diagnostics, enhance patient care, streamline doctor-patient communication, and optimize hospital operations and population health management.",
  },
  {
    title: "Life Sciences",
    description:
      "Accelerate drug development, explore drug repurposing opportunities, identify promising drug candidates, targets, and biomarkers, and optimize clinical trials with our advanced, user-friendly AI solutions.",
  },
  {
    title: "Finance & Banking",
    description:
      "Streamline banking and financial processes, reduce operational costs, enhance security, and unlock the full potential of intelligent financial management and banking solutions.",
  },
  {
    title: "Retail & eCommerce",
    description:
      "Accelerate decision-making, improve demand forecasting, streamline inventory management, optimize product flow, and gain valuable customer insights with AI-powered retail solutions.",
  },
  {
    title: "Supply Chain & Logistics",
    description:
      "Achieve complete control over shipments, reduce paperwork, and optimize vendor communication, deliveries, and warehousing operations with AI-driven software solutions.",
  },
  {
    title: "Education & eLearning",
    description:
      "Leverage AI to personalize learning experiences, create engaging educational content, automate administrative tasks, and improve access to quality education for students with special needs.",
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
    <div data-aos="fade-up">
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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Industry-Specific
          <span className="text-green-500">AI Development Services</span>
        </p>
      </div>
      <div className="py-12 bg-green-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you're aiming to automate back-office operations, improve
          customer experience, enhance security, or develop an innovative
          software product, our AI developers are here to assist. Discover
          Anchor's AI development services, customized for your industry:
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
