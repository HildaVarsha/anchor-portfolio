import {
  AboutAskYourSelf,
  AboutBuildNewLife,
  AboutCareerBanner,
  AboutFlexibility,
  AboutOurCapabilities,
  AboutPlayingSucceed,
  AboutSuitableJob,
  AboutTransaparency,
  AboutWhoShouldApply,
  AboutWhoWeAre,
} from "@/components/aboutCompany/aboutCareer";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutCareerBanner />
      <AboutWhoWeAre />
      <AboutOurCapabilities />
      <AboutWhoShouldApply />
      <AboutAskYourSelf />
      <AboutTransaparency />
      <AboutPlayingSucceed />
      <AboutFlexibility />
      <AboutBuildNewLife />
      <AboutSuitableJob />
    </div>
  );
};

export default page;
