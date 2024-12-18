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
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container">
          Choose a fitting
          <span className="text-amber-400"> engagement model</span>.
        </p>
      </div>
      <div className="py-12  bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          We carefully evaluate your requirements to recommend the ideal
          cooperation model that aligns with your business goals, project scope,
          and desired level of flexibility.
        </p>
      </div>
    </div>
  );
};

export default DotNetEngagement;
