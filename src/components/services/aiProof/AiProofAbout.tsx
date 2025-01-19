import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Defining Business Objectives",
    description:
      "In the initial phase of AI PoC development, our R&D specialists work closely with you to understand your AI goals and pinpoint key business objectives, such as improving customer personalization or reducing equipment downtime. We also establish clear success criteria for each use case.",
  },
  {
    title: "Designing Experiments",
    description:
      "During AI proof-of-concept (PoC) development, ITRex formulates hypotheses, defines success metrics like model accuracy and efficiency, and tests these hypotheses by identifying key experiment variables and conditions. We offer a range of experimental approaches, from cost-effective and quick solutions to detailed and precise strategies, tailored to meet different budgets and timelines.",
  },
  {
    title: "Conducting Experiments",
    description:
      "For clients with sufficient budgets, we recommend running parallel experiments to explore multiple approaches at once. Alternatively, time-boxed experiments provide a more budget-friendly option, enabling you to gather enough data to make informed decisions on the direction of your AI PoC project.",
  },
  {
    title: "Analyzing Results",
    description:
      "After completing the AI PoC development phase, we conduct an in-depth analysis of the collected data to assess the AI models' performance against defined success metrics and benchmarks. We present the results to stakeholders, along with a detailed roadmap for implementing a full-scale AI solution.",
  },
  {
    title: "Delivering Tangible Outcomes",
    description:
      "Our AI PoC development services provide concrete deliverables, including the PoC itself, data pipelines, comprehensive datasets, and detailed documentation of experiments, benchmarks, and real-world results. We can also create a roadmap for your future AI solution and assist in presenting your concept to stakeholders.",
  },
  {
    title: "Developing AI Solutions",
    description:
      "Beyond AI PoC development, our AI developers help clients build and scale AI models. We conduct extensive testing, leverage automation where possible, create architectural design records, and follow MLOps best practices. Additionally, we stay abreast of emerging AI technologies that align with the criteria established in Step 2.",
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
          As seasoned AI consultants with a strong background in business
          analysis, we are well-versed in the unique challenges our clients
          face—such as limited budgets, resource constraints, and the pressure
          to accelerate time-to-market while delivering measurable results to
          stakeholders. To address these challenges, we employ our AI PoC (Proof
          of Concept) development process. Here's how we approach it:
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
