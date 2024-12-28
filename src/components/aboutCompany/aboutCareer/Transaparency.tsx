import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const Transaparency = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <Image
          src={"/full-time-job.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          className="w-full h-[550px] object-cover"
        />
        <div className="w-full h-full">
          <PageHeaderText label="Honesty, transparency, and a family spirit." />
          <p className="py-6">
            We always aim to be honest with each other and our clients.
            It&apos;s not just about being truthful; it’s about taking
            responsibility and being transparent, never hiding important
            details. develop software, create strategies, and provide expert
            guidance.
          </p>
          <p>
            We’re not afraid to argue because we care deeply about our work.
            Disagreements happen, but we handle them like family, always
            supporting and helping each other.
          </p>
          <p className="pt-4">
            Our managers follow this principle as well. You’re never too junior
            to ask questions or share your opinion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaparency;
