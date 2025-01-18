import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "ML Consulting",
    description:
      "With experience in dozens of ML projects, our expert consultants can guide you toward an ML solution that delivers maximum impact for your business. From assessing your data and selecting the optimal ML approach to ensure the highest ROI, to scoping, developing PoCs, and creating user-facing prototypes, we provide comprehensive support every step of the way.",
  },
  {
    title: "ML Development",
    description:
      "As part of our comprehensive full-stack machine learning development services, our data scientists manage all data-related tasks, including labeling. We design and validate custom ML models, ensuring seamless deployment. Additionally, we integrate ML algorithms into infrastructure—whether cloud, mobile, or edge—to deliver a fully operational ML solution.",
  },
  {
    title: "ML Integration",
    description:
      "Our experienced machine learning developers specialize in seamlessly integrating neural networks and advanced ML algorithms into your business applications, enterprise systems, or workflows. Tap into our expertise to deploy ML solutions that transform experiences and optimize operations.",
  },
];

const MachineLearningAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Comprehensive ML Development Services" />
        <p data-aos="fade-up">
          As a leading machine learning development company, Anchor combines
          robust ML expertise and engineering capabilities to help your business
          innovate with a cutting-edge machine learning solution.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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

export default MachineLearningAbout;
