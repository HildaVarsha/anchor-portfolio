import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Virtual try-on solutions",
    description:
      "Our retail software development services include implementing VR and AR-powered solutions, like virtual fitting rooms and product catalogs, for buyers to get a sense of how a particular product looks or fits without touching it.",
  },
  {
    title: "Self-checkout solutions",
    description:
      "Our retail software company develops software for self-service kiosks, shopping carts, and self-checkout systems with secure contactless payments to let your customers pay for the goods fast and without queueing.",
  },
  {
    title: "AI-powered video analytics and foot traffic analysis",
    description:
      "We develop AI-powered software for CCTV cameras and sensor-based IoT systems that can analyze customer flow and foot traffic patterns in real time to detect and prevent crowding.",
  },
];

const RetailOvercome = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/retail-overcome.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p
            className="text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            Overcome the aftermath of the pandemic
            <span className="text-amber-400 text-5xl mx-auto font-bold pl-2">
              and reopen safely
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto bg-amber-400 p-4 text-slate-800">
          <p data-aos="fade-up">
            With brick-and-mortar stores reopening, retailers need to make sure
            offline shopping is safe and enjoyable. We empower the retail
            industry with software solutions that do just that.
          </p>
          <p className="pt-6" data-aos="fade-up">
            Our custom retail software solutions will help you inform your
            customers about safety regulations, make sure they follow precaution
            measures, and prevent crowding through self-service and
            self-checkout experiences.
          </p>
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

export default RetailOvercome;
