import React from "react";

const AboutCompanyFacts = () => {
  return (
    <div className="px-4 md:px-0 md:max-w-lg mx-auto py-24">
      <p
        className="text-2xl md:text-5xl font-semibold pb-6 text-center"
        data-aos="fade-up"
      >
        <span className="text-lime-500">Key facts</span> about us
      </p>
      <div className="flex items-center justify-between pt-8">
        <div>
          <p
            className="text-5xl font-semibold text-lime-500"
            data-aos="fade-up"
          >
            560
          </p>
          <p data-aos="fade-up">Projects Done</p>
        </div>
        <div>
          <p
            className="text-5xl font-semibold text-lime-500"
            data-aos="fade-up"
          >
            5<span className="text-lime-500">+</span>
          </p>
          <p data-aos="fade-up">Partners</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8">
        <div>
          <p
            className="text-5xl font-semibold text-lime-500"
            data-aos="fade-up"
          >
            20<span className="text-lime-500">+</span>
          </p>
          <p data-aos="fade-up">Companies</p>
        </div>
        <div>
          <p
            className="text-5xl font-semibold text-lime-500 text-end"
            data-aos="fade-up"
          >
            500<span className="text-lime-500">+</span>
          </p>
          <p data-aos="fade-up">Happy Clients</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8">
        <div className="w-full">
          <p
            className="text-5xl font-semibold text-lime-500"
            data-aos="fade-up"
          >
            90<span className="text-lime-500">%</span>
          </p>
          <p data-aos="fade-up">Quality Services</p>
        </div>
        <div className="w-full">
          <p
            className="text-5xl font-semibold text-lime-500 text-end"
            data-aos="fade-up"
          >
            95<span className="text-lime-500">%</span>
          </p>
          <p className="text-end" data-aos="fade-up">
            Our Software Makes Your Life Easier
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyFacts;
