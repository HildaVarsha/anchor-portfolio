import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerEthicalEngineer = () => {
  return (
    <div className="bg-white py-16">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col lg:flex-row  justify-between gap-12 text-slate-800">
        <div className="w-full">
          <PageHeaderText label="Truly Ethical Engineering" className="" />
          <p className="py-4" data-aos="fade-up">
            Together with our agencies, consumers, and communities, we are
            creating solutions that improve the lives of millions around the
            world, both now and for decades to come. We adhere to our Code of
            Ethics every day. Our multi-functional environments, whether online
            or on-site, foster innovation, creativity, learning, development,
            and teamwork.
          </p>
          <p className="py-4" data-aos="fade-up">
            We invest in environments, infrastructure, and resources to support
            the creativity of our internationally diverse community. We blend
            comfort and efficiency in welcoming, familiar, environmentally
            friendly, and physically accessible spaces for all.
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
