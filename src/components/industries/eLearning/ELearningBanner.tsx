import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const ELearningBanner = () => {
  return (
    <div className="h-screen bg-[#0d1427] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="eLearning software development services"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          We develop powerful educational solutions that turn in-person and
          online learning into a diverse, engaging, and results-driven
          experience
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/e-learning.webp"
        alt="About Anchor Informatics Ltd"
        height={400}
        width={600}
        data-aos="fade-up"
        className="absolute  lg:flex top-16 right-32"
      />
    </div>
  );
};

export default ELearningBanner;
