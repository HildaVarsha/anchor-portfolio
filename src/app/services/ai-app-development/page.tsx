import {
  AiApAtAnchor,
  AiAppAbout,
  AiAppBanner,
  AiAppExpertise,
  AiAppFAQ,
  AiAppProcess,
} from "@/components/services/aiAppDevelopment";
import React from "react";

const AiApp = () => {
  return (
    <div>
      <AiAppBanner />
      <AiAppAbout />
      <AiAppExpertise />
      <AiAppProcess />
      <AiApAtAnchor />
      <AiAppFAQ />
    </div>
  );
};

export default AiApp;
