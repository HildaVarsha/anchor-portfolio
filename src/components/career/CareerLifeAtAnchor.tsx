import Image from "next/image";
import React from "react";
import { PageHeaderText } from "../shared";

const CareerLifeAtAnchor = () => {
  return (
    <div className="bg-white py-16 ">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col lg:flex-row items-center justify-between text-slate-800 gap-12">
        <Image
          src={"/your-life-at.png"}
          alt="Anchor Informatics Ltd Life"
          width={400}
          height={400}
          className="object-cover w-full h-[400px]"
        />
        <div className="w-full">
          <PageHeaderText
            label="Your life at Anchor Informatics Ltd"
            className="text-slate-800"
          />
          <p className="py-4 text-xl font-semibold" data-aos="fade-up">
            Find your favorite job with no pain and no gain
          </p>
          <p data-aos="fade-up">
            Our success is driven by our passionate and dedicated team. We
            believe in fostering relationships that create a positive impact on
            our environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerLifeAtAnchor;
