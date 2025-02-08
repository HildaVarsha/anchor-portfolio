import { PageHeaderText } from "@/components/shared";
import React from "react";

const OurCapabilities = () => {
  return (
    <div className="bg-white py-4 lg:py-16 text-slate-800">
      <div className="lg:container px-4 mx-auto">
        <PageHeaderText label={"Our capabilities include:"} />
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-16 lg:pt-8">
          <p className="font-semibold" data-aos="fade-up">
            Artificial Intelligence, Machine Learning, and Big Data
          </p>
          <p className="font-semibold" data-aos="fade-up">
            Embedded systems and the Internet of Things
          </p>
          <p className="font-semibold" data-aos="fade-up">
            Intelligent business automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;
