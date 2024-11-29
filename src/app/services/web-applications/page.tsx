import { MobileAppProcess } from "@/components/services/mobileApplication";
import {
  WebAppAbout,
  WebAppBanner,
  WebAppExperts,
  WebAppServices,
  WebAppStayAhead,
  WebAppTechnology,
} from "@/components/services/webApplication";
import React from "react";

const WebApp = () => {
  return (
    <div>
      <WebAppBanner />
      <WebAppAbout />
      <WebAppServices />
      <WebAppExperts />
      <MobileAppProcess />
      <WebAppStayAhead />
      <WebAppTechnology />
    </div>
  );
};

export default WebApp;
