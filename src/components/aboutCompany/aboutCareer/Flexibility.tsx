import { PageHeaderText } from "@/components/shared";
import React from "react";
import Image from "next/image";

const Flexibility = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-16">
          <div className="w-full">
            <PageHeaderText label="Flexibility and balance" />
            <p className="font-semibold" data-aos="fade-up">
              We believe in hard work, which means giving your best effort
              honestly—not sacrificing every waking hour.
            </p>
          </div>
          <p className="w-full" data-aos="fade-up">
            Our team is motivated and accountable, earning a strong sense of
            trust. We fully support flexible and remote work arrangements.
          </p>
          <p className="w-full" data-aos="fade-up">
            If you're facing a challenging problem and need a break, hit the gym
            for a workout or relax with the PlayStation and take on some bad
            guys.
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
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          <PageHeaderText label="Opportunity and growth" className="w-full" />
          <div className="w-full">
            <p data-aos="fade-up">
              We expect you to take on challenging problems with the support of
              skilled professionals. You’ll make tough decisions, with the
              freedom to learn from your mistakes. With the right mindset, your
              skills will grow quickly, and you’ll take pride in your progress.
            </p>
            <p className="pt-6" data-aos="fade-up">
              We also provide language classes and clear career advancement
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexibility;
