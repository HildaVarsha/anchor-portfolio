import React from "react";

const SustainableBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/sustainable-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen"
    >
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col  justify-center h-full">
        <p className="text-2xl md:text-8xl font-semibold ">
          Sustainable Software Development: Our Path Forward
        </p>
        <p className="font-semibold pt-6">Published on December 28,2024 </p>
      </div>
    </div>
  );
};

export default SustainableBanner;
