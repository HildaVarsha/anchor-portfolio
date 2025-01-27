import React from "react";

const CustomComputerVision = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Computer Vision
          <span className="text-lime-500">
            {" "}
            {""} Solutions Revolutionizing Industries
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          With over a decade of experience and a team of top-tier talent, we
          help our clients harness the power of rapidly advancing computer
          vision technology to create lasting value. Our solutions address
          unique business challenges while driving transformation across key
          industries.
        </p>
      </div>
    </div>
  );
};

export default CustomComputerVision;
