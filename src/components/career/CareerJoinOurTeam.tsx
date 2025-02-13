import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerJoinOurTeam = () => {
  return (
    <div className="bg-white">
      <div className="px-4 lg:px-0 lg:container mx-auto py-16 flex flex-col lg:flex-row items-center gap-12 w-full text-slate-800">
        <div className="w-full">
          <PageHeaderText label="Join our team" className="text-slate-800" />
          <p className="py-6" data-aos="fade-up">
            Explore open positions that align with your interests and skills. We
            are seeking team members who are passionate, curious, imaginative,
            and focused on finding solutions.
          </p>
          <p className="" data-aos="fade-up">
            If you hide behind policies and processes because, deep down, you're
            afraid of owning ideas or decisions, then this environment may not
            be for you.
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

export default CareerJoinOurTeam;
