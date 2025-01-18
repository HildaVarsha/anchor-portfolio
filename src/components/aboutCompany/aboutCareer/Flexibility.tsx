import { PageHeaderText } from "@/components/shared";
import React from "react";
import Image from "next/image";

const Flexibility = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-16">
          <div className="w-full">
            <PageHeaderText
              label="Flexibility and
balance"
            />
            <p className="font-semibold" data-aos="fade-up">
              We believe in hard work, which means giving your best effort
              honestly—not sacrificing every waking hour.
            </p>
          </div>
          <p className="w-full" data-aos="fade-up">
            Our team is driven and accountable, earning a high level of trust.
            Flexible and remote work arrangements are fully supported.
          </p>
          <p className="w-full" data-aos="fade-up">
            If you&apos;re stuck on a tough problem and need a break, head to
            the gym for a workout or grab the Playstation to unwind and take on
            some bad guys.
          </p>
        </div>
        <Image
          src={"/about-flexibility.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          data-aos="fade-up"
          className="w-full h-full object-cover py-12"
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <PageHeaderText label="Opportunity and growth" className="w-full" />
          <div className="w-full">
            <p data-aos="fade-up">
              We expect you to tackle challenging problems alongside skilled
              professionals who will support you. You’ll make tough decisions,
              with the freedom to learn from mistakes. With the right attitude,
              your skills will rapidly grow, and you’ll take pride in your
              development. 4o mini
            </p>
            <p className="pt-6" data-aos="fade-up">
              We also offer language classes and clear career progression paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
