import React from "react";
import ConsultationButton from "./ConsultationButton";

const HowWeWorkBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/how-we-work.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen"
    >
      <div className="px-4 md:px-0 md:container mx-auto h-full flex flex-col justify-center gap-12">
        <p className="text-2xl md:text-8xl font-semibold" data-aos="fade-up">
          How we can work <span className="text-amber-400">with you</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 md:w-[700px] ">
          <p data-aos="fade-up">
            Collaborate with Anchor Informatics Ltd at any stage of your
            project, choosing the engagement model that aligns best with your
            project scope and business goals.
          </p>
          <p data-aos="fade-up">
            We can develop your product using Time & Materials, Fixed Price, or
            Dedicated Team models, and apply agile or waterfall methodologies
            depending on your project needs.
          </p>

          <ConsultationButton />
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkBanner;
