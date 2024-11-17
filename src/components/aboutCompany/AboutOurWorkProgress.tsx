import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";

const workProgressData = [
  {
    imgSrc: "/work-progress-1.png",
    title: "Ownership",
    description:
      "We take full responsibility for our actions. We apologize for our mistakes and work with more sincerity and dedication to delight our customers.",
  },
  {
    imgSrc: "/work-progress-2.png",
    title: "Think Smarter and Bigger",
    description:
      "We constantly strive for improvement and growth. We embrace change, adopt it, and find solutions to improve ourselves.",
  },
  {
    imgSrc: "/work-progress-3.png",
    title: "Work Ethic",
    description:
      "We are proactive, organized, result-driven, and prompt because we expect high performance from ourselves. Consequently, we regularly invest in training to create a highly skilled and efficient talent pool.",
  },
];

const AboutOurWorkProgress = () => {
  return (
    <div className="bg-amber-400 py-12">
      <div className="container mx-auto">
        <PageHeaderText label="Our Work Process" className="text-slate-800" />
        <div className="flex items-center justify-between pt-8 gap-16">
          {workProgressData.map(({ imgSrc, title, description }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={imgSrc} alt={title} width={100} height={100} />
              <p className="text-slate-800 font-semibold text-xl py-4">
                {title}
              </p>
              <p className="text-slate-800 pb-4 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurWorkProgress;
