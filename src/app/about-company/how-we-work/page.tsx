import {
  HowWeDoCollaboration,
  HowWeDoMethodologies,
  HowWeWorkBanner,
} from "@/components/aboutCompany/howWeWork";
import React from "react";

const HowWeWork = () => {
  return (
    <div>
      <HowWeWorkBanner />
      <HowWeDoMethodologies />
      <HowWeDoCollaboration />
    </div>
  );
};

export default HowWeWork;
