import React from "react";
import { PageHeaderText } from "../../shared";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

const JavaExpertise = () => {
  return (
    <div className="bg-white py-16">
      <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
        <PageHeaderText label="Anchor Informatics Ltd — Experts by your side" />

        <div className=" bg-blue-100 p-16 flex flex-col lg:flex-row gap-4 lg:gap-12 mt-6">
          <div className="w-full">
            <p data-aos="fade-up">Mature in-house Java community</p>
            <p className="py-8" data-aos="fade-up">
              80% of mid/senior Java developers & consultants
            </p>
            <p data-aos="fade-up">
              10+ years of experience in building leading Java apps
            </p>
            <p className="pt-8" data-aos="fade-up">
              Completed Java projects of up to 10,000+ dev hours
            </p>
          </div>
          <div className="w-full">
            <p data-aos="fade-up">Global corporations among happy clients</p>
            <p className="py-8" data-aos="fade-up">
              Long-term partnerships
            </p>
            <p data-aos="fade-up">
              Proven track record in virtually every industry vertical
            </p>
            <p className="pt-8" data-aos="fade-up">
              Unique knowledge retention
            </p>
          </div>
        </div>
        <div className="mt-10">
          <HireJavaDeveloperButton />
        </div>
      </div>
    </div>
  );
};

export default JavaExpertise;
