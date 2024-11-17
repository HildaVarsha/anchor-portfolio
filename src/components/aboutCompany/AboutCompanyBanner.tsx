import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCompanyBanner = () => {
  return (
    <div className="bg-amber-300 h-[600px] pt-24 relative">
      <div className="container mx-auto text-slate-800 flex flex-col justify-center h-full">
        <div>
          <p className="text-3xl md:text-5xl font-bold ">We&apos;re leading</p>
          <p className="text-3xl md:text-5xl font-bold py-2 text-slate-800">
            Power Of Technology
          </p>
          <p className="text-sm max-w-lg pt-2">
            We get a buzz out of unlocking the power of emerging tech for both
            big-name enterprises and ambitious startups.
          </p>
        </div>
      </div>
      <Link href={"/contact-us"}>
        <Button className="w-full">
          Get In Touch <ArrowRight />
        </Button>
      </Link>

      <Image
        src={"/about-banner-img.png"}
        alt="About Anchor Informatics"
        height={800}
        width={800}
        className="absolute top-0 right-8"
      />
    </div>
  );
};

export default AboutCompanyBanner;
