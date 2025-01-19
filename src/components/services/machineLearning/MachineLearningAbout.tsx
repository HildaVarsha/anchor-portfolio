import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "ML Consulting",
    description:
      "With extensive experience in numerous ML projects, our expert consultants will help guide you to the ML solution that brings maximum impact to your business. From assessing your data and selecting the best ML approach for the highest ROI, to scoping, developing PoCs, and creating user-facing prototypes, we offer full support throughout the entire process.",
  },
  {
    title: "ML Development",
    description:
      "As part of our comprehensive full-stack machine learning development services, our data scientists handle all data-related tasks, including labeling. We design and validate custom ML models, ensuring smooth deployment. We also integrate ML algorithms into various infrastructures—cloud, mobile, or edge—delivering a fully operational ML solution.",
  },
  {
    title: "ML Integration",
    description:
      "Our seasoned machine learning developers specialize in seamlessly incorporating neural networks and advanced ML algorithms into your business applications, enterprise systems, or workflows. Leverage our expertise to deploy ML solutions that transform user experiences and optimize business operations.",
  },
];

const MachineLearningAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Comprehensive ML Development Services" />
        <p data-aos="fade-up">
          As a leading machine learning development company, Anchor combines
          strong ML expertise and engineering capabilities to help your business
          innovate with a state-of-the-art machine learning solution.
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
