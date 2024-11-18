import {
  CareerBanner,
  CareerBuildNewLife,
  CareerCapabilities,
  CareerEthicalEngineer,
  CareerFlexibility,
  CareerFullTimeJob,
  CareerJoinOurTeam,
  CareerLifeAtAnchor,
} from "@/components/career";
import React from "react";

const Career = () => {
  return (
    <div>
      <CareerBanner />
      <CareerLifeAtAnchor />
      <CareerCapabilities />
      <CareerJoinOurTeam />
      <CareerFullTimeJob />
      <CareerEthicalEngineer />
      <CareerFlexibility />
      <CareerBuildNewLife />
    </div>
  );
};

export default Career;
