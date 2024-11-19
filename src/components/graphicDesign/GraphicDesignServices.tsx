import React from "react";

const GraphicDesignServices = () => {
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
          &quot;<span className="text-amber-400">Design services</span> to
          elevate your brand to the next level.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="max-w-4xl mx-auto text-slate-800">
          As a leading provider of design solutions for enterprises, Anchor
          Informatics can meet any creative need, regardless of industry. Build
          a high-impact, visually cohesive brand presence with tailored design
          strategies and tools for stunning, memorable results. Our design
          services are crafted for maximum versatility, scalability, and
          cross-platform consistency, giving your business the creative edge to
          support growth and deliver seamless visual experiences.
        </p>
      </div>
    </div>
  );
};

export default GraphicDesignServices;
