import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const WebAppBanner = () => {
  return (
    <div className="h-screen bg-[#02132B] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Personalized web development services"
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10">
          &quot;Create a distinctive online presence and drive business growth
          with comprehensive custom web development services from Anchor
          Informatics.&quot;
        </p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/service-banner.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default WebAppBanner;
