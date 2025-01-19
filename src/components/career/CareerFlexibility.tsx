import React from "react";
import { PageHeaderText } from "../shared";

const sections = [
  {
    header: "Flexibility and Balance",
    paragraphs: [
      "We believe in hard work, which means giving your best effort without sacrificing every waking hour.",
      "Our team is motivated and accountable, earning a lot of trust. Flexible and remote working arrangements are fully supported.",
      "If you're stuck on a tough problem, feel free to switch gears—head to the gym for a workout or to the PlayStation to blow off some steam.",
    ],
  },
  {
    header: "Opportunity and Growth",
    paragraphs: [
      "We expect you to tackle difficult challenges alongside high-level professionals who will support you. You'll make tough decisions, with the freedom to make mistakes and learn from them. If you're ready for the challenge, your skills will grow rapidly, and you'll take pride in your progress.",
      "We also offer language classes and career development tracks to help you advance.",
    ],
  },
];

const CareerFlexibility = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      {sections?.map((section, index) => (
        <div
          key={index}
          className={`px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row  gap-4 md:gap-12 justify-between ${
            index > 0 ? "pt-12" : ""
          }`}
          data-aos="fade-up"
        >
          <div className="w-full">
            <PageHeaderText label={section.header} />
          </div>
          <div className="w-full">
            {section.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={i === 0 ? "pt-4" : "pt-2"}
                data-aos="fade-up"
              >
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
