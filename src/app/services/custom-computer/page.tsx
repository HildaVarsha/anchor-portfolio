import {
  CustomComputerAbout,
  CustomComputerAtAnchor,
  CustomComputerBanner,
  CustomComputerFeatures,
  CustomComputerServices,
  CustomComputerSolutions,
  CustomComputerTech,
  CustomComputerVision,
} from "@/components/services/customComputer";
import React from "react";

const CustomComputer = () => {
  return (
    <div>
      <CustomComputerBanner />
      <CustomComputerAbout />
      <CustomComputerVision />
      <CustomComputerFeatures />
      <CustomComputerSolutions />
      <CustomComputerTech />
      <CustomComputerServices />
      <CustomComputerAtAnchor />
    </div>
  );
};

export default CustomComputer;
