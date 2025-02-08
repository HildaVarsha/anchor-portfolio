import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const WhoShouldApply = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container px-4 mx-auto flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div className="w-full">
          <PageHeaderText label="Who should apply" />
          <p className="font-semibold py-6">Look, this isn’t for everyone.</p>
          <p className="" data-aos="fade-up">
            If you’re solely focused on the salary and don’t prioritize the
            quality of the projects you work on, this may not be the right place
            for you.
          </p>
          <p className="pt-6" data-aos="fade-up">
            If you prefer relying on policies and processes to avoid taking
            ownership of ideas or decisions, you may find it challenging here
            too.
          </p>
        </div>
        <Image
          src={"/join-team.png"}
          alt="Join Ou Team"
          width={400}
          height={400}
          className="w-full h-[400px]"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default WhoShouldApply;
