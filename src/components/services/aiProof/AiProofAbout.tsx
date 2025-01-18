import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "We define your business objectives",
    description:
      "In the initial phase of AI PoC development, our R&D specialists collaborate with you to understand your AI objectives and identify key business goals, such as enhancing customer personalization or minimizing equipment downtime. We also establish clear success metrics for each use case.",
  },
  {
    title: "We design experiments",
    description:
      "During AI proof-of-concept (PoC) development, ITRex formulates hypotheses, establishes success criteria such as model accuracy and efficiency, and tests these hypotheses by identifying key experiment variables and conditions. We offer a range of experimentation options, from cost-effective and rapid solutions to highly detailed and precise approaches, tailored to suit various budgets and timelines.",
  },
  {
    title: "We conduct experiments",
    description:
      "For customers with adequate budgets, we suggest running parallel experiments to explore multiple approaches simultaneously. Alternatively, time-boxed experiments offer a more cost-efficient solution, enabling you to gather sufficient data to make well-informed decisions about the direction of your AI PoC project.",
  },
  {
    title: "We analyze results",
    description:
      "After completing AI PoC development, we conduct an in-depth analysis of the gathered data to evaluate the AI models' performance against established success metrics and benchmarks. The results are then presented to stakeholders, along with a detailed roadmap for implementing a full-scale AI solution.",
  },
  {
    title: "We produce tangible deliverables",
    description:
      "Our AI PoC development services deliver concrete outcomes, including the PoC itself, data pipelines, comprehensive data, and thorough documentation of experiments, benchmarks, and real-world results. Additionally, we can create a roadmap for your future AI solution and support you in presenting your idea to stakeholders.",
  },
  {
    title: "We develop AI solutions",
    description:
      "In addition to AI PoC development, our AI developers assist clients in building and scaling AI models. We conduct thorough testing, leverage automation where applicable, create architecture design records, and follow MLOps best practices. We also stay updated on emerging AI technologies that align with the criteria defined in Step 2.",
  },
];

const AiProofAbout = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-aos="fade-up">
      <p className="font-semibold text-blue-600">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="How We Can Support Your AI PoC Development" />
        <p data-aos="fade-up">
          As experienced AI consultants with a solid foundation in business
          analysis, we understand the unique challenges our clients
          encounter—ranging from limited budgets and resources to the urgency of
          accelerating time-to-market and showcasing tangible outcomes to
          stakeholders. We tackle these obstacles through our AI PoC (Proof of
          Concept) development process. Here&apos;s how it works:
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

export default AiProofAbout;
