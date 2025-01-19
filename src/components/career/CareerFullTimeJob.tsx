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
          data-aos="fade-up"
        />

        <div className="w-full">
          <PageHeaderText label="Job full time" className="" />
          <p className="py-4" data-aos="fade-up">
            Graduating seniors with exceptional learning opportunities will take
            the first step toward a successful career. We are looking for
            motivated students ready to collaborate with some of the brightest
            minds in the consulting world, including MBA graduates.
          </p>
          <p className="py-4" data-aos="fade-up">
            Our MBA program recruits from top business schools worldwide. Choose
            your location or learn more about the opportunities available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerFullTimeJob;
