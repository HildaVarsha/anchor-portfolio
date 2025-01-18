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
    <div className="bg-white md:py-16 text-slate-800">
      <div className="px-4 md:container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <p data-aos="fade-up">
            If you&apos;re interested, you can relocate to Poland, Georgia, or
            Armenia. We&apos;ll assist you and your family with legal matters,
            transportation, healthcare, and finding a home.
          </p>
          <PageHeaderText
            label="Build a new life in
a new city"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 pt-6">
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
