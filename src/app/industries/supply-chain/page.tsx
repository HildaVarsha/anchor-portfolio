import {
  SupplyChainAbout,
  SupplyChainBanner,
  SupplyChainManufacture,
  SupplyChainTransformation,
} from "@/components/industries/supplyChain";
import React from "react";

const Supply = () => {
  return (
    <div>
      <SupplyChainBanner />
      <SupplyChainAbout />
      <SupplyChainManufacture />
      <SupplyChainTransformation />
    </div>
  );
};

export default Supply;
