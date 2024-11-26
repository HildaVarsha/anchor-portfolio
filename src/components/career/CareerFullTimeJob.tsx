import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerFullTimeJob = () => {
  return (
    <div className="bg-white py-16">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row  justify-between gap-12 text-slate-800">
        <Image
          src={"/full-time-job.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          className="w-full h-96 object-cover"
        />

        <div className="w-full">
          <PageHeaderText label="Job full time" className="" />
          <p className="py-4">
            Graduating seniors with unprecedented learning opportunities will
            take the first step toward a good career. We are searching for
            students who are motivated and ready to join forces with some of the
            consulting world&apos;s best and brightest minds. Pupils of MBA
          </p>
          <p className="py-4">
            Our MBA program hires from many business schools across the globe.
            Choose your place, or read more about our chances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerFullTimeJob;
