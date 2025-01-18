import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const AiAppBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText
          label="AI Application Development Services"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Transform your business with Anchor Informatics&apos; AI app
          development services. We create smart, cutting-edge AI-powered
          applications that help you achieve the extraordinary.
        </p>
        <Button className="w-fit z-10" data-aos="fade-up">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/ai-app.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute  md:flex top-20 right-32 animate-rotate"
      />
    </div>
  );
};

export default AiAppBanner;
