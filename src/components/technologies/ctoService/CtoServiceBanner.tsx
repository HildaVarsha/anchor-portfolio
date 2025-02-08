import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";

const CtoServiceBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="CTO as a Service"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Leverage our technical leadership through CTO-as-a-Service to turn
          your bold business ideas into reality, while minimizing risks and
          optimizing costs.
        </p>
        <HireButton />
      </div>
      <Image
        src="/cto-service.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute lg:flex hidden lg:top-24 right-32"
      />
    </div>
  );
};

export default CtoServiceBanner;
