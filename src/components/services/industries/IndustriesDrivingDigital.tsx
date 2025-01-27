import React from "react";
import Image from "next/image";

const IndustriesDrivingDigital = () => {
  return (
    <div className="py-12 bg-white">
      <Image
        src={"/driving-digital.png"}
        alt="Retail Information"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="bg-lime-500 text-slate-800">
        <div
          className="px-4 md:px-0 md:max-w-2xl mx-auto py-12"
          data-aos="fade-up"
        >
          Navigating today&apos;s fast-paced digital era requires reimagining
          consumer interactions, modernizing processes, and exploring new
          business models. Anchor Informatics Ltd specializes in leveraging
          digital advancements, smart tech, and AI-driven solutions to drive
          transformation. We help companies evolve in this digital-first world,
          paving the way for dynamic “as-a-service” models and future growth.
        </div>
      </div>
    </div>
  );
};

export default IndustriesDrivingDigital;
