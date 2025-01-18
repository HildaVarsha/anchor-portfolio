import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Cloud anomaly detection",
    description:
      "We’ll gather data from throughout your IT infrastructure, including internal software systems, connected devices and assets, and third-party services, and send it to the cloud. Once there, custom-trained machine learning models will analyze the data, identify any deviations from a defined baseline, and alert you to take action.",
  },
  {
    title: "Edge anomaly detection",
    description:
      "To minimize data latency and cloud infrastructure costs in mission-critical systems like production line monitoring, autonomous vehicles, traffic management, and medical IoT solutions, we configure anomaly detection systems to operate directly on the device. Data that doesn’t require immediate analysis is securely bulk-uploaded to the cloud for later processing and storage.",
  },
];

const DetectionAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Explore our anomaly detection services" />
        <p data-aos="fade-up">
          Our company is highly skilled in cloud computing, artificial
          intelligence and its subsets,data science and the Internet of Things.
          With this expertise, Anchors can assist you in developing anomaly
          detection solutions—whether in the cloud or at the edge. Choose the
          approach that suits your needs best.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
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

export default DetectionAbout;
