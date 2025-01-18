import { ServicesCard } from "@/components/componentShared";
import React from "react";
const services = [
  {
    title: "ERP integration",
    description: "for streamlined catalog management",
  },
  {
    title: "CRM integration",
    description: "to get instant access to customer information",
  },
  {
    title: "Payment gateways",
    description: "to process payments swiftly and securely",
  },
  {
    title: "Analytics and reporting",
    description: "for immediate business insights",
  },
  {
    title: "Marketing automation",
    description: "to expand your reach",
  },
  {
    title: "POS",
    description: "to eliminate manual entry of data while reducing errors",
  },
  {
    title: "Online chats and help desks",
    description: "for real-world support of customers",
  },
  {
    title: "Other third party apps",
    description: "to meet your unique business needs",
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
          <span className="text-amber-400 pl-2">
            {" "}
            with custom ecommerce solutions
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Seamless integration of your ecommerce website with the right mix of
          back-office systems is what makes or breaks customer experience and
          real-time analytics. We have helped dozens of brands to build top
          digital ecosystems where apps work happily together, and are here to
          guide you in the right direction.
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
