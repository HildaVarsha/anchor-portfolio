import React from "react";

const SoftwareDevServices = () => {
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
          &quot;
          <span className="text-lime-500">
            Software Development and Redevelopment Services
          </span>{" "}
          to Elevate Your Business to the Next Level.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a leading provider of software development solutions for
          enterprises, Anchor Informatics Ltd can meet any technical need,
          regardless of industry. Build high-performance, scalable applications
          with tailored development strategies and tools for seamless, reliable
          results. Our software services are designed for maximum flexibility,
          scalability, and cross-platform compatibility, giving your business
          the technical edge to support growth and deliver seamless digital
          experiences.
        </p>
      </div>
    </div>
  );
};

export default SoftwareDevServices;
