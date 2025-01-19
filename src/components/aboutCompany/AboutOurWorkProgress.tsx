import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";

const workProgressData = [
  {
    imgSrc: "/work-progress-1.png",
    title: "Accountability",
    description:
      "We take full accountability for our actions, acknowledging our mistakes and working with greater dedication and sincerity to exceed customer expectations.",
  },
  {
    imgSrc: "/work-progress-2.png",
    title: "Innovative Thinking",
    description:
      "We are committed to continuous improvement and growth. We embrace change, leverage it, and seek innovative solutions to better ourselves.",
  },
  {
    imgSrc: "/work-progress-3.png",
    title: "Professionalism",
    description:
      "We are proactive, organized, results-oriented, and responsive, expecting high performance from ourselves. To maintain this, we consistently invest in training to build a highly skilled and effective team.",
  },
];

const AboutOurWorkProgress = () => {
  return (
    <div className="bg-amber-400 py-12">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText label="Our Work Process" className="text-slate-800" />
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-16">
          {workProgressData?.map(({ imgSrc, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
            >
              <Image
                src={imgSrc}
                alt={title}
                width={100}
                height={100}
                data-aos="fade-up"
              />
              <p
                className="text-slate-800 font-semibold text-xl py-4"
                data-aos="fade-up"
              >
                {title}
              </p>
              <p className="text-slate-800 pb-4 text-center" data-aos="fade-up">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurWorkProgress;
