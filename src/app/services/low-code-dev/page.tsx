import {
  LowCodeAbout,
  LowCodeAtAnchor,
  LowCodeBanner,
  LowCodeCreation,
  LowCodeFaq,
  LowCodeGlance,
  LowCodeTypes,
} from "@/components/services/lowCodeDev";
import React from "react";

const LowCodeDev = () => {
  return (
    <div>
      <LowCodeBanner />
      <LowCodeAbout />
      <LowCodeTypes />
      <LowCodeCreation />
      <LowCodeAtAnchor />
      <LowCodeFaq />
      <LowCodeGlance />
    </div>
  );
};

export default LowCodeDev;
