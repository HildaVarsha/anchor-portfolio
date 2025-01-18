import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import { GetHireButton } from "@/components/componentShared";

const MediaBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Media & entertainment
software solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Boost content production, collaborate globally, and engage audiences
          of all sizes with innovative and insightful media and entertainment
          software solutions
        </p>
        <GetHireButton />
      </div>
      <Image
        src="/media-entertainment.jpg"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        data-aos="fade-up"
        className="absolute md:flex top-24 right-32 animate-rotate"
      />
    </div>
  );
};

export default MediaBanner;
