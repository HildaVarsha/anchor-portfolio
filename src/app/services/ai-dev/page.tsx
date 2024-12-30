import {
  AiDevAbout,
  AiDevApproach,
  AiDevAtAnchor,
  AiDevBanner,
  AiDevIndustry,
  AiDevPartner,
  AiDevServices,
  AiDevSolutions,
  AiDevTechnology,
} from "@/components/services/aiDev";
import React from "react";

const AiDev = () => {
  return (
    <div>
      <AiDevBanner />
      <AiDevAbout />
      <AiDevAtAnchor />
      <AiDevSolutions />
      <AiDevIndustry />
      <AiDevApproach />
      <AiDevServices />
      <AiDevTechnology />
      <AiDevPartner />
    </div>
  );
};

export default AiDev;
