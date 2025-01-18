import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const EComBanner = () => {
  return (
    <div className="h-screen bg-[#0b0322] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Ecommerce
development
services"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10">
          We build best-in-class B2B ecommerce solutions, helping you drive
          reach, conversion rates, and ROI
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/e-com.webp"
        alt="About Anchor Informatics"
        height={400}
        width={600}
        className="absolute  md:flex top-24 right-32 animate-rotate"
      />
    </div>
  );
};

export default EComBanner;
