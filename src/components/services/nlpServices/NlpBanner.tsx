import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const NlpBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="NLP Services and Solutions"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Collaborate with Anchor&apos;s Informative for advanced NLP services
          to automate your business and capitalize on the opportunities that
          recent NLP breakthroughs are creating.
        </p>
        <Button className="w-fit z-10" data-aos="fade-up">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/nlp-services.png"
        alt="About Anchor Informatics"
        height={700}
        width={600}
        className="absolute md:flex top-24 right-32 animate-rotate"
      />
    </div>
  );
};

export default NlpBanner;
