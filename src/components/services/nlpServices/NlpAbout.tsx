import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Dig up insights",
    description:
      "Hidden within your cross-functional documents and unstructured data, such as emails, customer support tickets, product reviews, social media, and more.",
  },
  {
    title: "Make document processing easier",
    description:
      "by automatically extracting crucial data such as key phrases, sentiment, and topics",
  },
  {
    title: "Stand out from the competition",
    description:
      "by developing a domain-specific ML model tailored to your needs, delivering superior speed, accuracy, and cost-efficiency compared to standard solutions.",
  },
  {
    title: "Keep your sensitive data secure",
    description: "By detecting and removing personal information",
  },
];

const NlpAbout = () => {
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
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Use our NLP services to your company’s strategic advantage" />
        <p>
          Encompassing AI, generative AI , ML, deep learning, natural language{" "}
          understanding, knowledge graph technology, and beyond, our natural
          processing solutions can help your business:
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

export default NlpAbout;
