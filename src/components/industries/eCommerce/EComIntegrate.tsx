import { ServicesCard } from "@/components/componentShared";
import React from "react";
const services = [
  {
    title: "ERP Integration",
    description: "Streamline catalog management for better efficiency.",
  },
  {
    title: "CRM Integration",
    description:
      "Gain instant access to customer information for personalized service.",
  },
  {
    title: "Payment Gateways",
    description:
      "Process payments quickly and securely for smooth transactions.",
  },
  {
    title: "Analytics and Reporting",
    description: "Get immediate business insights to inform decision-making.",
  },
  {
    title: "Marketing Automation",
    description: "Expand your reach and automate marketing efforts.",
  },
  {
    title: "POS",
    description:
      "Eliminate manual data entry while reducing errors with efficient point-of-sale systems.",
  },
  {
    title: "Online Chats and Help Desks",
    description:
      "Provide real-time support for customers through integrated chat and help desk solutions.",
  },
  {
    title: "Other Third-Party Apps",
    description: "Customize solutions to meet your unique business needs.",
  },
];

const EComIntegrate = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ecom-integrate.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Integrate all your systems
          <span className="text-green-500 pl-2">
            {" "}
            with custom ecommerce solutions
          </span>
        </p>
      </div>
      <div className="py-12 bg-green-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Seamless integration of your ecommerce website with the right blend of
          back-office systems is crucial to delivering exceptional customer
          experiences and real-time analytics. We have assisted numerous brands
          in building top-tier digital ecosystems, where applications work
          harmoniously together, and we're here to guide you in the right
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

export default EComIntegrate;
