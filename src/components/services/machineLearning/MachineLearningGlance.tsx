import { PageHeaderText } from "@/components/shared";
import React from "react";

const stats = [
  { value: "13+", label: "years of hands-on experience" },
  { value: "230+", label: "top-tier experts" },
  { value: "200+", label: "clients around the globe" },
  { value: "3+", label: "years' client engagement" },
  { value: "600+", label: "software products delivered" },
  { value: "90%", label: "hold BS, MS or PhD in math and computer science" },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div data-aos="fade-up">
    <p className="font-bold text-5xl text-amber-400 pb-2">{value}</p>
    <p>{label}</p>
  </div>
);

const MachineLearningGlance = () => {
  return (
    <div className="pb-16 bg-white">
      <div className="container mx-auto p-6 md:p-16 bg-black">
        <PageHeaderText label="What makes  Anchor’s Informative stand out" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineLearningGlance;
