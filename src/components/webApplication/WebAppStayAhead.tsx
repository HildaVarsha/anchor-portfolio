import React from "react";

const WebAppStayAhead = () => {
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl">
          Stay Ahead of the Curve with Our
          <span className="text-amber-400">
            {" "}
            custom web development services
          </span>
          .
        </p>
      </div>
      <div className="py-12  bg-white">
        <p className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800">
          Our mission is to elevate businesses like yours to new heights. At
          Anchor Informatics, we&apos;re more than just experts in custom web
          development; we&apos;re innovators committed to turning the latest
          tech advancements into real business value. Let us help you stay ahead
          of the competition.
        </p>
      </div>
    </div>
  );
};

export default WebAppStayAhead;
