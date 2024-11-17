import React from "react";
import { PageHeaderText } from "../shared";

const AboutWhyChooseUs = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto">
        <PageHeaderText
          label="Why Choose Us?"
          className="text-slate-800 text-center"
        />
        <p className="text-center text-slate-800 text-lg max-w-lg mx-auto">
          Our objective is to assist businesses in accelerating the adoption of
          new technologies, resolving difficult issues that arise frequently
          throughout digital transformation, and orchestrating continuous
          innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;
