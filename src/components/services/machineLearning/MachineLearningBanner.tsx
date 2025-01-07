import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const MachineLearningBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText
          label="Machine Learning Development and Consulting Solutions."
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl pt-4 pb-6 z-10">
          Harness the power of machine learning to drive measurable business
          value with Anchor Informatics. Backed by over 13 years of industry
          experience, we offer expert machine learning development and
          consulting services.
        </p>
        <Button className="w-fit z-10">
          Talk to our ML consultant
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/machine-learning.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute  md:flex top-24 right-32"
      />
    </div>
  );
};

export default MachineLearningBanner;
