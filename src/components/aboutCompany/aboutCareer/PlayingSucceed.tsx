import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const PlayingSucceed = () => {
  return (
    <div className="bg-white md:py-16 text-slate-800">
      <div className="px-4 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="w-full h-full">
          <PageHeaderText label="Do you play to succeed,or just to avoid taking the fall?" />
          <p className="font-semibold">Does this sound too idealistic?</p>
          <p className="font-semibold py-6">We’re certainly not perfect.</p>
          <p className="font-semibold">We do make mistakes.</p>
          <p className="py-6">
            You&apos;re allowed to make mistakes – even big ones. As long as
            you&apos;re honest enough to own them, you&apos;ll be fine.
          </p>
          <p>
            At Anchor Informatics, you&apos;ll see us own up to our mistakes
            regularly. That’s what initiative and transparency look like.
          </p>
          <p className="pt-4">
            We are all dedicated to each other’s success. All we ask in return
            is the same level of commitment.
          </p>
        </div>
        <Image
          src={"/ethical-engineer.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          className="w-full h-[550px] object-cover"
        />
      </div>
    </div>
  );
};

export default PlayingSucceed;
