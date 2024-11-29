import {
  DotNetBanner,
  DotNetClients,
  DotNetEngagement,
  DotNetEnterprise,
  DotNetProcess,
  DotNetServices,
  DotNetTechnology,
  DotNetWhyChoose,
  DotNetWhyChooseAnchor,
} from "@/components/technologies/dotNet";
import React from "react";

const DotNet = () => {
  return (
    <div>
      <DotNetBanner />
      <DotNetServices />
      <DotNetEnterprise />
      <DotNetProcess />
      <DotNetTechnology />
      <DotNetEngagement />
      <DotNetWhyChoose />
      <DotNetWhyChooseAnchor />
      <DotNetClients />
    </div>
  );
};

export default DotNet;
