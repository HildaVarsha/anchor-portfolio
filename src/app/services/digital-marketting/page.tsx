import {
  MarkettingAbout,
  MarkettingBanner,
  MarkettingExperts,
  MarkettingService,
  MarkettingStayAhead,
  MarkettingTechnology,
} from "@/components/services/digitalMarketting";
import React from "react";

const DigitalMarketting = () => {
  return (
    <div>
      <MarkettingBanner />
      <MarkettingAbout />
      <MarkettingService />
      <MarkettingExperts />
      <MarkettingStayAhead />
      <MarkettingTechnology />
    </div>
  );
};

export default DigitalMarketting;
