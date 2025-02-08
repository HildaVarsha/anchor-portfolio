import React from "react";

const DotNetEngagement = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/dot-net-fitting.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          Choose a fitting
          <span className="text-lime-500"> engagement model</span>.
        </p>
      </div>
      <div className="py-12  bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We carefully evaluate your requirements to recommend the ideal
          cooperation model that aligns with your business goals, project scope,
          and desired level of flexibility.
        </p>
      </div>
    </div>
  );
};

export default DotNetEngagement;
