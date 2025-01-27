import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Comprehensive project execution",
    description:
      "Our healthcare software development firm manages the entire lifecycle of medical software projects, from the initial discovery phase and proof of concept to full-scale deployment and continuous support—everything under one roof.",
  },
  {
    title: "Consulting on next-generation technologies",
    description:
      "We provide expert guidance to our clients on digital transformation strategies, cloud services, DevOps practices, AI implementation, data management, and analytics to help them stay ahead of the curve.",
  },
  {
    title: "Integration of third-party solutions",
    description:
      "We assist medical practices in smoothly integrating third-party applications into their existing systems, ensuring security and seamless interoperability. Additionally, we offer customization of off-the-shelf solutions to meet our clients' specific business requirements.",
  },
  {
    title: "Modernization of legacy systems",
    description:
      "Our healthcare software development company specializes in updating or completely rebuilding outdated legacy systems with modern technologies. No matter the approach, we ensure a more secure, compliant, and user-friendly version of your legacy platform.",
  },
];

const HealthCareSolutions = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/health-care.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our approach to delivering healthcare
          <span className="text-lime-500">software development services</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our medical software engineering services cover a comprehensive
          spectrum, including prototyping, development, deployment, ongoing
          maintenance, app upgrades, and third-party system integrations. We
          offer flexible engagement models, whether you need us to fully manage
          your project or provide a dedicated team that works under your
          direction.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
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

export default HealthCareSolutions;
