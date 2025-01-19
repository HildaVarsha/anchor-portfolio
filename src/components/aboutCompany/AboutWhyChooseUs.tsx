import React from "react";
import { PageHeaderText } from "../shared";

const AboutWhyChooseUs = () => {
  return (
    <div className="bg-white py-24">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText
          label="Why Choose Us?"
          className="text-slate-800 text-center"
        />
        <p
          className="text-center text-slate-800 text-lg max-w-lg mx-auto"
          data-aos="fade-up"
        >
          Our goal is to help businesses speed up the integration of new
          technologies, address common challenges encountered during digital
          transformation, and drive ongoing innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;
