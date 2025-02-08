import React from "react";

const AiDevAtAnchor = () => {
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
  const services = [
    {
      title: "Machine Learning",
      description:
        "Using our expertise in supervised, unsupervised, and reinforcement learning, we build intelligent systems that make precise decisions with little to no human involvement.",
    },
    {
      title: "Deep Learning",
      description:
        "We leverage multi-layered neural networks to create AI-driven business solutions that mimic and often surpass human intelligence.",
    },
    {
      title: "Natural Language Processing",
      description:
        "We develop real-time speech recognition and conversational AI technologies that significantly enhance user interactions.",
    },
    {
      title: "Computer Vision",
      description:
        "We build AI systems capable of analyzing visual data, including biometric authentication, CCTV monitoring, real-time video analysis, and more.",
    },
    {
      title: "Generative AI",
      description:
        "We create generative AI solutions for automation, data analysis, and creative tasks. Whether you need Gen AI to write code, handle customer queries, or produce engaging content, our AI developers are here to help.",
    },
    {
      title: "Robotics",
      description:
        "We develop software for robotic systems that improve operations and increase efficiency in factories and other environments.",
    },
  ];

  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-anchor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold lg:container"
          data-aos="fade-up"
        >
          At Anchor Informatics Ltd, an AI Development
          <span className="text-lime-500">
            {" "}
            Company with Unparalleled Expertise
          </span>
          .
        </p>
      </div>
      <div className="py-12  bg-white">
        <div className=" px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <p className="" data-aos="fade-up">
            Anchor Informatics Ltd is an AI development company with over a
            decade of experience. We enable you to leverage advanced AI tools
            and technologies to fuel exceptional growth.
          </p>

          <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
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
    </div>
  );
};

export default AiDevAtAnchor;
