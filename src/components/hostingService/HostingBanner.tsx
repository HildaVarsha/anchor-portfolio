import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../shared";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

const HostingBanner = () => {
  return (
    <div className="h-screen bg-[#02132B] relative">
      <div className="container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="“Hosting solutions tailored to elevate your online presence and meet your business needs."
          className="max-w-2xl"
        />
        <p className="max-w-2xl py-4">
          &quot;Build a unique online presence and accelerate business growth
          with comprehensive hosting Service Solution marketing services from
          Anchor Informatics.&quot;
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
        className="absolute top-24 right-32"
      />
    </div>
  );
};

export default HostingBanner;
