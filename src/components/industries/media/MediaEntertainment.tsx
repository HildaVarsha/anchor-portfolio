import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";
const services = [
  {
    title: "Streamline content production",
    description:
      "Workflow automation software and  Production scheduling and management software",
  },
  {
    title: "Optimize content distribution",
    description:
      " Video hosting software,Over-the-top streaming software and Social media apps",
  },
  {
    title: "Improve collaboration",
    description: " Digital asset management software and  Cont",
  },
  {
    title: "Tap into audience and content intelligence",
    description:
      "CRM software,BI and data visualization software and AI-powered analytics software",
  },
];

const MediaEntertainment = () => {
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Media and entertainment solutions
          <span className="text-amber-400"> {""} for every need</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          As audiences have more choice than ever, media and entertainment
          companies need an edge. We craft powerful media and entertainment
          solutions that win you a competitive advantage.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <GetHireButton />
        </div>
      </div>
    </div>
  );
};

export default MediaEntertainment;
