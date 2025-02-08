import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { PageHeaderText } from "../shared";
import Link from "next/link";

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
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full z-10">
        <PageHeaderText label={headerLabel} className="w-full lg:max-w-2xl" />
        <p className="w-full lg:max-w-2xl py-4 z-10" data-aos="fade-up">
          {description}
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Get In Touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src={imageSrc}
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        data-aos="fade-up"
        className="absolute  lg:flex top-24 right-32"
      />
    </div>
  );
};

export default Banner;
