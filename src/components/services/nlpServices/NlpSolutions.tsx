import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Document Mining",
    description:
      "Extract valuable insights from unstructured documents like emails, social media posts, or PDFs.",
  },
  {
    title: "Insightful Text Analytics",
    description:
      "Harness machine learning for keyword extraction, named entity recognition, part-of-speech tagging, classification, and more to enhance document management or spam detection.",
  },
  {
    title: "Summarization",
    description:
      "Convert large datasets into actionable summaries for simpler analysis and understanding.",
  },
  {
    title: "Intelligent search",
    description:
      "Transform search with semantic technology that goes beyond keywords, comprehending user intent and context.",
  },
  {
    title: "Speech recognition",
    description:
      "Enable your app to respond to voice commands and answer spoken questions.",
  },
  {
    title: "Conversational UI",
    description:
      "Create a chatbot to establish a new distribution channel, improve customer service, or enhance brand promotion.",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Gain insights into the attitudes and emotions expressed in messages from various sources, including social media feeds, reviews, responses, and more.",
  },
  {
    title: "Natural Language Generation",
    description:
      "Generate consistent, high-quality language throughout your communications, while automating reporting and the creation of repetitive content.",
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
          <span className="text-amber-400">
            {" "}
            {""} human language with technology.
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
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
