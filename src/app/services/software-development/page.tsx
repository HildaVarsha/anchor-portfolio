import {
  SoftwareDevBanner,
  SoftwareDevelopmentAbout,
  SoftwareDevExperts,
  SoftwareDevServices,
  SoftwareDevStayAhead,
  SoftwareDevTechnologies,
} from "@/components/services/softwareDevelopment";
import React from "react";

const SoftwareDevelopment = () => {
  return (
    <div>
      <SoftwareDevBanner />
      <SoftwareDevelopmentAbout />
      <SoftwareDevServices />
      <SoftwareDevExperts />
      <SoftwareDevStayAhead />
      <SoftwareDevTechnologies />
    </div>
  );
};

export default SoftwareDevelopment;
