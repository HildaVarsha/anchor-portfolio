import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const EComBanner = () => {
  return (
    <div className="h-screen bg-[#0b0322] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Ecommerce
development
services"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          We build best-in-class B2B ecommerce solutions, helping you drive
          reach, conversion rates, and ROI
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/e-com.webp"
        alt="About Anchor Informatics Ltd"
        height={400}
        width={600}
        data-aos="fade-up"
        className="absolute  lg:flex top-24 right-32 "
      />
    </div>
  );
};

export default EComBanner;
