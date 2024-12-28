import {
  SustainableAtAnchor,
  SustainableBanner,
  SustainableMission,
  SustainablePillers,
} from "@/components/aboutCompany/sustainableSoftware";
import React from "react";

const Sustainable = () => {
  return (
    <div>
      <SustainableBanner />
      <SustainableMission />
      <SustainableAtAnchor />
      <SustainablePillers />
    </div>
  );
};

export default Sustainable;
