import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Customer profile and relationship management solutions",
    description:
      "We develop full-featured retail solutions that let you merge the data about your customers’ purchase and conversion history, shopping behavior, and other data from multiple sources like retail CRM, ecommerce sites, and social media to gain a comprehensive view of your customers and reach them with personalized offers.",
  },
  {
    title: "Loyalty solutions",
    description:
      "Manage loyalty, referral, and partnership programs via a single solution featuring customer account management, loyalty analytics, mobile access, personalized notifications, and more. Retail loyalty solutions we build seamlessly integrate with vital retail systems, like ERP and POS, too.",
  },
  {
    title: "In-store engagement solutions",
    description:
      "We extend our retail software development services to creating apps, chatbots, and virtual assistants that let you reach out to customers with tailored notifications as they shop; develop real-time marketing campaigns; answer customers’ questions via conversational interfaces; upsell effectively.",
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
            <span className="text-amber-400 text-5xl mx-auto font-bold pl-2">
              customer experience
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-amber-400 p-4 text-slate-800"
          data-aos="fade-up"
        >
          With our retail software services, you can augment your business with
          retail software solutions that let you dig into your customers’
          wishes, breed loyalty with personalized offers, encourage repeat
          purchases, and boost the in-store experience.
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
