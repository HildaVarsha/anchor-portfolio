import React from "react";
const services = [
  {
    title: "Data Quality",
    description:
      "We carry out thorough data validation and cleansing to ensure that insights are based on high-quality, reliable data.",
  },
  {
    title: "Explainability",
    description:
      "We use white-box AI models, allowing users to understand the decision-making process behind AI algorithms.",
  },
  {
    title: "Predictable ROI",
    description:
      "We initiate AI development projects with a proof of concept, enabling you to evaluate the potential value of AI without making significant upfront investments.",
  },
  {
    title: "Security",
    description:
      "We implement robust security protocols to ensure your data and infrastructure are fully protected against potential threats.",
  },
];

const AiDevServices = () => {
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
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container"
          data-aos="fade-up"
        >
          The Core pillars
          <span className="text-green-500">
            {" "}
            of our AI development services.
          </span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
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

export default AiDevServices;
