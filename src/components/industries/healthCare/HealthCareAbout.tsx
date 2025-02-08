import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Healthcare Providers",
    description:
      "We help healthcare organizations implement comprehensive solutions, including EMR/EHR systems, practice and laboratory management tools, hospital asset tracking, remote patient monitoring (RPM), point-of-care (POC) technologies, and population health management (PHM) platforms.",
  },
  {
    title: "Pharmaceutical and Biotech Companies",
    description:
      "We create and customize software solutions for the pharmaceutical and biotech industries, including clinical trial management, drug development, production, and distribution. Our services include simulation tools, data visualization platforms, ERP systems, and accounting software, as well as standalone apps and integrated software ecosystems to support R&D efforts.",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Our team empowers medical device manufacturers with advanced software solutions, including embedded systems, mobile/web/cloud applications for device management, and AI-driven data analytics tools to enhance performance and reliability.",
  },
  {
    title: "Digital Health Startups",
    description:
      "Collaborate with ITRex to develop cutting-edge telehealth and telemedicine platforms, wellness technologies, including FemTech and BabyTech products, and software infrastructures for diagnostic and assistive devices.",
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
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Custom healthcare software development for every need" />
        <p data-aos="fade-up">
          With a proven track record, ITRex is a healthcare software development
          company that delivers end-to-end solutions for healthcare providers,
          pharmaceutical companies, digital health startups, and medical device
          manufacturers. We prioritize security, ensure seamless healthcare data
          interoperability, and adhere to UI/UX best practices to develop IT
          solutions that truly benefit your organization.
        </p>

        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
