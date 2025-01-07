import React from "react";
import Image from "next/image";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const DotNetBanner = () => {
  return (
    <div className="h-screen bg-[#0E0B0A] relative">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Top-tier .NET development services by skilled professionals."
          className="w-full md:max-w-2xl"
        />
        <p className="md:max-w-2xl py-4 z-10">
          Partner with Anchor Informatics, a leading .NET development company
          and a trusted Microsoft Gold Partner, to elevate your enterprise with
          a tailor-made .NET solution that is robust, scalable, and secure.
        </p>
        <Button className="w-fit z-10">
          Hire .NET developers
          <ArrowRight />
        </Button>
      </div>
      <Image
        src="/dot-net.png"
        alt="About Anchor Informatics"
        height={500}
        width={500}
        className="absolute md:flex top-24 right-32"
      />
    </div>
  );
};

export default DotNetBanner;
