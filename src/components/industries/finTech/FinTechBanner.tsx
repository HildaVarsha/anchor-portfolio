import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import { GetHireButton } from "@/components/componentShared";

const FinTechBanner = () => {
  return (
    <div className="h-screen bg-[#00021B]">
      <div className="px-4 md:px-0 md:container mx-auto  flex flex-col justify-center h-full z-50">
        <PageHeaderText
          label="Financial software
development
services"
          className="w-full md:max-w-2xl"
        />
        <p className="z-10 pb-8 md:max-w-2xl">
          We help enterprises and startups tap into the new era of finance. The
          one where operations are automated, decisions are data-driven, and
          security is top-notch. Use our financial software development services
          to step into the new, too.
        </p>

        <GetHireButton />
      </div>
      <Image
        src={"/industries.png"}
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute  md:flex top-24 right-32"
      />
    </div>
  );
};

export default FinTechBanner;
