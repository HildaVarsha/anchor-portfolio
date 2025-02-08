import { PageHeaderText } from "@/components/shared";
import React from "react";

const stats = [
  {
    value: "13<span class='text-lime-500'>+</span>",
    label: "years of hands-on experience",
  },
  {
    value: "230<span class='text-lime-500'>+</span>",
    label: "top-tier experts",
  },
  {
    value: "200<span class='text-lime-500'>+</span>",
    label: "clients around the globe",
  },
  {
    value: "3<span class='text-lime-500'>+</span>",
    label: "years' client engagement",
  },
  {
    value: "600<span class='text-lime-500'>+</span>",
    label: "software products delivered",
  },
  {
    value: "90<span class='text-lime-500'>%</span>",
    label: "hold BS, MS or PhD in math and computer science",
  },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div data-aos="fade-up">
    <p
      className="font-bold text-5xl text-lime-500 pb-2"
      data-aos="fade-up"
      dangerouslySetInnerHTML={{ __html: value }}
    />
    <p data-aos="fade-up">{label}</p>
  </div>
);

const MediaStandOut = () => {
  return (
    <div className="pb-16 bg-white">
      <div className="container mx-auto p-6 lg:p-16 bg-black">
        <PageHeaderText
          label="What makes ITRex stand out
"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaStandOut;
