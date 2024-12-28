import { PageHeaderText } from "@/components/shared";
import React from "react";

const AskYourSelf = () => {
  return (
    <div className="bg-white md:py-16 text-slate-800">
      <div className="md:container p-4 bg-slate-200  md:p-16 mx-auto">
        <PageHeaderText label="Now ask yourself" className="text-center" />
        <div className="flex flex-col justify-between md:flex-row gap-4 md:gap-16 md:pt-8">
          <p className="font-semibold">
            Does being part of a poorly executed project bother you enough to
            speak up?
          </p>
          <p className="font-semibold">
            Do you care about your client, your project, your decisions, and
            your team?
          </p>
          <p className="font-semibold">
            Do you thrive on solving challenging problems?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskYourSelf;
