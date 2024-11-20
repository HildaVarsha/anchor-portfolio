import React from "react";

const SoftwareDevExperts = () => {
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
        <p className="text-5xl mx-auto font-bold max-w-4xl">
          &quot;<span className="text-amber-400">Experts guiding</span>
          you through every step of your software development and redevelopment
          journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="max-w-4xl mx-auto text-slate-800">
          &quot;With our full-service software development solutions, we handle
          everything from building your application architecture to ensuring
          seamless, high-performance functionality. As your trusted development
          partner, we’re here to address any technical challenges and provide
          scalable, efficient, and innovative software solutions tailored to
          support your business goals.&quot;
        </p>
      </div>
    </div>
  );
};

export default SoftwareDevExperts;
