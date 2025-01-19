import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Healthcare providers",
    description:
      "Our healthcare software development company supports the implementation of EMR/EHR systems, practice and lab management solutions, hospital asset tracking, remote patient monitoring (RPM), point of care (POC), and population health management (PHM) technologies.",
  },
  {
    title: "Pharmaceutical and biotech companies",
    description:
      "We design and tailor healthcare software for clinical trials, drug development, production, and distribution. Our solutions include simulation and data visualization tools, ERP systems, accounting software, as well as standalone apps and integrated software ecosystems to support research and development (R&D) efforts.",
  },
  {
    title: "Medical device manufacturers",
    description:
      "Our healthcare software development team enhances hospital-grade and consumer devices by creating embedded systems, mobile/web/cloud-based management solutions, and AI-powered data analytics tools.",
  },
  {
    title: "Digital health startups",
    description:
      "Collaborate with ITRex to develop telehealth and telemedicine platforms, wellness technologies, including Femtech and Baby Tech products, and software solutions for diagnostic and assistive devices.",
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
          At our healthcare software development company, we continuously
          explore the latest technology trends to implement innovative solutions
          that drive success for our clients.
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
