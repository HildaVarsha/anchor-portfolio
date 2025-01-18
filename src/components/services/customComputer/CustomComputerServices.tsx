import React from "react";

const CustomComputerServices = () => {
  return (
    <div className="bg-white pt-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Why Anchor’s Informative
          <span className="text-amber-400">{""} computer vision services</span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-amber-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong>Cross-industry experience.</strong> {""} With over a decade
            of experience providing computer vision services across various
            industries, our team has a deep understanding of your
            industry&apos;s challenges and the nature of your data, allowing us
            to create the ideal solution for your business.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>Broad expertise.</strong> {""} We stay at the forefront of
            innovation and continuously strive for improvement. Both established
            companies and ambitious startups have trusted us to turn their ideas
            into successful computer vision solutions.
          </p>
        </div>
        <div>
          <p data-aos="fade-up">
            <strong>WTech agnostic.</strong> {""} We don&apos;t settle for
            average. We carefully choose the computer vision techniques,
            platforms, and libraries that are best suited for your specific
            task. We also ensure full compliance with regulatory requirements.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>R&D. {""}</strong> In our specialized R&D lab, we explore
            new computer vision concepts and experiment with the latest
            technologies. By building prototypes based on key insights, we
            proactively address your challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomComputerServices;
