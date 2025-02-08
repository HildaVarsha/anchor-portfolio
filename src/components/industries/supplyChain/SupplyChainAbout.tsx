import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Create a fail-proof digital strategy",
    description:
      "Boost the productivity and efficiency of your manufacturing and supply chain management with ITRex. Our team of business analysts will collaborate with top-tier software architects and R&D experts to design a comprehensive digital transformation strategy for your company, validating it with research and proof of concepts (POCs).",
  },
  {
    title: "Venture into Industry 5.0",
    description:
      "We help you build an Industry 5.0 ecosystem where humans and AI-powered machines work together to enhance productivity and resilience. By combining the Internet of Things, AI, intelligent automation, data science, and extended reality, we pave the way for next-gen operations.",
  },
  {
    title: "Achieve 360-degree supply chain visibility",
    description:
      "ITRex removes barriers in complex, distributed supply chains to provide real-time visibility across your entire operation — from production to warehousing to delivery. We achieve this by seamlessly integrating your tech systems through APIs and interfaces and utilizing advanced analytics to match supply with demand and foresee market trends.",
  },
  {
    title: "Foster sustainability",
    description:
      "Become a more flexible, agile organization while contributing positively to society and the environment! ITRex helps reduce your carbon footprint by upgrading legacy equipment with smart sensors, accurately forecasting demand to prevent overproduction, and modernizing your transport fleet with telematics solutions.",
  },
];

const SupplyChainAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Tailored offering for manufacturing and supply chain companies" />
        <p data-aos="fade-up">
          To help your company navigate the post-pandemic recession and ride the
          wave of digital disruption, ITRex uses an interdisciplinary approach
          spanning business analysis, technology consulting, custom software
          engineering, IT infrastructure modernization, and expert maintenance.
          Partner with us to:
        </p>

        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {services?.map((service, index) => (
            <ServicesCard
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

export default SupplyChainAbout;
