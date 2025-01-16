import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Custom retail solutions",
    description:
      "We’ll help you embrace omnichannel with a tailored solution that integrates seamlessly into your tech infrastructure and fully supports your retail, wholesale, and dealership management operations.",
  },
  {
    title: "Platform-based retail solutions",
    description:
      "We’ll help you choose the right platform to address your business’ pain points, implement all the needed customizations, and integrate the solution with the available corporate software.",
  },
  {
    title: "Integration of custom solutions",
    description:
      "We’ll leverage our expertise in retail software development and integration to make sure your retail ecosystem is consistent and interoperable, bringing together multiple systems and apps.",
  },
];

const RetailAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Flexible retail software development services" />
        <p>
          A retail software development company with 13+ years of experience, we
          have full-stack capabilities to help you ride the crest of digital
          transformation in retail. Whether you’re about to develop a custom
          retail solution, customize an existing retail platform, or integrate
          several disparate solutions into a coherent retail ecosystem, we’re up
          for the challenge.
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
