import React from "react";

const AiAppExpertise = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-app-expertise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          360-degree
          <span className="text-amber-400">Comprehensive AI Expertise</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Stay ahead of early adopters by leveraging our unmatched AI expertise.
          With a track record of providing AI app development services since
          2009, we understand how to help you achieve success with artificial
          intelligence. Our team is ready to swiftly integrate market-tested AI
          capabilities or collaborate with you to spark breakthrough
          innovations—and bring them to life.
        </p>
      </div>
    </div>
  );
};

export default AiAppExpertise;
