import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const capabilities = [
  {
    src: "/capabilities-1.png",
    text: "Artificial intelligence, machine learning and big data",
  },
  {
    src: "/capabilities-2.png",
    text: "Embedded systems and the Internet of Things",
  },
  {
    src: "/capabilities-3.png",
    text: "Virtual reality, augmented reality and mixed reality",
  },
  {
    src: "/capabilities-4.png",
    text: "Intelligent business automation",
  },
];

const CareerCapabilities = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16">
        <PageHeaderText
          label="Our capabilities include:"
          className="text-slate-800"
        />
        <div className="flex items-center justify-between w-full text-slate-800 gap-8 pt-4">
          {capabilities.map((capability, index) => (
            <div key={index}>
              <Image
                src={capability.src}
                alt="Capabilities"
                width={56}
                height={56}
              />
              <p className="pt-6 font-semibold text-lg">{capability.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCapabilities;
