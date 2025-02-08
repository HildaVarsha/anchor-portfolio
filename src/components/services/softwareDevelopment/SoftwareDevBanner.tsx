import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SoftwareDevBanner = () => {
  return (
    <div className="h-screen bg-[#02132B] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Custom software solutions designed to enhance your business functionality and achieve your goals."
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          &quot;Build a robust software solution and accelerate business growth
          with comprehensive development and redevelopment services from Anchor
          Informatics.&quot;
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/service-banner.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute  lg:flex top-32 right-32 animate-rotate"
      />
    </div>
  );
};

export default SoftwareDevBanner;
