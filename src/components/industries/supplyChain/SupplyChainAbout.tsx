import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Create a fail-proof digital strategy",
    description:
      "Increase the productivity and effectiveness of manufacturing and supply chain management processes with ITRex. Our business analysts will join forces with A-list software architects and R&D specialists to devise an all-encompassing digital transformation strategy for your company — and validate it through research and proof of concepts (POCs).",
  },
  {
    title: "Venture into Industry 5.0",
    description:
      "We’ll help you create an Industry 5.0 environment where humans work alongside AI-powered machines to increase your throughput and build resilience. For this, we use a potent mix of the Internet of Things, artificial intelligence, intelligent and robotic process automation, data science, and extended reality technologies.",
  },
  {
    title: "Achieve 360-degree supply chain visibility",
    description:
      "ITRex breaks silos in complex, increasingly distributed supply chains to ensure real-time visibility into your operations — from goods production to warehousing and delivery. We do that by interconnecting your technology systems on the API and interface levels and tapping into advanced analytics to align supply with demand and anticipate market trends.",
  },
  {
    title: "Foster sustainability",
    description:
      "Become a more agile and flexible organization while making a positive impact on society and the planet! ITRex will reduce your company’s carbon footprint by retrofitting legacy equipment with smart sensors, accurately forecasting demand to avoid overproduction, and upgrading your transport fleet with telematics solutions.",
  },
];

const SupplyChainAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Tailored offering for manufacturing and supply chain companies" />
        <p data-aos="fade-up">
          To help your company navigate the post-pandemic recession and ride the
          wave of digital disruption, ITRex uses an interdisciplinary approach
          spanning business analysis, technology consulting, custom software
          engineering, IT infrastructure modernization, and expert maintenance.
          Partner with us to:
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
