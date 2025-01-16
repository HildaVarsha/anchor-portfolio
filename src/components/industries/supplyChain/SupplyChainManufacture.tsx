import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "As a company with expert knowledge of machine learning, deep learning, computer vision, and NLP, ITRex will not only develop an AI solution but also scale it across multiple processes and use cases and ensure it brings tangible value from day one. Whether you need to prepare quality data for custom model training or eradicate algorithmic bias, we’re here to help!",
  },
  {
    title: "Internet of Things",
    description:
      "Our IoT know-how includes sensors and development boards, data and network protocols —from MQTT to Zigbee and LoRaWAN — and custom IoT platforms based on AWS, Microsoft Azure, and Google Cloud. Additionally, we’ll develop embedded software and robust user interfaces to turn your machinery and assets into a wealth of data — and a wealth of insights.",
  },
  {
    title: "Advanced Data Analytics",
    description:
      "To combat data deluge and tap into predictive and prescriptive analytics, we use deep data — high-quality, contextualized, and actionable operational data aggregated from multiple sources within your IT infrastructure. Contact ITRex to develop integrated data ecosystems that are accessible and empower intelligent decision-making across your enterprise.",
  },
  {
    title: "Intelligent Automation",
    description:
      "From creating embedded apps and back-office systems supporting the smooth functioning of industrial robots to infusing your eProcurement and order management software with RPA bots, we know how to take the complexity out of manufacturing and supply chain operations. And this translates into lower operating costs, improved delivery time, and greater resilience.",
  },
  {
    title: "Extended Reality",
    description:
      "Operating at the intersection of digital and physical worlds, ITRex has a knack for metaverse-enabling technologies, including virtual and augmented reality. We can assist you in developing and implementing industrial AR solutions for product design and assembly, remote guidance systems, and complete immersive training environments.",
  },
  {
    title: "Digital Twins",
    description:
      "Collaborate with ITRex to create digital replicas of your high-value assets and model complex scenarios before revamping your operations and adopting new technologies! Digital twins feed off your operational data to simulate the flow of goods across the supply chain — from manufacturing facilities to warehouses and transportation networks.",
  },
];

const SupplyChainManufacture = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/technology-with.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p className="text-5xl mx-auto font-bold max-w-4xl">
            Our manufacturing and supply
            <span className="text-amber-400 text-5xl mx-auto font-bold max-w-4xl">
              chain software development capabilities
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div className="px-4 md:px-0 md:container mx-auto bg-amber-400 p-4 text-slate-800">
          We do not merely digitalize processes — we completely reimagine
          manufacturing and supply chain operations. To help you balance the
          evolving stakeholder expectations while cutting down operational costs
          and maintaining operational efficiency, ITRex utilizes a set of
          innovative technologies, including:
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-slate-800">
          {services?.map((service, index) => (
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

export default SupplyChainManufacture;
