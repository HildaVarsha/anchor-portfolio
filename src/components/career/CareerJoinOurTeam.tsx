import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerJoinOurTeam = () => {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-0 md:container mx-auto py-16 flex flex-col md:flex-row items-center gap-12 w-full text-slate-800">
        <div className="w-full">
          <PageHeaderText label="Join our team" className="text-slate-800" />
          <p className="py-6" data-aos="fade-up">
            Look for open positions that suit your interest and skills. We are
            looking for team members who are passionate, curious, imaginative
            and concentrated on solutions.
          </p>
          <p className="" data-aos="fade-up">
            If you hide behind policies and processes because, secretly, you’re
            terrified of owning ideas or decisions, you too will think it sucks.
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
