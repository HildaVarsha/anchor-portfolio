import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechSpectrum = () => {
  const services = [
    {
      title: "End-to-end FinTech software development",
      description:
        "We will accompany you throughout the development process, delivering initial consulting, design, engineering, testing, integration, and deployment of your FinTech solution",
    },
    {
      title: "FinTech software testing",
      description:
        "We will ensure that your FinTech solution runs without glitches, verifying its functionality, performance, security, usability, interoperability, and compliance",
    },
    {
      title: "API-driven software integration",
      description:
        "We will help you smoothly integrate your FinTech solution into the corporate infrastructure, creating a cohesive, interoperable technology environment",
    },
    {
      title: "Legacy software modernization",
      description:
        "We will plan and roll out the necessary upgrades to help you lengthen the lifespan of your software , enhance its functionality, and optimize operational costs",
    },
    {
      title: "FinTech consulting",
      description:
        "We will help you navigate disruption, identify the right opportunity areas, transition to digital-first financial service provisioning, and solve other technology-related tasks along the way",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-end-to-end.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">A full spectrum of financial software</p>
          <p className="text-amber-400" data-aos="fade-up">
            {" "}
            development services
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <p data-aos="fade-up">
            We offer a full spectrum of financial software development services
            to help you realize full value from your investments. Whether you’re
            just embarking on a FinTech journey and need advice on how to
            navigate change, look for a specific skill to fill in knowledge
            gaps, or search for a turnkey FinTech software developer
          </p>
          <p className="pt-6" data-aos="fade-up">
            — we do it all while staying responsive to your needs. We are
            well-versed in:
          </p>
        </div>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-slate-800">
        {services?.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FinTechSpectrum;
