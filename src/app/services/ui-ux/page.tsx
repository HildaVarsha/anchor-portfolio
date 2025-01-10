import {
  UiUxAbout,
  UiUXAtAnchor,
  UiUxBanner,
  UiUxDesign,
  UiUxProcess,
} from "@/components/services/uiUx";
import React from "react";

const UiUx = () => {
  return (
    <div>
      <UiUxBanner />
      <UiUxAbout />
      <UiUxDesign />
      <UiUxProcess />
      <UiUXAtAnchor />
    </div>
  );
};

export default UiUx;
