import React from "react";

const NlpTechnology = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Key technologies
          <span className="text-green-500"> {""} we use</span>
        </p>
      </div>
      <div className="py-12 bg-green-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Anchor&apos;s team of expert NLP specialists leads the way in natural
          language processing solutions. With extensive experience in delivering
          customized NLP solutions, we not only address specific business
          challenges—our consistent strength—but also drive transformation
          across entire industries.
        </p>
      </div>
    </div>
  );
};

export default NlpTechnology;
