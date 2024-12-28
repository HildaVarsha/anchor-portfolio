import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const WhoShouldApply = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container px-4 mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="w-full">
          <PageHeaderText label="Who should apply" />
          <p className="font-semibold py-6">Look, this isn’t for everyone.</p>
          <p className="">
            If you&apos;re only interested in a salary and don&apos;t care much
            about the quality of your projects, you’ll probably dislike it here.{" "}
          </p>
          <p className="pt-6">
            If you rely on policies and processes to avoid owning ideas or
            decisions, you&apos;ll probably find it frustrating here as well.
          </p>
        </div>
        <Image
          src={"/join-team.png"}
          alt="Join Ou Team"
          width={400}
          height={400}
          className="w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default WhoShouldApply;
