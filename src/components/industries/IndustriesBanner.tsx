import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../shared";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

const IndustriesBanner = () => {
  return (
    <div className="h-screen bg-[#00021B]">
      <div className="container mx-auto  flex flex-col justify-center h-full">
        <PageHeaderText
          label="Empowering Industries with Innovation"
          className="max-w-2xl"
        />
        <Button className="w-fit">
          Tap in digital finance <ArrowRight />
        </Button>
      </div>
      <Image
        src={"/industries.png"}
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute top-24 right-32"
      />
    </div>
  );
};

export default IndustriesBanner;
