import React from "react";

const MobileAppServices = () => {
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
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          &quot;<span className="text-lime-500">App development services</span>
          to elevate your business to the next level.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a leading provider of Mobile App application development services
          for enterprises, Anchor Informatics Ltd can meet any digital need,
          regardless of industry. Build a high-performance, innovative mobile
          application with the ideal front and back-end technologies for fast
          results. Our Mobile apps are crafted for maximum usability,
          scalability, and cross-browser compatibility, giving you a competitive
          edge to fuel growth.
        </p>
      </div>
    </div>
  );
};

export default MobileAppServices;
