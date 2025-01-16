import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Order management solutions",
    description:
      "Our retail software company creates applications that help align inventory and orders across multiple channels, set up compound shipping schedules, manage order profiles, and tap into insightful reporting and analytics.",
  },
  {
    title: "On-demand delivery solutions",
    description:
      "Our retail software development services will help you make delivery a seamless part of the customer experience. We develop delivery apps featuring route planning, real-time order tracking, fleet capacity optimization, and other competitive functionality.",
  },
  {
    title: "Supply chain management solutions",
    description:
      "We’ll help you handle the flow of goods from suppliers all the way to end customers, optimize purchasing and procurement, tendering and acquisition, fleet and warehouse management, as well as product distribution and merchandise.",
  },
  {
    title: "Billing and accounting solutions",
    description:
      "Upgrade payment processing with software that allows fast handling of point-of-sale transactions, supports automated invoicing and configurable discount schemes, and integrates smoothly with CRM, SCM, and other essential retail systems.",
  },
];

const RetailBoost = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/retail-boost.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p className="text-5xl mx-auto font-bold container">
            Boost retail and wholesale
            <span className="text-amber-400 text-5xl mx-auto font-bold container pl-2">
              operations
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto bg-amber-400 p-4 text-slate-800">
          With our retail software development services, you can empower your
          business with tools that make it easier to manage orders and payments,
          as well as optimize and even automate sourcing, procurement, and
          distribution operations.
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2  gap-12 text-slate-800">
          {services?.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
          <GetHireButton />
        </div>
      </div>
    </div>
  );
};

export default RetailBoost;
