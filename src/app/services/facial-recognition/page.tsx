import {
  FacialRecognitionAbout,
  FacialRecognitionAtAnchor,
  FacialRecognitionBanner,
  FacialRecognitionExpertise,
  FacialRecognitionFaq,
  FacialRecognitionGlance,
  FacialRecognitionSoftware,
  FacialRecognitionSoutions,
} from "@/components/services/facialRecognition";
import React from "react";

const Recognition = () => {
  return (
    <div>
      <FacialRecognitionBanner />
      <FacialRecognitionAbout />
      <FacialRecognitionSoutions />
      <FacialRecognitionSoftware />
      <FacialRecognitionExpertise />
      <FacialRecognitionAtAnchor />
      <FacialRecognitionFaq />
      <FacialRecognitionGlance />
    </div>
  );
};

export default Recognition;
