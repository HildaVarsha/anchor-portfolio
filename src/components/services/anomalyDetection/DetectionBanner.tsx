import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { PageHeaderText } from "@/components/shared";
import Link from "next/link";

const DetectionBanner = () => {
  return (
    <div className="h-screen  relative">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col justify-center h-full">
        <PageHeaderText
          label="Anomaly Detection Services and Solutions"
          className="w-full lg:max-w-2xl"
        />
        <p className="w-full lg:max-w-2xl pt-4 pb-6 z-10" data-aos="fade-up">
          Our anomaly detection development services help you identify and
          address issues proactively, preventing potential disruptions to your
          processes, customer satisfaction, revenue, or brand reputation.
        </p>
        <Link href={"/contact-us"}>
          <Button className="w-fit z-10" data-aos="fade-up">
            Partner with our anomaly detection company
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Image
        src="/anomaly-detection.png"
        alt="About Anchor Informatics Ltd"
        height={500}
        width={500}
        className="absolute lg:flex top-32 right-32 animate-rotate"
      />
    </div>
  );
};

export default DetectionBanner;
