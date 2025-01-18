import { PageHeaderText } from "@/components/shared";
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

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <p className="font-semibold text-blue-600">{title}</p>
    <p className="pt-6">{description}</p>
  </div>
);

const HealthCareAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Custom healthcare software development for every need" />
        <p data-aos="fade-up">
          A healthcare software development company with a rich portfolio, ITRex
          offers end-to-end medical software development services to healthcare
          providers, pharmaceutical companies, digital health startups, and
          medical device manufacturers. To create healthcare IT solutions that
          would benefit your organization, we always put security first, ensure
          healthcare data interoperability, and follow UI/UX best practices.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

export default HealthCareAbout;
