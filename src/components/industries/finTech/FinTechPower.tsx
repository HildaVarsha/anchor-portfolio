import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechPower = () => {
  const services = [
    {
      title: "Blockchain",
      description:
        "We architect decentralized financial applications relying on smart contracts that boast built-in security and immunity to fraud",
    },
    {
      title: "Artificial Intelligence",
      description:
        "We power FinTech solutions with AI to help you make faster, smarter decisions and enable change at scale",
    },
    {
      title: "Robotic Process Automation",
      description:
        "We bring RPA in to help you improve efficiency and productivity, empower employees, and pave new ways for innovation",
    },
    {
      title: "Internet of Things",
      description:
        "We leverage IoT to power financial institutions with security, point-of-sale, and contactless payments solutions",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p>Leverage the power of innovative techs</p>
          <p className="text-amber-400"> to redefine finance</p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <p>
            Innovators at heart, we strongly believe in the power of novel
            technology. We use our expertise in blockchain, smart contracts,
            RPA, and AI development to help you design a new future for finance.
          </p>
          <p className="pt-6">
            We don’t innovate for the sake of it, though. Rather, we treat novel
            technology as a strategic imperative that helps traditional and
            non-traditional financial institutions create value now and shape
            their journeys into the future.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-slate-800">
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

export default FinTechPower;
