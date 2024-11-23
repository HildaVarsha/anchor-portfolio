import React from "react";

const HostingStayAhead = () => {
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
        <p className="text-5xl mx-auto font-bold max-w-4xl">
          Stay Ahead of the Curve with Our Custom
          <span className="text-amber-400"> Hosting Services</span>.
        </p>
      </div>
      <div className="py-12  bg-white">
        <p className="max-w-4xl mx-auto text-slate-800">
          Our mission is to elevate businesses like yours to new heights. At
          Anchor Informatics, we’re not just experts in website hosting; we’re
          innovators dedicated to transforming the latest hosting technologies
          into a reliable and scalable foundation for your online growth. Let us
          help you stay ahead of the competition with secure, high-performance
          hosting solutions designed to support your business at every stage.
        </p>
      </div>
    </div>
  );
};

export default HostingStayAhead;
