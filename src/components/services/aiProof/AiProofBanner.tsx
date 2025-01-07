import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const AiProofBanner = () => {
  return (
    <div className="h-screen  relative py-16">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Development Services for AI Proof of Concept"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10">
          Quickly test, validate, and bring your AI ideas to life affordably
          with Anchor AI&apos;s proof-of-concept development services.
        </p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/ai-proof.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="md:absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default AiProofBanner;
