import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "PoC development",
    description:
      "Through our low-code development services, we rapidly validate your business ideas, assess core application functionalities with minimal coding, and gather essential requirements to streamline future development efforts.",
  },
  {
    title: "Interactive prototyping",
    description:
      "Leverage our low-code and no-code development services to build interactive, responsive prototypes that mimic real applications. This approach allows you to test user flows, gather valuable feedback, and refine designs based on user interactions.",
  },
  {
    title: "MVP development",
    description:
      "We create low code MVP solutions by combining full stack engineering and MVP development.Our expertise lies in prioritizing the core application features that address your target audience’s needs, ensuring the delivery of products optimized for market testing and early user acquisition.",
  },
  {
    title: "User testing-ready app development",
    description:
      "Our low-code development services enable you to evolve MVPs into advanced applications ready for testing with a broader audience. This process helps you gather real-world insights into usability, functionality, and performance, pinpointing bottlenecks and areas for improvement.",
  },
];

const LowCodeAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="What Anchor Informatics offers as part of low-code development services" />
        <p data-aos="fade-up">
          Our low-code company empowers you to develop proof of concepts (PoCs),
          prototypes, and minimum viable products (MVPs) for your technology
          solutions up to three times faster. A skilled team of business
          analysts and low-code/no-code developers is here to support you with:
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

export default LowCodeAbout;
