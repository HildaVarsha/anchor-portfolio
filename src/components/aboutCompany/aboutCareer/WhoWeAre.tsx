import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 lg:container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-16">
        <Image
          src={"/about-who-we-are.png"}
          alt="About who we are"
          width={100}
          height={100}
          className="w-full h-96 object-cover"
          data-aos="fade-up"
        />
        <div className="w-full h-full">
          <PageHeaderText label="Who we are" />
          <p className="pb-6 lg:py-6" data-aos="fade-up">
            Anchor Informatics Ltd is a diverse team of over 300 technology
            experts across Poland, Georgia, Ukraine, Armenia, and the USA. We
            specialize in software development, strategy creation, and offering
            expert consultation.
          </p>
          <p data-aos="fade-up">
            We tackle complex challenges and drive growth for our clients,
            including renowned brands such as Take a Swing at Cancer, Procter &
            Gamble, Dun & Bradstreet, and Dollar Shave Club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
