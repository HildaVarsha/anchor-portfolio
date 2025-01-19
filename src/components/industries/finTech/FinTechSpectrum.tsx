import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechSpectrum = () => {
  const services = [
    {
      title: "End-to-End FinTech Software Development",
      description:
        "We guide you through every step of the development lifecycle, offering consulting, design, engineering, testing, integration, and seamless deployment of your FinTech solution.",
    },
    {
      title: "FinTech Software Testing",
      description:
        "We ensure your FinTech solution operates flawlessly by thoroughly testing its functionality, performance, security, usability, interoperability, and compliance with industry standards.",
    },
    {
      title: "API-Driven Software Integration",
      description:
        "We facilitate the smooth integration of your FinTech solution into your existing corporate infrastructure, creating a unified and interoperable technology ecosystem.",
    },
    {
      title: "Legacy Software Modernization",
      description:
        "We help modernize your legacy systems, enhancing their functionality, extending their lifespan, and optimizing operational costs to keep your technology up to date and competitive.",
    },
    {
      title: "FinTech Consulting",
      description:
        "We guide you through the complexities of FinTech, from identifying growth opportunities and transitioning to a digital-first approach to addressing technology-related challenges along the way.",
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
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container">
          <p data-aos="fade-up">A Full Spectrum of Financial Software</p>
          <p className="text-amber-400" data-aos="fade-up">
            Development Services
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <p data-aos="fade-up">
            We offer a comprehensive range of financial software development
            services, designed to help you unlock the full potential of your
            investments. Whether you’re just starting your FinTech journey, need
            expertise to fill specific knowledge gaps, or are looking for a
            complete, turnkey solution, we are here to help.
          </p>
          <p className="pt-6" data-aos="fade-up">
            We are dedicated to staying responsive to your needs and delivering
            tailored solutions. Our expertise spans across:
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
