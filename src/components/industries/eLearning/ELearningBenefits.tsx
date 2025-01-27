import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Accessibility",
    description:
      "Designed to be user-friendly for learners with special needs and those without technical expertise.",
  },
  {
    title: "Flexibility",
    description:
      "Fully customizable to meet the needs of all participants, tailored to your specific business requirements.",
  },
  {
    title: "Granularity",
    description:
      "Focusing on the unique aspects of the educational process to ensure detailed learning experiences.",
  },
  {
    title: "Personalization",
    description:
      "Solving the one-size-fits-all issue by offering personalized eLearning solutions.",
  },
  {
    title: "Persistence",
    description:
      "Using tools to motivate learners and encourage continuous progress.",
  },
  {
    title: "Motivation",
    description:
      "Making courseware products engaging and motivating for learners.",
  },
  {
    title: "Collaboration",
    description:
      "Creating intuitive tools for effective teamwork and collaboration among learners.",
  },
  {
    title: "Age-friendly",
    description:
      "Providing a supportive learning environment for adult learners.",
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
          <span className="text-lime-500 pl-2">of tech-assisted learning</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          The COVID-19 crisis has accelerated radical transformations in
          education. With distance learning capturing public interest in
          educational innovations, EdTech will continue to reshape the future of
          teaching and learning. Now is the ideal time for educational
          institutions to embark on their digital transformation journey and
          begin reaping the benefits it brings.
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
