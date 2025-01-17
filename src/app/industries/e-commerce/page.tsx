import {
  EComAbout,
  EComAdopt,
  EComBanner,
  EComEndToEnd,
  EComIntegrate,
  EComTechnology,
} from "@/components/industries/eCommerce";
import React from "react";

const ECommerce = () => {
  return (
    <div>
      <EComBanner />
      <EComAbout />
      <EComIntegrate />
      <EComAdopt />
      <EComEndToEnd />
      <EComTechnology />
    </div>
  );
};

export default ECommerce;
