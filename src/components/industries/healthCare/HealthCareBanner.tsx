import React from "react";
import { Banner } from "@/components/componentShared";

const HealthCareBanner = () => {
  return (
    <Banner
      headerLabel={"Healthcare software development services"}
      description={
        "Experience the impact of our healthcare software development services to improve health outcomes, educate patients, and automate workflows, all while meeting the industry-specific data and security standards"
      }
      imageSrc={"/health-care.webp"}
    />
  );
};

export default HealthCareBanner;
