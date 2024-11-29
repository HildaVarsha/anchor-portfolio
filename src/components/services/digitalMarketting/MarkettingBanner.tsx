import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const MarkettingBanner = () => {
  return (
    <div className="h-screen bg-[#02132B] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Personalized digital marketing services tailored to your business needs."
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4">
          &quot;Build a unique online presence and accelerate business growth
          with comprehensive digital marketing services from Anchor
          Informatics.&quot;
        </p>
        <Button className="w-fit">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/service-banner.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default MarkettingBanner;
