import React from "react";

const DevopsAtAnchor = () => {
  return (
    <div className="bg-white hidden lg:block">
      <div
        className="bg-white py-16 h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/devops-anchor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      ></div>
      <div className="py-12">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Tangible DevOps Benefits Reported by Leading Performers (Source: DORA)
        </p>
      </div>
    </div>
  );
};

export default DevopsAtAnchor;
