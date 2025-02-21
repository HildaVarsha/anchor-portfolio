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

const StatCard = ({ value, label }: { value: string; label: string }) => {
  // Format the value to highlight `+` and `%` with green color
  const formattedValue = value.replace(
    /(\+|%)/g,
    (match) => `<span class="text-lime-500">${match}</span>`
  );

  return (
    <div data-aos="fade-up">
      <p
        className="font-bold text-5xl text-lime-500 pb-2"
        dangerouslySetInnerHTML={{ __html: formattedValue }}
      />
      <p>{label}</p>
    </div>
  );
};

const CustomComputerAtAnchor = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto p-6 lg:p-16 bg-black">
        <PageHeaderText label="Anchor’s Informative in Numbers" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomComputerAtAnchor;
