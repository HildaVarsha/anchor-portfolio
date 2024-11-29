import {
  AngularBanner,
  AngularDevelopment,
  AngularOurClients,
  AngularPartner,
  AngularServices,
} from "@/components/technologies/angular";
import React from "react";

const Angular = () => {
  return (
    <div>
      <AngularBanner />
      <AngularServices />
      <AngularDevelopment />
      <AngularPartner />
      <AngularOurClients />
    </div>
  );
};

export default Angular;
