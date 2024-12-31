import {
  NlpAbout,
  NlpAtAnchor,
  NlpBanner,
  NlpFaq,
  NlpGlance,
  NlpIndustry,
  NlpOverview,
  Nlpprocess,
  NlpSolutions,
  NlpTechnology,
} from "@/components/services/nlpServices";
import React from "react";

const Nlp = () => {
  return (
    <div>
      <NlpBanner />
      <NlpAbout />
      <NlpOverview />
      <NlpSolutions />
      <NlpIndustry />
      <NlpTechnology />
      <Nlpprocess />
      <NlpAtAnchor />
      <NlpFaq />
      <NlpGlance />
    </div>
  );
};

export default Nlp;
