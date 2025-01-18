import React from "react";
import { PageHeaderText } from "../shared";

const values = [
  {
    number: 1,
    title: "Strategy",
    description:
      "We begin our journey by analyzing your business objectives and end-user requirements to create a draft of Low-Fidelity Wireframes.",
    reverse: false,
  },
  {
    number: 2,
    title: "Design",
    description:
      "We design and draft the appearance, feel, and functionality of your product.",
    reverse: true,
  },
  {
    number: 3,
    title: "Develop",
    description:
      "We use Agile methodology to collaborate and iterate on the product design and development until we achieve flawless UX/UI functionality and experience.",
    reverse: false,
  },
  {
    number: 4,
    title: "Support",
    description:
      "We provide maintenance and support if required. We monitor the performance of your website/application, fix bugs, and develop new functionalities.",
    reverse: true,
  },
];

const AboutValues = () => {
  return (
    <div className="px-4 md:px-0 md:max-w-xl mx-auto py-12">
      <PageHeaderText
        label="We live by powerful values:"
        className="text-amber-400"
      />
      {values.map(({ number, title, description, reverse }, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-16 pt-16 ${
            reverse ? "flex-row-reverse" : ""
          }`}
          data-aos="fade-up"
        >
          <p className="text-amber-400 w-full" data-aos="fade-up">
            {description}
          </p>
          <div className="w-full text-center">
            <p className="text-9xl text-amber-400 font-bold" data-aos="fade-up">
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
