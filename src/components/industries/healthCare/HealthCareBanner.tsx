import React from "react";
import { Banner } from "@/components/componentShared";

const HealthCareBanner = () => {
  return (
    <Banner
      headerLabel={"Healthcare software development services"}
      description={
        "Discover how our healthcare software development services can enhance health outcomes, educate patients, and automate workflows, all while adhering to industry-specific data security standards and regulations."
      }
      imageSrc={"/health-care.webp"}
    />
  );
};

export default HealthCareBanner;
