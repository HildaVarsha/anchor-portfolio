import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";

import HireButton from "./HireButton";

const SoftwareEngineerBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Software Engineering Solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Transform your business processes, upgrade existing technology
          systems, and launch innovative products with Anchor Informatics Ltd—a
          software engineering company that truly cares.
        </p>
        <HireButton />
      </div>
      <Image
        src="/software-solutions.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="md:absolute md:flex hidden md:top-20 right-32 md:animate-rotate"
      />
    </div>
  );
};

export default SoftwareEngineerBanner;
