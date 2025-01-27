import React from "react";

const DevopsBenefits = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/devops-benefits.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">Benefits you get with our</p>
          <p className="text-lime-500" data-aos="fade-up">
            DevOps Solutions{" "}
          </p>
        </div>
      </div>
      <div className="py-12">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our DevOps solutions company guarantees you’ll maximize the benefits
          of rapid iterations, on-demand infrastructure setup and configuration,
          streamlined architecture, enhanced security, and automated testing
          tools. Your business agility will be elevated, with risks minimized
          and costs lowered.
        </p>
      </div>
    </div>
  );
};

export default DevopsBenefits;
