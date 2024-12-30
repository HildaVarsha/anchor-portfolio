import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";
const services = [
  {
    title: "Fast decision-making",
    description:
      "Our AI PoC development services allow you to make quick, data-informed decisions. By quickly prototyping and testing AI models, we help you assess the feasibility and potential impact of AI solutions within just two to three weeks.",
  },
  {
    title: "Focus on your business, not technology",
    description:
      "Our expert team manages the technical intricacies of AI PoC development, enabling you to focus on your core business operations. We align the PoC activities with clear business objectives, setting the stage for successful AI implementation.",
  },
  {
    title: "Cost optimization",
    description:
      "Investing in artificial intelligence can be expensive. Starting your project with AI PoC development helps you pinpoint the most promising technologies and use cases, allowing you to explore options without a large initial investment. This approach minimizes financial risk and maximizes return on investment.",
  },
  {
    title: "Testing with real data and conditions",
    description:
      "We make sure your AI models are tested and validated with data and scenarios that truly represent your business environment. This hands-on approach to AI PoC development provides more reliable and actionable insights compared to synthetic cases.",
  },
];

const AiProofBenefit = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          How Can You Benefit from
          <span className="text-amber-400">
            {" "}
            {""} AI Proof of Concept (PoC) Development?
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Our complete AI Proof of Concept (PoC) development services offer
          value to businesses of all sizes, from AI startups looking for seed
          funding to mid-sized companies and large enterprises undergoing
          AI-driven transformation. By collaborating with Anchor&apos;s
          Informatics, you gain:
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"}>
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiProofBenefit;
