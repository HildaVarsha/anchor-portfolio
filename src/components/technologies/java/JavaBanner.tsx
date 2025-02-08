import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

const JavaBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="A leading Java development company with top-tier talent"
          className="w-full lg:max-w-2xl"
        />
        <p className="lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          At Anchor Informatics Ltd, our Java community offers a comprehensive
          suite of Java development services designed to deliver lasting value
          and drive business transformation.
        </p>
        <HireJavaDeveloperButton />
      </div>
      <Image
        src="/java-banner.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute  lg:flex top-16 lg:top-24 right-32"
      />
    </div>
  );
};

export default JavaBanner;
