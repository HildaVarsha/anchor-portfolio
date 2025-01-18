import React from "react";

import HireButton from "./HireButton";

const ctoBenefits = [
  {
    title: "Artificial Intelligence",
    description:
      "We assist in preparing data for AI algorithms, designing and training robust AI models, and seamlessly integrating them into your software solutions.",
  },
  {
    title: "Cloud consulting",
    description:
      "We help you leverage the power of the cloud by designing and executing a cloud migration strategy, configuring cloud infrastructure, and optimizing it for peak performance.",
  },
  {
    title: "Data management",
    description:
      "We assist in establishing a comprehensive enterprise data ecosystem that offers a 360-degree view of your company’s operations.",
  },
  {
    title: "Intelligent automation",
    description:
      "We will help you create a dynamic digital workforce or enhance your product with advanced intelligent process automation capabilities.",
  },
  {
    title: "DevOps",
    description:
      "We will help you streamline the software development process, accelerating delivery through collaborative teamwork and cutting-edge technology tools.",
  },
  {
    title: "Data science",
    description:
      "We will help you convert diverse data from various sources into actionable insights, presented through clear and intuitive visualizations.",
  },
];

const CtoBenefits = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/cto-benefits.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          <p data-aos="fade-up">Benefit from our broad </p>{" "}
          <p className="text-amber-400" data-aos="fade-up">
            technology capabilities.
          </p>
        </div>
      </div>
      <div className="bg-white text-slate-800">
        <div className="px-4 md:px-0 md:container py-16 mx-auto">
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
            {ctoBenefits?.map((service, index) => (
              <div key={index} data-aos="fade-up">
                <h3
                  className="font-semibold text-blue-800 text-xl pb-4"
                  data-aos="fade-up"
                >
                  {service.title}
                </h3>
                <p data-aos="fade-up">{service.description}</p>
              </div>
            ))}
          </div>
          <HireButton label="Go for CTO as a Service " />
        </div>
      </div>
    </div>
  );
};

export default CtoBenefits;
