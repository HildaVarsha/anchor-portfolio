import React from "react";

const CustomComputerSolutions = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/computer-vision.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Our Computer
          <span className="text-amber-400">
            {" "}
            {""}Vision Solutions and Technologies
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Whether you&apos;re looking to upgrade your existing computer vision
          solution or build one from the ground up, our team has the expertise
          to help you overcome any challenges.
          <span className="text-blue-600">{""} go with deep learning</span> {""}{" "}
          or traditional techniques. Tell us your challenge.Our computer vision
          consultants will figure out what approach you should take to build
          exactly what you need.
        </p>
      </div>
    </div>
  );
};

export default CustomComputerSolutions;
