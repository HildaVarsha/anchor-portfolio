import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NlpBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="NLP Services and Solutions"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Partner with Anchor&apos;s Informative for cutting-edge NLP services
          to automate your business and take advantage of the opportunities
          created by recent advancements in NLP.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/nlp-services.png"
        alt="About Anchor Informatics Ltd"
        height={700}
        width={600}
        className="absolute lg:flex top-28 right-32 animate-rotate"
      />
    </div>
  );
};

export default NlpBanner;
