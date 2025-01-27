import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "ITRex specializes in AI solutions, leveraging expertise in machine learning, deep learning, computer vision, and NLP. We not only build tailored AI systems but also scale them across multiple functions and ensure they deliver measurable benefits right from the start. Whether it’s preparing data for custom model development or addressing algorithmic biases, we’re ready to assist!",
  },
  {
    title: "Internet of Things",
    description:
      "Our IoT expertise spans sensors, development boards, data protocols, and network standards — including MQTT, Zigbee, and LoRaWAN. We design custom IoT platforms built on AWS, Microsoft Azure, and Google Cloud. Additionally, we create embedded software and intuitive user interfaces to turn your equipment and assets into valuable data sources, unlocking new insights.",
  },
  {
    title: "Advanced Data Analytics",
    description:
      "To harness the power of predictive and prescriptive analytics, we focus on deep, high-quality data — contextualized and actionable insights drawn from various sources within your IT ecosystem. Work with ITRex to build integrated data environments that are user-friendly and enable data-driven decisions across your entire organization.",
  },
  {
    title: "Intelligent Automation",
    description:
      "From creating embedded applications and back-office systems for industrial robots to enhancing your eProcurement and order management systems with RPA bots, we simplify manufacturing and supply chain processes. The result is reduced operational costs, faster delivery times, and enhanced operational resilience.",
  },
  {
    title: "Extended Reality",
    description:
      "At the crossroads of the digital and physical worlds, ITRex excels in metaverse technologies, including virtual and augmented reality. We help you develop and implement AR solutions for industrial applications such as product design, assembly, remote assistance, and immersive training environments.",
  },
  {
    title: "Digital Twins",
    description:
      "Partner with ITRex to create digital replicas of your critical assets and model complex scenarios before transforming your operations or adopting new technologies. Our digital twins leverage real-time operational data to simulate the movement of goods across the entire supply chain — from manufacturing plants to warehouses and transportation systems.",
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
          <p
            className="text-5xl mx-auto font-bold max-w-4xl"
            data-aos="fade-up"
          >
            Our manufacturing and supply
            <span className="text-green-500 text-5xl mx-auto font-bold max-w-4xl">
              chain software development capabilities
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-green-500">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-green-500 p-4 text-slate-800"
          data-aos="fade-up"
        >
          We don’t just digitalize processes — we fully transform manufacturing
          and supply chain operations. To help you navigate shifting stakeholder
          demands while reducing operational costs and maintaining efficiency,
          ITRex leverages a range of cutting-edge technologies, including:
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
