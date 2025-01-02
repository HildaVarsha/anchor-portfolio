import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { PageHeaderText } from "@/components/shared";

const DetectionBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Anomaly Detection Services and Solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl pt-4 pb-6">
          Our anomaly detection development services help you detect and address
          issues before they affect your processes, customers, revenue, or brand
          reputation.
        </p>
        <Button className="w-fit">
          Partner with our anomaly detection company
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/anomaly-detection.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default DetectionBanner;
