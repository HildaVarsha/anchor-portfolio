import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { PageHeaderText } from "../shared";

const Banner = ({
  headerLabel,
  description,
  imageSrc,
}: {
  headerLabel: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText label={headerLabel} className="w-full md:max-w-2xl" />
        <p className="w-full md:max-w-2xl py-4 z-10">{description}</p>
        <Button className="w-fit z-10">
          Get In Touch
          <ArrowRight />
        </Button>
      </div>
      <Image
        src={imageSrc}
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute  md:flex top-24 right-32"
      />
    </div>
  );
};

export default Banner;
