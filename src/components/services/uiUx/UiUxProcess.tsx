import React from "react";

const UiUxProcess = () => {
  return (
    <div className="bg-white pb-16">
      {" "}
      <div
        className="bg-white py-16 h-[400px] flex flex-col justify-center"
        style={{
          backgroundImage: "url('/dot-net-technology.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl  font-bold container mx-auto"
          data-aos="fade-up"
        >
          Our Process for
          <p
            className="text-lime-500 pr-2 px-4 pt-3 md:px-0 text-2xl md:text-5xl  font-bold container"
            data-aos="fade-up"
          >
            Delivering Outstanding UI/UX Design
          </p>
        </p>
      </div>
      <div className="bg-lime-500 text-slate-800">
        <div className=" text-slate-800 p-16 container mx-auto flex flex-col md:flex-row gap-12">
          <p data-aos="fade-up">
            Designers don’t need to juggle multiple roles on a project. Instead,
            they collaborate with expert business analysts, front-end
            developers, and other specialists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UiUxProcess;
