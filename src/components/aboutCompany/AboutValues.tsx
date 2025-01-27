import React from "react";
import { PageHeaderText } from "../shared";

const values = [
  {
    number: 1,
    title: "Planning",
    description:
      "We start by analyzing your business goals and user needs, creating initial Low-Fidelity Wireframes as a blueprint.",
    reverse: false,
  },
  {
    number: 2,
    title: "Creative Design",
    description:
      "We design and define the look, feel, and functionality of your product to align with your vision.",
    reverse: true,
  },
  {
    number: 3,
    title: "Development",
    description:
      "We apply Agile practices to collaborate and refine the design and development, ensuring an exceptional UX/UI experience.",
    reverse: false,
  },
  {
    number: 4,
    title: "Ongoing Support",
    description:
      "We offer continued maintenance and support, monitoring performance, fixing bugs, and introducing new features as needed.",
    reverse: true,
  },
];

const AboutValues = () => {
  return (
    <div className="px-4 md:px-0 md:max-w-xl mx-auto py-12">
      <PageHeaderText
        label="We live by powerful values:"
        className="text-lime-500"
      />
      {values.map(({ number, title, description, reverse }, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-16 pt-16 ${
            reverse ? "flex-row-reverse" : ""
          }`}
          data-aos="fade-up"
        >
          <p className="text-lime-500 w-full" data-aos="fade-up">
            {description}
          </p>
          <div className="w-full text-center">
            <p className="text-9xl text-lime-500 font-bold" data-aos="fade-up">
              {number}
            </p>
            <p className="font-semibold text-3xl" data-aos="fade-up">
              {title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutValues;
