import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const EComAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Ecommerce development services for online and brick-and-mortar retailers" />
        <p data-aos="fade-up">
          No matter what type of retail business you are, we have the right
          expertise and experience to deliver a successful ecommerce solution
          that will engage your specific audience — with a tailored
          functionality, sleek design, and human-centered approach.
        </p>
        <div className="py-12">
          <PageHeaderText label="What we build:" />
          <Image
            src={
              "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=2520&h=1500&dpr=2"
            }
            alt="E Commerce"
            width={100}
            height={100}
            quality={100}
            data-aos="fade-up"
            className="w-full h-[500px] object-cover rounded-md mt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default EComAbout;
