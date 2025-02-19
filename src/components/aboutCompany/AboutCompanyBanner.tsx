import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCompanyBanner = () => {
  return (
    <div className="bg-lime-300 h-[600px] pt-24 relative">
      <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800 flex flex-col justify-center h-full">
        <div>
          <p className="text-3xl lg:text-5xl font-bold" data-aos="fade-up">
            We&apos;re leading
          </p>
          <p
            className="text-3xl lg:text-5xl font-bold py-2 text-slate-800"
            data-aos="fade-up"
          >
            Power Of Technology
          </p>
          <p className="text-sm max-w-lg pt-2" data-aos="fade-up">
            We get a buzz out of unlocking the power of emerging tech for both
            big-name enterprises and ambitious startups.
          </p>
        </div>
      </div>
      <Link href={"/contact-us"} data-aos="fade-up">
        <Button className="w-full">
          Get In Touch <ArrowRight />
        </Button>
      </Link>

      <Image
        src={"/about-banner-img.png"}
        alt="About Anchor Informatics Ltd"
        height={800}
        width={800}
        className="absolute top-4 lg:top-0 right-8"
      />
    </div>
  );
};

export default AboutCompanyBanner;
