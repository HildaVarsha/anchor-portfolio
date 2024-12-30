import {
  AiProofAbout,
  AiProofBanner,
  AiProofBenefit,
  AiProofExplore,
  AiProofFaq,
  AiProofGlance,
  AiProofPartner,
} from "@/components/services/aiProof";
import React from "react";

const Proof = () => {
  return (
    <div>
      <AiProofBanner />
      <AiProofAbout />
      <AiProofBenefit />
      <AiProofExplore />
      <AiProofPartner />
      <AiProofFaq />
      <AiProofGlance />
    </div>
  );
};

export default Proof;
