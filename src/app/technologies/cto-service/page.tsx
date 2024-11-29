import {
  CtoBenefits,
  CtoBuildProject,
  CtoOurClients,
  CtoServiceAbout,
  CtoServiceBanner,
  CtoTailored,
  CtoTransform,
  CtoVendor,
} from "@/components/technologies/ctoService";
import React from "react";

const CtoService = () => {
  return (
    <div>
      <CtoServiceBanner />
      <CtoServiceAbout />
      <CtoTailored />
      <CtoBenefits />
      <CtoBuildProject />
      <CtoTransform />
      <CtoVendor />
      <CtoOurClients />
    </div>
  );
};

export default CtoService;
