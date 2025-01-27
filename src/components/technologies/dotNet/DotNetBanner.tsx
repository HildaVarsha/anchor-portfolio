import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DotNetBanner = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Top-tier .NET development services by skilled professionals."
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10" data-aos="fade-up">
          Partner with Anchor Informatics Ltd, a leading .NET development
          company and a trusted Microsoft Gold Partner, to elevate your
          enterprise with a tailor-made .NET solution that is robust, scalable,
          and secure.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Hire .NET developers
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/dot-net.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default DotNetBanner;
