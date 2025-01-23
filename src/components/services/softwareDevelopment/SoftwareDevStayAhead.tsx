import React from "react";

const SoftwareDevStayAhead = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          Stay Ahead of the Curve with Our Custom
          <span className="text-amber-400">
            {" "}
            Software Development and Redevelopment Services
          </span>
          .
        </p>
      </div>
      <div className="py-12  bg-white">
        <p
          className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our mission is to elevate businesses like yours to new heights. At
          Anchor Informatics Ltd, we’re not just experts in software
          development; we’re innovators dedicated to transforming the latest
          technologies into powerful and scalable solutions for your brand. Let
          us help you stay ahead of the competition with custom software
          development and redevelopment services designed to support your
          business at every stage of growth.
        </p>
      </div>
    </div>
  );
};

export default SoftwareDevStayAhead;
