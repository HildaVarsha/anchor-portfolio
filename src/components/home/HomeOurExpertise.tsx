import React from "react";
import { PageHeaderText } from "../shared";
import Image from "next/image";

const HomeOurExpertise = () => {
  return (
    <div className="py-12 container mx-auto">
      <PageHeaderText label={"Our Expertise"} className="text-center" />
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-8">
          <Image
            src={"/expertise-ai.png"}
            alt="expertise"
            width={220}
            height={188}
          />
          <div>
            <p className="font-semibold">AI (Artificial Intelligence)</p>
            <p className="pt-3">
              From machine learning to natural language processing, we unlock
              the full potential of AI to help machines think, act, and improve.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 my-8">
          <Image
            src={"/expertise-rcs.png"}
            alt="expertise"
            width={220}
            height={188}
          />
          <div>
            <p className="font-semibold">RCS (Resilient Cyber sector)</p>
            <p className="pt-3">
              Our “bend but don’t break” approach ensures your enterprise
              remains secure, resilient, and prepared for any disruption.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Image
            src={"/expertise-saas.png"}
            alt="expertise"
            width={220}
            height={188}
          />
          <div>
            <p className="font-semibold">SaaS (Software as a Service)</p>
            <p className="pt-3">
              Powering the future of work with cloud based solution, giving your
              seemless access to software resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurExpertise;
