import { PageHeaderText } from "@/components/shared";
import React from "react";
import Image from "next/image";

const BuildNewLife = () => {
  const images = [
    "/build-career-1.png",
    "/build-career-2.png",
    "/build-career-3.png",
  ];
  4;
  return (
    <div className="bg-white lg:py-16 text-slate-800">
      <div className="px-4 lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          <p data-aos="fade-up">
            If you're interested, you can relocate to Poland, Georgia, or
            Armenia. We’ll support you and your family with legal matters,
            transportation, healthcare, and finding a place to live.
          </p>
          <PageHeaderText label="Build a new life in a new city" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 pt-6">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Build new Life"
              width={300}
              height={300}
              className="w-full"
              data-aos="fade-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildNewLife;
