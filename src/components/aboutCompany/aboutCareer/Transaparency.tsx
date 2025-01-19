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
          <p className="py-6" data-aos="fade-up">
            We strive for honesty with each other and our clients. It’s not just
            about truthfulness; it’s about owning our actions, being
            transparent, and never withholding key information.
          </p>
          <p data-aos="fade-up">
            We’re not afraid to challenge each other because we care deeply
            about the work we do. Disagreements are inevitable, but we approach
            them like a family—always supporting and learning from one another.
          </p>
          <p className="pt-4" data-aos="fade-up">
            Our managers embody this mindset too. You’re never too junior to ask
            questions or voice your opinion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaparency;
