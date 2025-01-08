import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
const LowCodeBanner = () => {
  return (
    <div className="h-screen bg-[#031931] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Low-code & no-code
development services"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10">
          Speed up time to market and cut application development costs by up to
          50% with ITRex&apos;s low-code and no-code development services.
        </p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/low-code-banner.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default LowCodeBanner;
