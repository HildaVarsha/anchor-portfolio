import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MachineLearningBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText
          label="Machine Learning Development and Consulting Solutions."
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl pt-4 pb-6 z-10" data-aos="fade-up">
          Harness the power of machine learning to drive tangible business value
          with Anchor Informatics Ltd. With over 13 years of industry expertise,
          we provide specialized machine learning development and consulting
          services.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Talk to our ML consultant
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/machine-learning.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute  lg:flex top-24 right-32"
      />
    </div>
  );
};

export default MachineLearningBanner;
