import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";
const services = [
  {
    title: "Quick decision-making",
    description:
      "Our AI PoC development services enable rapid, data-driven decision-making. By swiftly prototyping and testing AI models, we help you evaluate the feasibility and potential impact of AI solutions within two to three weeks.",
  },
  {
    title: "Concentrate on your business, not on technology",
    description:
      "Our skilled team takes care of the technical complexities of AI PoC development, allowing you to focus on what matters most—your core business operations. We align PoC activities with clear business goals to set the foundation for successful AI implementation.",
  },
  {
    title: "Cost-efficient approach",
    description:
      "AI investments can be costly. Starting with AI PoC development allows you to identify the most promising technologies and use cases before committing large sums. This approach minimizes financial risks and optimizes return on investment.",
  },
  {
    title: "Real-world testing",
    description:
      "We ensure your AI models are tested and validated using real data and business scenarios. This practical approach to AI PoC development offers more reliable, actionable insights compared to synthetic tests.",
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
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          How Can You Benefit from
          <span className="text-amber-400">
            {" "}
            {""} AI Proof of Concept (PoC) Development?
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Anchor Informatics Ltd offers comprehensive AI Proof of Concept (PoC)
          development services that cater to businesses of all sizes—from AI
          startups seeking seed funding to mid-sized companies and large
          enterprises navigating AI-driven transformations. Partnering with us
          provides you with:
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
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiProofBenefit;
