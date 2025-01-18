import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Healthcare providers",
    description:
      "Our healthcare software development company will assist you in implementing EMR/EHR, practice and laboratory management, hospital asset tracking, remote patient monitoring (RPM), point of care (POC), and population health management (PHM) solutions.",
  },
  {
    title: "Pharmaceutical and biotech companies",
    description:
      "We build and customize healthcare software solutions for clinical trials, drug development, production, and distribution. These include simulation and data visualization tools, ERP systems, and accounting software. We also create standalone apps and entire software ecosystems, facilitating research and development (R&D) activities.",
  },
  {
    title: "Medical device manufacturers",
    description:
      "Our healthcare software development team gives voice and processing power to hospital-grade and consumer devices. To that end, we develop embedded systems, mobile/web/cloud solutions for device management, and AI-driven data analytics tools.",
  },
  {
    title: "Digital health startups",
    description:
      "Partner with ITRex to create telehealth and telemedicine systems, wellness technology solutions, including Femtech and Baby Tech products, and software infrastructure for diagnostic and assistive devices.",
  },
];

const HealthCareTech = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/healthcare-tech.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          The innovative technology we use
        </p>
      </div>
      <div className="py-12 bg-white">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our healthcare software development company is always looking for the
          newest technology trends that we can employ to help our clients
        </p>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0 md:container mx-auto text-slate-800">
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

export default HealthCareTech;
