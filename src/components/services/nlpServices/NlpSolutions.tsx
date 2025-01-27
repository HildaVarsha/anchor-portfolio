import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Document Mining",
    description:
      "Extract valuable insights from unstructured documents such as emails, social media posts, or PDFs.",
  },
  {
    title: "Insightful Text Analytics",
    description:
      "Leverage machine learning for keyword extraction, named entity recognition, part-of-speech tagging, classification, and more to improve document management or spam detection.",
  },
  {
    title: "Summarization",
    description:
      "Transform large datasets into concise, actionable summaries for easier analysis and understanding.",
  },
  {
    title: "Intelligent Search",
    description:
      "Enhance search functionality with semantic technology that goes beyond keywords, understanding user intent and context.",
  },
  {
    title: "Speech Recognition",
    description:
      "Enable your application to respond to voice commands and answer spoken questions.",
  },
  {
    title: "Conversational UI",
    description:
      "Develop a chatbot to create a new distribution channel, improve customer service, or boost brand promotion.",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Analyze the attitudes and emotions expressed in messages from various sources, including social media feeds, reviews, responses, and more.",
  },
  {
    title: "Natural Language Generation",
    description:
      "Produce consistent, high-quality language in your communications while automating reporting and creating repetitive content.",
  },
];

const NlpSolutions = () => {
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
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our NLP solutions connect
          <span className="text-lime-500">
            {" "}
            {""} human language with technology.
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a top AI consulting firm , Anchor’s can find an exact answer to
          your NLP needs.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NlpSolutions;
