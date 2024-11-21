import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";

const expertiseData = [
  {
    src: "/expertise-ai.png",
    title: "AI (Artificial Intelligence)",
    description:
      "From machine learning to natural language processing, we unlock the full potential of AI to help machines think, act, and improve.",
  },
  {
    src: "/expertise-rcs.png",
    title: "RCS (Resilient Cyber Sector)",
    description:
      "Our “bend but don’t break” approach ensures your enterprise remains secure, resilient, and prepared for any disruption.",
  },
  {
    src: "/expertise-saas.png",
    title: "SaaS (Software as a Service)",
    description:
      "Powering the future of work with cloud-based solutions, giving you seamless access to software resources.",
  },
];

const ExpertiseItem = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
    <Image src={src} alt={title} width={220} height={188} />
    <div>
      <p className="font-semibold text-center md:text-start">{title}</p>
      <p className="pt-3 text-center md:text-start">{description}</p>
    </div>
  </div>
);

const HomeOurExpertise = () => (
  <div className="py-12 px-4 md:px-0 md:container mx-auto">
    <PageHeaderText label="Our Expertise" className="text-center" />
    <div className="max-w-xl mx-auto">
      {expertiseData.map((item, index) => (
        <ExpertiseItem
          key={index}
          src={item.src}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default HomeOurExpertise;
