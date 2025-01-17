import {
  FinTechAbout,
  FinTechBanner,
  FinTechEstablish,
  FinTechIndustry,
  FinTechPower,
  FinTechSpectrum,
  FinTechTrust,
} from "@/components/industries/finTech";
import React from "react";

const Fintech = () => {
  return (
    <div>
      <FinTechBanner />
      <FinTechAbout />
      <FinTechPower />
      <FinTechSpectrum />
      <FinTechIndustry />
      <FinTechEstablish />
      <FinTechTrust />
    </div>
  );
};

export default Fintech;
