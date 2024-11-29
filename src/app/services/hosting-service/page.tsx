import {
  HostingAbout,
  HostingBanner,
  HostingExperts,
  HostingServices,
  HostingStayAhead,
  HostingTechnology,
} from "@/components/services/hostingService";
import React from "react";

const HostingService = () => {
  return (
    <div>
      <HostingBanner />
      <HostingAbout />
      <HostingServices />
      <HostingExperts />
      <HostingStayAhead />
      <HostingTechnology />
    </div>
  );
};

export default HostingService;
