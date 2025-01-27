import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Order management solutions",
    description:
      "Our retail software solutions help align inventory and orders across multiple channels, set up complex shipping schedules, manage order profiles, and provide valuable reporting and analytics.",
  },
  {
    title: "On-demand delivery solutions",
    description:
      "We develop seamless delivery apps that enhance the customer experience, featuring route planning, real-time order tracking, fleet capacity optimization, and other advanced features.",
  },
  {
    title: "Supply chain management solutions",
    description:
      "We assist in managing the flow of goods from suppliers to customers, optimizing purchasing, procurement, tendering, fleet and warehouse management, as well as product distribution and merchandising.",
  },
  {
    title: "Billing and accounting solutions",
    description:
      "We upgrade payment processing with software that enables quick point-of-sale transactions, automated invoicing, configurable discount schemes, and smooth integration with CRM, SCM, and other retail systems.",
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
          <p
            className="text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            Boost retail and wholesale
            <span className="text-green-500 text-5xl mx-auto font-bold container pl-2">
              operations
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-green-500">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-green-500 p-4 text-slate-800"
          data-aos="fade-up"
        >
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
