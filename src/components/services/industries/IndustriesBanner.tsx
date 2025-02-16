import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const IndustriesBanner = () => {
  return (
    <div className="h-screen bg-[#00021B]">
      <div className="px-4 lg:px-0 lg:container mx-auto  flex flex-col justify-center h-full">
        <PageHeaderText
          label="Empowering Industries with Innovation"
          className="w-full lg:max-w-2xl"
        />
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Tap in digital finance <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src={"/industries.png"}
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        data-aos="fade-up"
        className="absolute  lg:flex top-32 right-32 animate-rotate"
      />
    </div>
  );
};

export default IndustriesBanner;
