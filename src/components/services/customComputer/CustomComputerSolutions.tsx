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
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Our Computer
          <span className="text-lime-500">
            {" "}
            {""}Vision Solutions and Technologies
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you&apos;re looking to upgrade an existing computer vision
          solution or build one from the ground up, our team has the expertise
          to help you overcome any challenges.
          <span className="text-blue-600">Go with deep learning</span> or
          traditional techniques—our computer vision consultants will help you
          choose the best approach to meet your needs.
        </p>
      </div>
    </div>
  );
};

export default CustomComputerSolutions;
