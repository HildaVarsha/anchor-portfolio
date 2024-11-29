import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const GraphicDesignBanner = () => (
  <div className="h-screen bg-[#02132B] relative py-16">
    <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
      <PageHeaderText
        label="Creative design solutions crafted to elevate your brand's visual impact and meet your business goals."
        className="w-full md:max-w-2xl"
      />
      <p className="w-full md:max-w-2xl py-4">
        Build a unique brand identity and accelerate business growth with
        comprehensive graphic design and marketing solutions from Anchor
        Informatics.
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
      className="hidden md:absolute md:flex top-24 right-32"
    />
  </div>
);

export default GraphicDesignBanner;
