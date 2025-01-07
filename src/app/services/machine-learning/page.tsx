import {
  MachineLearningAbout,
  MachineLearningAdvance,
  MachineLearningBanner,
  MachineLearningDevelopment,
  MachineLearningExperts,
  MachinelearningFaq,
  MachineLearningGlance,
  MachineLearningSolutions,
} from "@/components/services/machineLearning";
import React from "react";

const MachineLearn = () => {
  return (
    <div>
      <MachineLearningBanner />
      <MachineLearningAbout />
      <MachineLearningExperts />
      <MachineLearningSolutions />
      <MachineLearningDevelopment />
      <MachineLearningAdvance />
      <MachineLearningGlance />
      <MachinelearningFaq />
    </div>
  );
};

export default MachineLearn;
