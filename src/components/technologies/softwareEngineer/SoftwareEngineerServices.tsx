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
        <div className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold  lg:container">
          <p data-aos="fade-up">Software engineering services provided</p>
          <p className="text-lime-500" data-aos="fade-up">
            exactly when and how you need them
          </p>
        </div>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Anchor Informatics Ltd has evolved from a software engineering
          outsourcing company to a specialized technology vendor with niche
          expertise, offering flexible solutions tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default SoftwareEngineerServices;
