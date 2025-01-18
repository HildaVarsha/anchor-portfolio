import { ServicesCard } from "@/components/componentShared";
import React from "react";
const services = [
  {
    title: "Virtual fitting rooms",
  },
  {
    title: "Product recommendations",
  },
  {
    title: "AR product modelling",
  },
  {
    title: "Voice shopping",
  },
  {
    title: "Immersive product catalog",
  },
  {
    title: "Virtual assistants and chatbots",
  },
  {
    title: "AI-powered smart pricing",
  },
  {
    title: "Predictive customer analytics",
  },
];

const EComAdopt = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ecom-adopt.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          And adopting new tech
          <span className="text-amber-400 pl-2">
            {" "}
            for ecommerce software solutions
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          By empowering ecommerce development services with with battle-proven
          technologies, including Adobe Commerce (ex Magento), we help you push
          the boundaries with big ideas and bold changes to edge out the
          toughest competition.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services?.map((service, index) => (
            <div
              className="text-2xl font-semibold"
              key={index}
              data-aos="fade-up"
            >
              {service?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EComAdopt;
