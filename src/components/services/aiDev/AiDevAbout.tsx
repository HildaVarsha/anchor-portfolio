import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "AI consulting",
    description:
      "Our AI development consultants work hand-in-hand with your team to analyze your business requirements, uncover valuable AI opportunities, assess your current IT infrastructure's capabilities, and design a tailored AI strategy focused on delivering impactful, measurable outcomes.",
  },
  {
    title: "AI proof of concept (PoC)",
    description:
      "Before initiating AI development, we collaborate with your company's stakeholders to identify high-potential use cases, set clear performance metrics, design experimental frameworks, and evaluate the outcomes. This process ensures a strong foundation for successful large-scale AI implementation.",
  },
  {
    title: "AI app development",
    description:
      "We develop scalable AI applications that seamlessly integrate with your existing infrastructure, delivering actionable insights, streamlining processes, and enhancing decision-making. Our expertise spans a wide range of solutions, including chatbots, recommendation systems, computer vision technologies, and more!",
  },
  {
    title: "AI model training",
    description:
      "Our AI development services focus on training advanced models that efficiently process data, deliver precise predictions, and adapt through autonomous learning or human input. We consistently optimize these models to enhance their performance and ensure alignment with your business goals.",
  },
  {
    title: "Post-launch support",
    description:
      "At Anchor Informatics, our AI development services extend beyond deployment. We provide ongoing post-launch support to monitor your AI systems, ensuring they evolve with your business needs and maintain peak performance. If you choose to expand AI to other use cases, our expert developers are ready to assist!",
  },
  {
    title: "AIOps",
    description:
      "We integrate AI-driven automation (AIOps) into your IT operations to boost operational efficiency, quickly detect anomalies, predict potential issues before they arise, and respond to incidents more effectively using predictive analytics.",
  },
];

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <p className="font-semibold text-blue-600">{title}</p>
    <p className="pt-6">{description}</p>
  </div>
);

const AiDevAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Unleashing the Power of AI with Expert Solutions" />
        <p>
          At Anchor, we provide a full range of AI development services designed
          to empower your business with the capabilities of artificial
          intelligence. Whether you&apos;re beginning your AI journey or aiming
          to enhance and streamline existing solutions, our team of experts is
          here to support you every step of the way.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
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

export default AiDevAbout;
