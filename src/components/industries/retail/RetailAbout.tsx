import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Custom retail solutions",
    description:
      "We help you embrace omnichannel retail with a customized solution that seamlessly integrates into your existing tech infrastructure, fully supporting your retail, wholesale, and dealership management operations.",
  },
  {
    title: "Platform-based retail solutions",
    description:
      "We assist in selecting the right platform to address your business challenges, implement necessary customizations, and integrate the solution with your existing corporate software.",
  },
  {
    title: "Integration of custom solutions",
    description:
      "With our expertise in retail software development and integration, we ensure your retail ecosystem is cohesive and interoperable, bringing together various systems and applications.",
  },
];

const RetailAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Flexible retail software development services" />
        <p data-aos="fade-up">
          With over 13 years of experience in retail software development, we
          offer full-stack capabilities to help you navigate the wave of digital
          transformation in retail. Whether you’re looking to develop a custom
          retail solution, customize an existing platform, or integrate various
          solutions into a unified retail ecosystem, we’re ready to take on the
          challenge.
        </p>

        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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

export default RetailAbout;
