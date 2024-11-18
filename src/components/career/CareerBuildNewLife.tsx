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
      <div className="container mx-auto text-slate-800">
        <PageHeaderText
          label="Build a new life in a new city"
          className="max-w-lg mx-auto"
        />
        <div className="flex items-center justify-between gap-8 pt-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Build new Life"
              width={300}
              height={300}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBuildNewLife;
