import {
  MobileAppAbout,
  MobileAppBanner,
  MobileAppExperts,
  MobileAppProcess,
  MobileAppServices,
  MobileAppStayAhead,
  MobileAppTechnology,
} from "@/components/services/mobileApplication";
import React from "react";

const page = () => {
  return (
    <div>
      <MobileAppBanner />
      <MobileAppAbout />
      <MobileAppServices />
      <MobileAppExperts />
      <MobileAppProcess />
      <MobileAppStayAhead />
      <MobileAppTechnology />
    </div>
  );
};

export default page;
