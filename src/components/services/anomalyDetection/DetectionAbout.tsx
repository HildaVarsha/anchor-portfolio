import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Cloud Anomaly Detection",
    description:
      "We collect data from your IT infrastructure, including internal software systems, connected devices and assets, and third-party services, then send it to the cloud. There, custom-trained machine learning models analyze the data, detect deviations from a defined baseline, and alert you to take action.",
  },
  {
    title: "Edge Anomaly Detection",
    description:
      "To reduce data latency and cloud infrastructure costs in mission-critical systems like production line monitoring, autonomous vehicles, traffic management, and medical IoT solutions, we configure anomaly detection systems to run directly on the device. Data that doesn't require immediate analysis is securely bulk-uploaded to the cloud for later processing and storage.",
  },
];

const DetectionAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Explore our anomaly detection services" />
        <p data-aos="fade-up">
          Our company excels in cloud computing, artificial intelligence and its
          subsets, data science, and the Internet of Things. Leveraging this
          expertise, Anchor can help you develop anomaly detection
          solutions—whether in the cloud or at the edge. Choose the approach
          that best fits your needs.
        </p>

        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
