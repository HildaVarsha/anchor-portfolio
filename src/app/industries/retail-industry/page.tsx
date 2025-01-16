import {
  RetailAbout,
  RetailBanner,
  RetailBoost,
  RetailEngagging,
  RetailGain,
  RetailOvercome,
} from "@/components/industries/retail";
import React from "react";

const RetailIndustry = () => {
  return (
    <div>
      <RetailBanner />
      <RetailAbout />
      <RetailBoost />
      <RetailOvercome />
      <RetailEngagging />
      <RetailGain />
    </div>
  );
};

export default RetailIndustry;
