import React from "react";
import Link from "next/link";

const PrivacyBanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-screen bg-opacity-60"
    >
      <div className="px-4 md:px-0 md:container mx-auto h-full flex flex-col justify-center gap-12">
        <p className="text-2xl md:text-8xl font-semibold" data-aos="fade-up">
          <span className="text-lime-500"> Privacy Policy</span>
        </p>

        <div
          className="max-w-2xl text-white text-lg md:text-xl bg-black bg-opacity-60 p-6 rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            At Anchor Informatics Ltd, your privacy is our priority. We are
            committed to safeguarding your personal information and ensuring
            compliance with all applicable data protection laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;
