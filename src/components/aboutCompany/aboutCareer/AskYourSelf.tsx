import { PageHeaderText } from "@/components/shared";
import React from "react";

const AskYourSelf = () => {
  return (
    <div className="bg-white md:py-16 text-slate-800">
      <div className="md:container p-4 bg-slate-200  md:p-16 mx-auto">
        <PageHeaderText label="Now ask yourself" className="text-center" />
        <div className="flex flex-col justify-between md:flex-row gap-4 md:gap-16 md:pt-8">
          <p className="font-semibold" data-aos="fade-up">
            Does a poorly executed project bother you enough to speak out?
          </p>
          <p className="font-semibold" data-aos="fade-up">
            Do you take pride in your clients, your projects, your decisions,
            and your team?
          </p>
          <p className="font-semibold" data-aos="fade-up">
            Are you energized by tackling tough challenges?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskYourSelf;
