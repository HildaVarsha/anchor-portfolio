import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";
import ImageServer from "../ImageServer";

const collaborationSteps = [
  {
    id: 1,
    title: "Thinking Big",
    image: "/think-big.png",
    description:
      "We begin by thoroughly understanding your unique challenges and business objectives. This comprehensive analysis allows us to strategically map a technology roadmap that ensures your business remains adaptable and future-proof.",
  },
  {
    id: 2,
    title: "Starting Small",
    image: "/starting-small.png",
    description:
      "To initiate your transformation journey, we focus on implementing simple, yet impactful use cases that deliver immediate value and tangible results.",
  },
  {
    id: 3,
    title: "Creating Value Fast",
    image: "/creating.png",
    description:
      "We develop a Minimum Viable Product (MVP) to swiftly test the initial use cases and gather valuable user feedback. Throughout this iterative process, we continually refine and enhance the solution .",
  },
  {
    id: 4,
    title: "Innovating at Scale",
    image: "/innovating.png",
    description:
      "We consistently expand the capabilities of your system while maintaining a flexible technology stack. Our solutions are designed to be highly adaptable to human needs and easily scalable to accommodate your evolving business requirements and growth trajectory.",
  },
];

const HomeHowWeCollaborate = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="px-4 lg:px-0 lg:container mx-auto">
        <PageHeaderText label="Our Collaborative Approach" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
          {collaborationSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col lg:flex-row items-center gap-8"
              data-aos="fade-up"
            >
              <ImageServer
                loading="lazy"
                src={step.image}
                alt={step.title}
                width={100}
                height={100}
                className="h-44 w-44 object-cover"
                data-aos="fade-up"
              />
              <div className="w-full">
                <h3
                  className="font-semibold text-2xl pb-4 text-center lg:text-left"
                  data-aos="fade-up"
                >
                  {step.title}
                </h3>
                <p className="text-slate-500" data-aos="fade-up">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowWeCollaborate;
