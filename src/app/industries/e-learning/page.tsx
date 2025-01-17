import {
  ELearningAbout,
  ELearningBanner,
  ELearningBenefits,
  ELearningDeliver,
  ELearningDev,
  ELearningEmbrace,
  ELearningOffer,
} from "@/components/industries/eLearning";
import React from "react";

const ELearning = () => {
  return (
    <div>
      <ELearningBanner />
      <ELearningAbout />
      <ELearningDev />
      <ELearningDeliver />
      <ELearningEmbrace />
      <ELearningBenefits />
      <ELearningOffer />
    </div>
  );
};

export default ELearning;
