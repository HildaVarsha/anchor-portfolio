import {
  DevopsAbout,
  DevopsAtAnchor,
  DevopsBanner,
  DevopsBenefits,
  DevopsConsulting,
  DevopsOurClients,
  DevopsProcess,
  DevopsServices,
  DevopsTechnology,
} from "@/components/technologies/devops";
import React from "react";

const devops = () => {
  return (
    <div>
      <DevopsBanner />
      <DevopsAbout />
      <DevopsServices />
      <DevopsProcess />
      <DevopsConsulting />
      <DevopsBenefits />
      <DevopsAtAnchor />
      <DevopsTechnology />
      <DevopsOurClients />
    </div>
  );
};

export default devops;
