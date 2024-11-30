import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";

import HireButton from "./HireButton";

const SoftwareEngineerBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Software Engineering Solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4">
          Transform your business processes, upgrade existing technology
          systems, and launch innovative products with Anchor Informatics—a
          software engineering company that truly cares.
        </p>
        <HireButton />
      </div>
      <Image
        src="/software-solutions.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default SoftwareEngineerBanner;
