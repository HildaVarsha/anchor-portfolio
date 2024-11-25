import React from "react";

const MobileAppStayAhead = () => {
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
          Stay ahead of the curve with our custom
          <span className="text-amber-400"> App development services</span>.
        </p>
      </div>
      <div className="py-12  bg-white">
        <p className="max-w-4xl mx-auto text-slate-800">
          Our mission is to take businesses like yours to new heights. At Anchor
          Informatics, we’re not just experts in mobile app development; we’re
          innovators dedicated to transforming the latest tech advancements into
          tangible business value. Let us help you outpace the competition with
          cutting-edge mobile solutions.
        </p>
      </div>
    </div>
  );
};

export default MobileAppStayAhead;
