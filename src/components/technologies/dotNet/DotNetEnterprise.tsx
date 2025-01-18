import React from "react";

const DotNetEnterprise = () => {
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
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          Enterprise .NET
          <span className="text-amber-400 pl-2">applications we develop</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Leveraging the versatility of the .NET platform, our developers build
          applications that seamlessly run across cloud, web, and desktop
          environments. We address a wide range of business challenges, from
          enterprise resource planning to content management, supply chain
          management, and much more.
        </p>
      </div>
    </div>
  );
};

export default DotNetEnterprise;
