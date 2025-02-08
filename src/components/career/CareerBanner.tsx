import React from "react";

const CareerBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/career-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen"
    >
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col items-center justify-center h-full">
        <p
          className="text-2xl lg:text-8xl font-semibold text-lime-500"
          data-aos="fade-up"
        >
          Build things you’re
        </p>
        <p
          className="text-2xl lg:text-8xl font-semibold text-lime-500"
          data-aos="fade-up"
        >
          proud of
        </p>
        <p
          className="pt-4 max-w-3xl mx-auto text-center text-xl"
          data-aos="fade-up"
        >
          Join a crew as motivated as you. Make cool stuff for global brands.
          Level up, learn and grow.
        </p>
      </div>
    </div>
  );
};

export default CareerBanner;
