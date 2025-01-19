import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const PlayingSucceed = () => {
  return (
    <div className="bg-white md:py-16 text-slate-800">
      <div className="px-4 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="w-full h-full">
          <PageHeaderText label="Do you play to succeed,or just to avoid taking the fall?" />
          <p className="font-semibold" data-aos="fade-up">
            Does this sound too idealistic?
          </p>
          <p className="font-semibold py-6" data-aos="fade-up">
            We’re definitely not perfect.
          </p>
          <p className="font-semibold" data-aos="fade-up">
            We do make mistakes.
          </p>
          <p className="py-6" data-aos="fade-up">
            You’re allowed to make mistakes—big ones included. As long as you’re
            honest enough to take responsibility, you’ll be fine.
          </p>
          <p data-aos="fade-up">
            At Anchor Informatics, we regularly own up to our mistakes. That’s
            what transparency and initiative truly look like.
          </p>
          <p className="pt-4" data-aos="fade-up">
            We’re all committed to each other’s success. In return, we ask for
            the same level of dedication.
          </p>
        </div>
        <Image
          src={"/ethical-engineer.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          className="w-full h-[550px] object-cover"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default PlayingSucceed;
