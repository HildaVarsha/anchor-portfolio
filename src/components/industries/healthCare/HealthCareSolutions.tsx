import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Turnkey projects",
    description:
      "Our healthcare software development company takes over medical software development projects from start to finish, from the discovery phase and proof of concept up to organization-wide deployment and ongoing maintenance—all under one roof",
  },
  {
    title: "Expert advice on next-gen tech",
    description:
      "We consult our clients on best practices around digital transformation, cloud computing, DevOps, artificial intelligence implementation, data management, data analytics.",
  },
  {
    title: "Third-party solutions integration",
    description:
      "We help medical practices seamlessly integrate third-party applications and make sure they are secure and interoperable with their existing workflows. Our healthcare software development services also include customizing ready-made solutions to fit our clients’ business needs.",
  },
  {
    title: "Legacy systems modernization",
    description:
      "Our healthcare software solutions development company can revamp your legacy applications or fully rebuild them from scratch using a modern tech stack. Regardless of the approach you choose, we will deliver a more secure, compliant, and user-friendly version of your legacy system.",
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
          <span className="text-amber-400">software development services</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We provide a wide range of medical software engineering services,
          including prototyping, development, deployment, post-launch
          maintenance, upgrade of medical apps, and integration with third-party
          systems. We offer different types of engagement models, from taking
          full charge of your project to allocating a dedicated team that
          operates under your supervision.
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
