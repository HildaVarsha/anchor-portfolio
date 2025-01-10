import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const UiUxBanner = () => {
  return (
    <div className="h-screen bg-[#FEDB3B] relative text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText
          label="Comprehensive UI/UX design solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10">
          Anchor informatics offers a full suite of UI/UX design services,
          transforming mobile apps, websites, dashboards, and cyber-physical
          systems into standout solutions that captivate users and drive
          tangible business results.
        </p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/ui-ux.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden  md:flex top-24 right-32"
      />
    </div>
  );
};

export default UiUxBanner;
