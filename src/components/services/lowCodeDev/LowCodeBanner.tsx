import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const LowCodeBanner = () => {
  return (
    <div className="h-screen bg-[#031931] relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Low-code & no-code
development services"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          Speed up time to market and cut application development costs by up to
          50% with ITRex&apos;s low-code and no-code development services.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/low-code-banner.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute lg:flex top-32 right-32"
      />
    </div>
  );
};

export default LowCodeBanner;
