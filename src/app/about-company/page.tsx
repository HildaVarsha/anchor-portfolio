import {
  AboutCompanyBanner,
  AboutCompanyFacts,
  AboutOurWorkProgress,
  AboutSuccessbanner,
  AboutValues,
  AboutVision,
  AboutWhyChooseUs,
  AboutWorkWithUs,
} from "@/components/aboutCompany";
import React from "react";

const AboutCompany = () => {
  return (
    <div>
      <AboutCompanyBanner />
      <AboutCompanyFacts />
      <AboutWorkWithUs />
      <AboutValues />
      <AboutSuccessbanner />
      <AboutVision />
      <AboutOurWorkProgress />
      <AboutWhyChooseUs />
    </div>
  );
};

export default AboutCompany;
