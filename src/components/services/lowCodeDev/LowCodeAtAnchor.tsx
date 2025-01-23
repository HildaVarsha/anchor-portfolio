import React from "react";
const services = [
  {
    title: "Faster project execution",
    description:
      "With Anchor Informatics Ltd low-code development services, you can move from concept to a testable prototype and from an MVP to a pilot app in just weeks, rather than months.",
  },
  {
    title: "Flexibility",
    description:
      "At Anchor Informatics Ltd, our approach to building low-code solutions is inherently agile, allowing you to adjust application functionality or pivot your project based on user feedback or changing business requirements.",
  },
  {
    title: "Cost efficiency",
    description:
      "With low-code development solutions, we can cut software engineering time by up to 50% compared to traditional coding methods, all while maintaining the reliability and performance of the application.",
  },
  {
    title: "Risk reduction",
    description:
      "Our low-code company assists clients in validating assumptions, refining technology solution requirements, and gathering valuable user insights before committing to full-scale development. This approach helps prevent costly mistakes and boosts ROI.",
  },
];
const LowCodeAtAnchor = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-aos="fade-up">
      <p className="font-semibold text-slate-800">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white pb-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Why choose to collaborate with
          <span className="text-amber-400 px-2">our low-code company?</span>
        </p>
      </div>
      <div className="bg-white pt-16 text-slate-800">
        <div className="md:container mx-auto px-4">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services?.map((service, index) => (
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

export default LowCodeAtAnchor;
