import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FacialRecognitionBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Services for the development of facial recognition software."
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4">
          Utilize Anchor&apos;s advanced facial recognition software development
          services to build next-generation solutions for security, compliance
          monitoring, and behavior analytics.
        </p>
        <Button className="w-fit">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/facial-recognition.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute hidden md:flex top-24 right-32"
      />
    </div>
  );
};

export default FacialRecognitionBanner;
