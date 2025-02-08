import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AiDevBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Introduction to AI Development Services"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          At Anchor Informatics Ltd, our AI development services are crafted to
          support your in-house IT team by filling knowledge gaps, customizing
          off-the-shelf AI products and foundation models to suit your specific
          requirements, or creating custom AI solutions from scratch.
        </p>
        <Link href={"/contact-us"} className="z-10">
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/artificial-dev.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute lg:flex top-24 right-32"
      />
    </div>
  );
};

export default AiDevBanner;
