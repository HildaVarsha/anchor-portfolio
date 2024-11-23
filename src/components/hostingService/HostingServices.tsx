import React from "react";

const HostingServices = () => {
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
          <span className="text-amber-400">Hosting services</span> to elevate
          your business to the next level.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="max-w-4xl mx-auto text-slate-800">
          AAs a leading provider of hosting solutions for enterprises, Anchor
          Informatics can meet any hosting need, regardless of industry. Build a
          high-performance, secure online presence with the ideal infrastructure
          and tools for fast, reliable results. Our hosting services are
          designed for maximum uptime, scalability, and cross-platform
          compatibility, giving your business the competitive edge to support
          growth and seamless digital experiences.
        </p>
      </div>
    </div>
  );
};

export default HostingServices;
