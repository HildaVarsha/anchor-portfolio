import React from "react";

const WebAppServices = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-5xl mx-auto font-bold max-w-4xl">
          &quot;
          <span className="text-amber-400">
            Custom web app development services
          </span>{" "}
          to elevate your business to the next level.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="max-w-4xl mx-auto text-slate-800">
          As a leading provider of custom web application development services
          for enterprises, Anchor Informatics can meet any digital need,
          regardless of industry. Build a high-performance, innovative web
          application with the ideal front and back-end technologies for fast
          results. Our web apps are crafted for maximum usability, scalability,
          and cross-browser compatibility, giving you a competitive edge to fuel
          growth.
        </p>
      </div>
    </div>
  );
};

export default WebAppServices;
