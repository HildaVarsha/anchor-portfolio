import React from "react";

const GraphicDesignStayAhead = () => {
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
          Stay ahead of the curve with our custom{" "}
          <span className="text-lime-500"> digital marketing services</span>.
        </p>
      </div>
      <div className="py-12  bg-white">
        <p
          className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our mission is to elevate businesses like yours to new heights. At
          Anchor Informatics Ltd, we’re not just experts in digital marketing;
          we’re innovators committed to turning the latest marketing strategies
          and technologies into real business growth. Let us help you outpace
          the competition with data-driven, cutting-edge digital marketing
          solutions.
        </p>
      </div>
    </div>
  );
};

export default GraphicDesignStayAhead;
