import {
  HealthCareAbout,
  HealthCareBanner,
  HealthCareSecurity,
  HealthCareSoftware,
  HealthCareSolutions,
  HealthCareTech,
} from "@/components/industries/healthCare";
import React from "react";

const Helathcare = () => {
  return (
    <div>
      <HealthCareBanner />
      <HealthCareAbout />

      <HealthCareSecurity />
      <HealthCareSolutions />
      <HealthCareSoftware />
      <HealthCareTech />
    </div>
  );
};

export default Helathcare;
