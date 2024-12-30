import React from "react";

const AiDevAtAnchor = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold text-blue-600">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  const services = [
    {
      title: "Machine Learning",
      description:
        "Leveraging our expertise in supervised, unsupervised, and reinforcement machine learning, we develop intelligent systems that make accurate decisions with minimal to no human intervention.",
    },
    {
      title: "Deep learning",
      description:
        "We harness the power of multi-layered neural networks to create AI business solutions that replicate, and often exceed, human intelligence.",
    },
    {
      title: "Natural Language Processing",
      description:
        "We develop real-time speech recognition and conversational AI solutions that enhance the user experience.",
    },
    {
      title: "Computer Vision",
      description:
        "We create AI solutions that analyze visual data, including biometric authentication, CCTV monitoring, real-time video analysis, and more. ",
    },
    {
      title: "Generative AI",
      description:
        "We develop generative AI solutions for automation, data analytics, and creative tasks. Whether you need Gen AI to write code, manage customer inquiries, or craft compelling content, our AI developers are here to assist!",
    },
    {
      title: "Robotics",
      description:
        "We design software components for robotic solutions that enhance operations and boost efficiency both on the factory floor and in other settings.",
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container">
          At Anchor Informatics, an AI Development
          <span className="text-amber-400">
            {" "}
            Company with Unparalleled Expertise
          </span>
          .
        </p>
      </div>
      <div className="py-12  bg-white">
        <div className=" px-4 md:px-0 md:container mx-auto text-slate-800">
          <p className="">
            Anchor Informatics is an AI development company with more than a
            decade of experience. We empower you to harness cutting-edge AI
            tools and technologies to drive exponential growth.
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
    </div>
  );
};

export default AiDevAtAnchor;
