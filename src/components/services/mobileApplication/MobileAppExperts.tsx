import React from "react";

const MobileAppExperts = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-experts.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl">
          &quot;<span className="text-amber-400 pr-2 ">Experts supporting</span>
          every step of your App development journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800">
          &quot;With our full-stack custom app development services, we manage
          everything from designing the user interface to developing the
          underlying algorithms and databases. As your trusted development
          partner, we’re here to tackle any tech challenges and deliver a
          seamless, high-performance mobile app tailored to your needs.&quot;
        </p>
      </div>
    </div>
  );
};

export default MobileAppExperts;
