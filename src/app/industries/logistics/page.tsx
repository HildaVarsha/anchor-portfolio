import {
  LogisticBanner,
  LogisticsAbout,
  LogisticsCustom,
  LogisticsPotential,
  LogisticsTransport,
} from "@/components/industries/logistics";
import React from "react";

const Logistics = () => {
  return (
    <div>
      <LogisticBanner />
      <LogisticsAbout />
      <LogisticsCustom />
      <LogisticsPotential />
      <LogisticsTransport />
    </div>
  );
};

export default Logistics;
