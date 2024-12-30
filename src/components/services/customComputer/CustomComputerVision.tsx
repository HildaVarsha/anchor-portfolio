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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Computer Vision
          <span className="text-amber-400">
            {" "}
            {""} Solutions Revolutionizing Industries
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          With over a decade of experience and top-tier talent, we help our
          clients leverage rapidly advancing computer vision technology to
          create value. Our computer vision solutions not only address unique
          business challenges but also drive transformation across key
          industries.
        </p>
      </div>
    </div>
  );
};

export default CustomComputerVision;
