import React from "react";

const SoftwareEngineerHighlight = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p>Highlighting Our</p>
          <p className="text-amber-400">Software Engineering Solutions</p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Our software engineering company partners with businesses across
          various industries, including healthcare, finance, education, retail,
          supply chain management, and more. We assist clients in exploring new
          technologies, scaling IT systems company-wide, and ensuring quicker
          returns on investment. Our core expertise in software engineering
          covers:
        </p>
      </div>
    </div>
  );
};

export default SoftwareEngineerHighlight;
