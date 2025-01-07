import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const CustomComputerBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Customized Computer Vision Solutions for Industry-Specific Requirements"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10">
          Create a state-of-the-art computer vision solution to transform your
          business with increased innovation and efficiency.
        </p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/custom-computer.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default CustomComputerBanner;
