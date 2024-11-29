import {
  IndustrialRetail,
  IndustriesBanner,
  IndustriesConsumer,
  IndustriesDrivingDigital,
  IndustriesFuture,
  IndustriesLifeScience,
  IndustriesTechnology,
  IndustriesUtilityEnergy,
  IndustriesWeServe,
} from "@/components/services/industries";
import React from "react";

const Industries = () => {
  return (
    <div>
      <IndustriesBanner />
      <IndustriesWeServe />
      <IndustrialRetail />
      <IndustriesDrivingDigital />
      <IndustriesLifeScience />
      <IndustriesConsumer />
      <IndustriesTechnology />
      <IndustriesUtilityEnergy />
      <IndustriesFuture />
    </div>
  );
};

export default Industries;
