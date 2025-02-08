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
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          &quot;<span className="text-lime-500">Experts guiding</span>
          you through every step of your software development and redevelopment
          journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
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
