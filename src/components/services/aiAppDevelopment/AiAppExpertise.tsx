import React from "react";

const AiAppExpertise = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-app-expertise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          360-degree
          <span className="text-lime-500">Comprehensive AI Expertise</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Stay ahead of the curve by leveraging our unparalleled AI expertise.
          With over a decade of experience in AI app development since 2009, we
          know how to drive success with artificial intelligence. Our team is
          ready to quickly implement proven AI capabilities or work alongside
          you to ignite innovative breakthroughs—and turn them into reality.
        </p>
      </div>
    </div>
  );
};

export default AiAppExpertise;
