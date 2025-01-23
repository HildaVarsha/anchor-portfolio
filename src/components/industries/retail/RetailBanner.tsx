import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const RetailBanner = () => {
  return (
    <div className="h-screen bg-[#f79faf] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Retail software
development
services"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Attract and retain customers through stellar omnichannel experiences
          with our retail software development services
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/retail.webp"
        alt="About Anchor Informatics Ltd"
        height={400}
        width={600}
        data-aos="fade-up"
        className="absolute  md:flex top-16 right-32"
      />
    </div>
  );
};

export default RetailBanner;
