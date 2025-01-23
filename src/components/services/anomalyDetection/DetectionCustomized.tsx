import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";
const services = [
  {
    title: "Healthcare",
    description:
      "We set up healthcare, pharmaceutical, and life sciences technology systems to automatically detect changes in patient vital signs, adverse drug reactions, high-risk patients, equipment malfunctions, and outbreaks of infectious diseases.",
  },
  {
    title: "Manufacturing",
    description:
      "Our tailored anomaly detection solutions focus on assembly verification, surface inspection, process monitoring, and root cause analysis. This helps improve equipment uptime, quality control, energy efficiency, and accident prevention.",
  },
  {
    title: "Retail",
    description:
      "As an anomaly detection company, we help retail and eCommerce businesses identify credit card fraud, enhance security in physical stores, analyze unexpected changes in product demand, detect pricing errors, measure customer satisfaction, and much more!",
  },
  {
    title: "Smart Cities",
    description:
      "Anchor Informatics Ltd helps integrate anomaly detection solutions into smart city systems, including traffic monitoring with sensors and cameras, public safety, energy and waste management, and animal control systems.",
  },
];

const DetectionCustomized = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-aos="fade-up">
      <p className="font-semibold">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Customized Industry-Specific
          <span className="text-amber-400">
            {" "}
            {""} Anomaly Detection Solutions
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you're involved in supply chain management or operate a
          BioTech laboratory, we'll collect data you didn’t know existed,
          distill it into valuable insights, and present the results through
          intuitive user interfaces — from cloud dashboards to voice assistants.
          Our expertise in anomaly detection software spans:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetectionCustomized;
