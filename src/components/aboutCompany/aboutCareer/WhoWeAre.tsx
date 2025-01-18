import { PageHeaderText } from "@/components/shared";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
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
          <p className="pb-6 md:py-6" data-aos="fade-up">
            Anchor Informatics is a team of over 300 technology professionals
            located in Poland, Georgia, Ukraine, Armenia, and the USA. We
            develop software, create strategies, and provide expert guidance.
          </p>
          <p data-aos="fade-up">
            We tackle challenges and fuel growth for our clients, including
            major names like Take a Swing at Cancer, Procter & Gamble, Dun &
            Bradstreet, and Dollar Shave Club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
