import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const SupplyChainBanner = () => {
  return (
    <div className="h-screen bg-[#001233] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Digital solutions for manufacturing
and supply chain"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10">
          Leverage the power of next-gen technologies to revamp manufacturing
          and supply chain management processes, keep your clients happy, and
          improve your bottom line
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/manufacture.webp"
        alt="About Anchor Informatics"
        height={400}
        width={600}
        className="absolute  md:flex top-16 right-32"
      />
    </div>
  );
};

export default SupplyChainBanner;
