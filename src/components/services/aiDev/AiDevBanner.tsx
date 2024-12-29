import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const AiDevBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Introduction to AI Development Services"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4">
          At Anchor Informatics, our AI development services are designed to
          complement your in-house IT team by addressing knowledge gaps,
          tailoring commercially available AI products and foundation models to
          your specific needs, or crafting bespoke AI solutions from the ground
          up.
        </p>
        <Button className="w-fit">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/artificial-dev.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default AiDevBanner;
