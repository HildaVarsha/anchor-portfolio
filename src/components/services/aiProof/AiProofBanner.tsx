import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AiProofBanner = () => {
  return (
    <div className="h-screen  relative py-16">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Development Services for AI Proof of Concept"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Quickly test, validate, and bring your AI ideas to life affordably
          with Anchor AI&apos;s proof-of-concept development services.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/ai-proof.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute lg:flex top-28 right-32 animate-rotate"
      />
    </div>
  );
};

export default AiProofBanner;
