import React from "react";

const AboutCompanyFacts = () => {
  return (
    <div className="px-4 md:px-0 md:max-w-lg mx-auto py-24">
      <p className="text-2xl md:text-5xl font-semibold pb-6 text-center">
        <span className="text-amber-400">Key facts</span> about us
      </p>
      <div className="flex  items-center justify-between pt-8">
        <div>
          <p className="text-5xl font-semibold text-amber-400">560</p>
          <p>Projects Done</p>
        </div>
        <div>
          <p className="text-5xl font-semibold text-amber-400">5+</p>
          <p>Partners</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8">
        <div>
          <p className="text-5xl font-semibold text-amber-400">20+</p>
          <p>Companies</p>
        </div>
        <div>
          <p className="text-5xl font-semibold text-amber-400 text-end">500+</p>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8">
        <div className="w-full">
          <p className="text-5xl font-semibold text-amber-400">90%</p>
          <p>Quality Services</p>
        </div>
        <div className="w-full">
          <p className="text-5xl font-semibold text-amber-400 text-end">95%</p>
          <p className="text-end">Our Software Makes Your Life Easier</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyFacts;
