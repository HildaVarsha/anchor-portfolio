import {
  SoftwareEngineerAbout,
  SoftwareEngineerBanner,
  SoftwareEngineerDedication,
  SoftwareEngineerHighlight,
  SoftwareEngineerOverview,
  SoftwareEngineerServices,
  SoftwareEngineerTechnology,
} from "@/components/technologies/softwareEngineer";
import React from "react";

const Software = () => {
  return (
    <div>
      <SoftwareEngineerBanner />
      <SoftwareEngineerAbout />
      <SoftwareEngineerHighlight />
      <SoftwareEngineerTechnology />
      <SoftwareEngineerServices />
      <SoftwareEngineerDedication />
      <SoftwareEngineerOverview />
    </div>
  );
};

export default Software;
