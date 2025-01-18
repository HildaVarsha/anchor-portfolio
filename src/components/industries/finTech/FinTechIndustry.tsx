import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechIndustry = () => {
  const services = [
    {
      title: "Healthcare",
      description:
        "We embed advanced analytics, intelligent automation , and the security of distributed environments into healthcare payment and insurance workflows to help elevate the quality and accessibility of care",
    },
    {
      title: "Banking",
      description:
        "We architect back-office automation and consumer applications for banks to shape new business models, sustain revenues, and create amazing customer experiences",
    },
    {
      title: "Insurance",
      description:
        "We craft software that helps insurance companies track commissions, manage tasks, process claims, create invoices, make payments, and automate other administrative tasks",
    },
    {
      title: "Retail & ecommerce",
      description:
        "We help retail and ecommerce businesses reset sourcing and supply chains, tap into predictive insights, meet shifting consumer expectations, and transform shopping experience across digital channels",
    },
    {
      title: "Logistics & transportation",
      description:
        "We architect software that enhances supply finance and payment management, letting supply chain leaders be responsive to demand and resilient to change, optimize costs, and ensure sustainable growth",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-top-ways.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">Industry-specific FinTech </p>
          <p className="text-amber-400" data-aos="fade-up">
            {" "}
            software development
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our financial software development services integrate tech-savviness
          and industry-specific expertise. We deep dive into the peculiarities
          of your sector to architect a financial software solution that is
          tailored to your needs.
        </div>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-slate-800">
        {services?.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FinTechIndustry;
