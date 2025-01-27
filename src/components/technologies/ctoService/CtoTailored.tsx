import React from "react";

import HireButton from "./HireButton";

const ctoTailoredServices = [
  {
    title: "Project planning",
    description:
      "Through our CTO as a Service offering, we’ll work with you to develop a comprehensive business plan, define a solid technical strategy, and craft a project roadmap. Additionally, we’ll design the solution architecture, implement the necessary tools, and assemble the right team to bring your ideas to life.",
  },
  {
    title: "Project audit and optimization",
    description:
      "A virtual CTO will assess your tech stack, product architecture, and development processes to identify bottlenecks hindering your business growth. We will then create an optimization plan and oversee the implementation of the necessary improvements.",
  },
  {
    title: "Project scaling",
    description:
      "If you're looking to expand your business or integrate new technology, we can assist with that as well. The virtual CTO will develop a scaling strategy, design the required integrations, and provide guidance on the technology needed to ensure future scalability.",
  },
  {
    title: "R&D",
    description:
      "A virtual CTO will oversee your research and development efforts, ensure the maintenance and growth of your existing technology and compliance policies, and actively search for the most suitable tech solutions for your needs.",
  },
  {
    title: "Ensuring technical due diligence",
    description:
      "With CTO as a Service, you’ll secure the next round of investment or establish valuable partnerships. We’ll assess your product, architecture, tech stack, and workflows, then create a product evolution roadmap to keep stakeholders engaged and satisfied.",
  },
  {
    title: "Technology evangelism",
    description:
      "With CTO as a Service, you'll position your business for the next investment round or a successful partnership. We’ll evaluate your product, architecture, tech stack, and workflows, and develop a product evolution roadmap that keeps stakeholders aligned and satisfied.",
  },
];

const CtoTailored = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/cto-tailored.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          <p data-aos="fade-up">Our CTO as a Service: Tailored</p>{" "}
          <p className="text-lime-500" data-aos="fade-up">
            Solutions for Your Business Needs
          </p>
        </div>
      </div>
      <div className="bg-white text-slate-800">
        <div className="px-4 md:px-0 md:container py-16 mx-auto">
          <p className="py-4 text-lg" data-aos="fade-up">
            With over a decade of experience guiding complex, innovative
            projects, our CTO as a Service offering ensures technical excellence
            for your business. Whether it&apos;s leading your R&D team, managing
            resource allocation and budgets, or collaborating with stakeholders
            at the executive level, we’ll align your business objectives with
            the development process, ensuring seamless progress and success.
          </p>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
            {ctoTailoredServices?.map((service, index) => (
              <div key={index} data-aos="fade-up">
                <h3 className="font-semibold text-xl pb-4" data-aos="fade-up">
                  {service.title}
                </h3>
                <p data-aos="fade-up">{service.description}</p>
              </div>
            ))}
          </div>
          <HireButton label="Book a CTO for hire" />
        </div>
      </div>
    </div>
  );
};

export default CtoTailored;
