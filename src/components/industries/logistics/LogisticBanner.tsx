import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { GetHireButton } from "@/components/componentShared";

const LogisticBanner = () => {
  return (
    <div className="h-screen bg-[#525252] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Logistics software
development"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Embrace logistics and transportation management technology for smarter
          and cost-effective operations to get ahead in the industry faced with
          a dramatic digital disruption
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/logistics.webp"
        alt="About Anchor Informatics Ltd"
        height={400}
        width={600}
        data-aos="fade-up"
        className="absolute  lg:flex top-16 right-32"
      />
    </div>
  );
};

export default LogisticBanner;
