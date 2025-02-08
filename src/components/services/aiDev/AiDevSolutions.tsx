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
      title: "Automation of Manual Tasks",
      description:
        "We provide optical character recognition (OCR) and data capture solutions that extract information from documents, eliminating the need for manual processes.",
    },
    {
      title: "Facial Recognition",
      description:
        "We offer person identification solutions using live captures and digital images for biometric authentication, access control, and various security applications.",
    },
    {
      title: "Image Data Labeling",
      description:
        "We develop deep learning models that automatically detect and label people and objects in images and videos.",
    },
    {
      title: "Human Activity Recognition",
      description:
        "We build intelligent models for recognizing human posture, applicable in sports training, surveillance, healthcare, and various other industries.",
    },
    {
      title: "Object Detection",
      description:
        "We create advanced algorithms for detecting and identifying objects in images and videos, used in retail analytics, autonomous vehicles, and smart surveillance systems.",
    },
    {
      title: "Pattern Recognition",
      description:
        "We design AI systems that recognize patterns in data, enabling predictive analytics, anomaly detection, and personalized recommendations.",
    },
  ];

  const emotionServices = [
    {
      title: "Speech Recognition",
      description:
        "We offer real-time speech processing and voice interfaces to automate routine tasks and enhance user experiences.",
    },
    {
      title: "Semantic Search",
      description:
        "We develop advanced NLP-powered algorithms to provide search results that accurately match a user's intent.",
    },
    {
      title: "Text Classification",
      description:
        "We use NLP techniques to categorize emails, posts, and other text data for sentiment analysis, topic labeling, and spam detection.",
    },
    {
      title: "Emotion Recognition",
      description:
        "We analyze images and videos to detect and recognize emotions, giving you deeper insights into how customers react to your products and services.",
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
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Artificial Intelligence
          <span className="text-lime-500">solutions we Create</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As an AI software development company, we are dedicated to leveraging
          the transformative power of artificial intelligence to drive business
          success. Explore a range of AI use cases that highlight our expertise.
          From optimizing operations to increasing profits, our custom AI
          development services deliver measurable growth and outstanding
          results.
        </p>
      </div>
      <div className="px-4 lg:container mx-auto text-slate-800 py-6">
        <PageHeaderText label="AI Solutions for Analyzing and Understanding the Physical World" />
        <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <PageHeaderText label="AI Solutions for Understanding Human Language and Emotions" />
        <div className="py-6 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
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
