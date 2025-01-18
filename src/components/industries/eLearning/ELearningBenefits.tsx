import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Accessibility",
    description:
      "Friendly for learners with special needs and those without the ‘geek gene’",
  },
  {
    title: "Flexibility",
    description:
      "Customizable for all participants, tailored to your business needs",
  },
  {
    title: "Granularity",
    description:
      "Highlighting all the peculiarities of the educational process",
  },
  {
    title: "Personalization",
    description: "Overcoming the one-size-fits-all eLearning problem",
  },
  {
    title: "Persistence",
    description: "Instrumentally motivating target learners to carry on",
  },
  { title: "Motivation", description: "Making courseware products engaging" },
  {
    title: "Collaboration",
    description: "Designing easy-to-use tools for fruitful teamwork",
  },
  {
    title: "Age-friendly",
    description: "Providing a helpful environment for adults",
  },
];
const ELearningBenefits = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/learning-dev.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Unleashing the benefits
          <span className="text-amber-400 pl-2">of tech-assisted learning</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Driven by the COVID-19 crisis, education has tapped in radical
          transformation. With distance learning sparking public interest in
          educational innovations, EdTech will continue to reshape the way we
          teach and learn. Now, it’s the perfect time for educational
          institutions to take the first step toward digital transformation and
          start enjoying the improvements it ignites
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServicesCard
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

export default ELearningBenefits;
