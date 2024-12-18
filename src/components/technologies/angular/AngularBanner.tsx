import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";

const AngularBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Expert Angular development services for dynamic web applications."
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4">
          Hire dedicated Angular developers from Anchor Information, offering a
          comprehensive range of Angular development services. We specialize in
          building rich, dynamic, and complex applications tailored to meet your
          unique business requirements.
        </p>
        <HireButton label="Hire vetted Angular developers" />
      </div>
      <Image
        src="/angular-banner.png"
        alt="About Anchor Informatics"
        height={500}
        width={600}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default AngularBanner;
