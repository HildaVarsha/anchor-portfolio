import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AiAppBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText
          label="AI Application Development Services"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Revolutionize your business with Anchor Informatics Ltd' AI app
          development solutions. We build innovative, AI-driven applications
          that empower you to reach new heights.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/ai-app.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute  lg:flex top-32 right-32 animate-rotate"
      />
    </div>
  );
};

export default AiAppBanner;
