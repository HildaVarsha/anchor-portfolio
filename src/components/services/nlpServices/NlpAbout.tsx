import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Uncover insights",
    description:
      "Hidden within your cross-functional documents and unstructured data, such as emails, customer support tickets, product reviews, social media, and more.",
  },
  {
    title: "Simplify document processing",
    description:
      "By automatically extracting critical data like key phrases, sentiment, and topics.",
  },
  {
    title: "Gain a competitive edge",
    description:
      "By developing a domain-specific ML model tailored to your needs, providing superior speed, accuracy, and cost-efficiency compared to generic solutions.",
  },
  {
    title: "Ensure data security",
    description: "By detecting and eliminating personal information.",
  },
];

const NlpAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Use our NLP services to your company’s strategic advantage" />
        <p data-aos="fade-up">
          Covering AI, generative AI, ML, deep learning, natural language
          understanding, knowledge graph technology, and more, our natural
          processing solutions can empower your business to:
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

export default NlpAbout;
