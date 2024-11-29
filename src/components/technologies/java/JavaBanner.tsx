import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

const JavaBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="A leading Java development company with top-tier talent"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4">
          At Anchor Informatics, our Java community offers a comprehensive suite
          of Java development services designed to deliver lasting value and
          drive business transformation.
        </p>
        <HireJavaDeveloperButton />
      </div>
      <Image
        src="/java-banner.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default JavaBanner;
