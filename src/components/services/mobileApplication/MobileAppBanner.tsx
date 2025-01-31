import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MobileAppBanner = () => {
  return (
    <div className="h-screen bg-[#02132B] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Personalized mobile app development services"
          className="w-full md:max-w-2xl"
        />
        <p className="w-full md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Create a distinctive online presence and drive business growth with
          comprehensive custom Mobile App development services from Anchor
          Informatics.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/service-banner.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute md:flex  top-24 right-32 animate-rotate"
      />
    </div>
  );
};

export default MobileAppBanner;
