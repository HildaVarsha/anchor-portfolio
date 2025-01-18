import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerEthicalEngineer = () => {
  return (
    <div className="bg-white py-16">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row  justify-between gap-12 text-slate-800">
        <div className="w-full">
          <PageHeaderText label="Truly Ethical Engineering" className="" />
          <p className="py-4" data-aos="fade-up">
            Along with our agencies, consumers and communities, we are creating
            solutions that enhance the lives of millions around the world, both
            now and for decades to come. And we abide everyday by our Code of
            Ethics. The multi-functional environments, whether operating online
            or on-site, promote innovation , creativity, learning and
            development, and teamwork.
          </p>
          <p className="py-4" data-aos="fade-up">
            We invest in environments, infrastructure and resources to enable
            the creativity of our internationally diverse community of people
            and talents. We merge comfort and efficiency in welcoming, familiar,
            environmentally friendly and physically accessible spaces for
            everyone.
          </p>
        </div>

        <Image
          src={"/ethical-engineer.png"}
          alt="Full Time Job"
          width={400}
          height={400}
          className="w-full h-96 object-cover"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default CareerEthicalEngineer;
