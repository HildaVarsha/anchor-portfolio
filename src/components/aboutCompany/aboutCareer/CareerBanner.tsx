import React from "react";

const CareerBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/about-career.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen"
    >
      <div className="px-4 md:px-0 md:container mx-auto h-full flex flex-col justify-center items-center gap-12">
        <p
          className="text-2xl md:text-8xl font-semibold text-center"
          data-aos="fade-up"
        >
          <span className="text-green-500 ">
            Build things you can take pride in.
          </span>
        </p>
        <p data-aos="fade-up">
          Be part of a team as passionate as you. Craft innovative solutions for
          global brands. Elevate your skills, expand your knowledge, and thrive.
        </p>
      </div>
    </div>
  );
};

export default CareerBanner;
