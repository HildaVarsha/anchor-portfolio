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
          <span className="text-amber-400 ">
            Create things you can be proud of.
          </span>
        </p>
        <p data-aos="fade-up">
          Join a team as driven as you. Create exciting things for global
          brands. Level up, learn, and grow.
        </p>
      </div>
    </div>
  );
};

export default CareerBanner;
