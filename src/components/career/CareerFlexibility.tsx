import React from "react";
import { PageHeaderText } from "../shared";

const sections = [
  {
    header: "Flexibility and balance",
    paragraphs: [
      "We believe in hard work. That means you honestly give your best effort. It doesn’t mean you give every waking hour.",
      "Our crew is motivated and accountable, so they earn a lot of trust. Flexible and remote working arrangements are no problem.",
      "If you’re so stuck on a hard problem that you need to switch gears, head to the gym to work out, or to the Playstation to shoot bad guys.",
    ],
  },
  {
    header: "Opportunity and growth",
    paragraphs: [
      "We expect you to work hard on difficult challenges, among high-level professionals who support you. You will take hard decisions, with permission to make mistakes and learn from them. If you have the attitude to make this work, your skills will level up fast and you’ll feel proud of how you grow.",
      "We offer language classes and career progression tracks too.",
    ],
  },
];

const CareerFlexibility = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row  gap-4 md:gap-12 justify-between ${
            index > 0 ? "pt-12" : ""
          }`}
        >
          <div className="w-full">
            <PageHeaderText label={section.header} />
          </div>
          <div className="w-full">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "pt-4" : "pt-2"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerFlexibility;
