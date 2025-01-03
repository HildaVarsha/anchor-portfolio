import React from "react";

const SoftwareEngineerServices = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/software-eng-service.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p>Software engineering services provided</p>
          <p className="text-amber-400">exactly when and how you need them</p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Anchor Informatics has evolved from a software engineering outsourcing
          company to a specialized technology vendor with niche expertise,
          offering flexible solutions tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default SoftwareEngineerServices;
