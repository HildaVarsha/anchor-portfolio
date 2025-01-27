import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Customer profile and relationship management solutions",
    description:
      "We build comprehensive retail solutions that consolidate data from various sources, such as retail CRMs, eCommerce sites, and social media, to provide a holistic view of your customers. This enables you to deliver personalized offers based on their purchase history, shopping behavior, and conversion data.",
  },
  {
    title: "Loyalty solutions",
    description:
      "We create loyalty, referral, and partnership programs through a unified solution that includes customer account management, loyalty analytics, mobile access, and personalized notifications. Our retail loyalty solutions integrate seamlessly with key retail systems like ERP and POS.",
  },
  {
    title: "In-store engagement solutions",
    description:
      "We offer retail software development services that include apps, chatbots, and virtual assistants to engage customers with tailored notifications during their shopping experience, develop real-time marketing campaigns, provide instant support through conversational interfaces, and enhance upselling strategies.",
  },
];

const RetailEngagging = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/retail-engage.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p
            className="text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            Orchestrate engaging
            <span className="text-lime-500 text-5xl mx-auto font-bold pl-2">
              customer experience
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-lime-500">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-lime-500 p-4 text-slate-800"
          data-aos="fade-up"
        >
          Our retail software solutions empower your business to better
          understand your customers' desires, foster loyalty through
          personalized offers, encourage repeat purchases, and enhance the
          in-store experience.
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 text-slate-800">
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

export default RetailEngagging;
