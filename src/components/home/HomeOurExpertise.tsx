import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";
import ImageServer from "../ImageServer";

const expertiseData = [
  {
    src: "/expertise-ai.png",
    title: "Artificial Intelligence (AI)",
    description:
      "From machine learning to natural language processing, we unlock the full capabilities of AI to enable machines to think, learn, and improve continuously.",
  },
  {
    src: "/expertise-rcs.png",
    title: "Resilient Cyber Sector (RCS)",
    description:
      "With our 'bend but don’t break' strategy, we ensure your organization stays secure, adaptable, and ready for any disruption.",
  },
  {
    src: "/expertise-saas.png",
    title: "Software as a Service (SaaS)",
    description:
      "Empowering the future of business with cloud-based solutions that provide seamless and efficient access to essential software resources.",
  },
];

const ExpertiseItem = ({
  src,
  title,
  description,
  index,
}: {
  src: string;
  index: number;
  title: string;
  description: string;
}) => (
  <div
    data-aos="fade-up"
    className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
  >
    <ImageServer
      loading="lazy"
      src={src}
      alt={title}
      width={220}
      height={188}
      className="lg:w-44 lg:h-44"
    />
    <div>
      <p data-aos="fade-up" className="font-semibold text-center lg:text-start">
        {title}
      </p>
      <p data-aos="fade-up" className="pt-3 text-center lg:text-start">
        {description}
      </p>
    </div>
  </div>
);

const HomeOurExpertise = () => (
  <div className="py-12 px-4 lg:px-0 lg:container mx-auto">
    <div data-aos="fade-up">
      <PageHeaderText label="Our Expertise" className="text-center" />
    </div>
    <div className="max-w-xl mx-auto">
      {expertiseData.map((item, index) => (
        <ExpertiseItem
          index={index}
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
