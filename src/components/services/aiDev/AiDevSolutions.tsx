import { PageHeaderText } from "@/components/shared";
import React from "react";

const AiDevSolutions = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-aos="fade-up">
      <p className="font-semibold">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  const services = [
    {
      title: "Manual task automation",
      description:
        "We offer optical character recognition (OCR) and data capture solutions that extract information from documents, eliminating the need for manual processes.",
    },
    {
      title: "Facial recognition",
      description:
        "We provide person identification solutions using live captures and digital images for biometric authentication, access control, and various security applications.",
    },
    {
      title: "Image data labeling",
      description:
        "We develop deep learning models that automatically detect and label people and objects in images and videos.",
    },
    {
      title: "Human activity recognition",
      description:
        "We develop intelligent models for human posture recognition, applicable in sports training, surveillance, healthcare, and various other industries.",
    },
    {
      title: "Object detection",
      description:
        "We create advanced algorithms for object detection and identification in images and videos, applied in retail analytics, autonomous vehicles, and smart surveillance systems.",
    },
    {
      title: "Pattern recognition",
      description:
        "Advanced AI systems that identify patterns in data, enabling predictive analytics, anomaly detection, and personalized recommendations.",
    },
  ];
  const emotionServices = [
    {
      title: "Speech recognition",
      description:
        "We provide real-time speech processing and voice interfaces to automate routine tasks and elevate the user experience.",
    },
    {
      title: "Semantic search",
      description:
        "Advanced NLP-powered algorithms designed to deliver search results that accurately align with a user's intent.",
    },
    {
      title: "Text classification",
      description:
        "NLP-powered categorization of emails, posts, and other text data for sentiment analysis, topic labeling, and spam detection.",
    },
    {
      title: "Emotion recognition",
      description:
        "We analyze images and videos to detect and recognize emotions, helping you gain deeper insights into your customers' reactions to your products and services.",
    },
  ];
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-solutions.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Artificial Intelligence
          <span className="text-amber-400">solutions we Create</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As an AI software development company, we are committed to the
          transformative power of artificial intelligence in driving business
          success. Explore a variety of AI use cases that showcase our
          expertise. From optimizing operations to boosting profits, our bespoke
          AI development services deliver measurable growth and exceptional
          results.
        </p>
      </div>
      <div className="px-4 md:container mx-auto text-slate-800 py-6">
        <PageHeaderText label="AI Solutions for Analyzing and Understanding the Physical World" />
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <PageHeaderText label="AI Solutions for Understanding Human Language and Emotions" />
        <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {emotionServices.map((service, index) => (
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

export default AiDevSolutions;
