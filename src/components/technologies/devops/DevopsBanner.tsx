import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";

const DeveopsBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="DevOps Consulting Services & Solutions"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Accelerate software development and transform into a top-tier delivery
          organization with the help of our experienced DevOps consultants and
          engineers.
        </p>
        <HireButton label="Let's Talk" />
      </div>
      <Image
        src="/devops.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute  lg:flex top-12 lg:top-32 right-32 animate-rotate"
      />
    </div>
  );
};

export default DeveopsBanner;
