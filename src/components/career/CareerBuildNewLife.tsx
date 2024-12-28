import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";

const images = [
  "/build-career-1.png",
  "/build-career-2.png",
  "/build-career-3.png",
];

const CareerBuildNewLife = () => {
  return (
    <div className="bg-white py-16">
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <PageHeaderText
          label="Build a new life in a new city"
          className="max-w-lg mx-auto"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Build new Life"
              width={300}
              height={300}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBuildNewLife;
