import { PageHeaderText } from "@/components/shared";
import React from "react";

const OurCapabilities = () => {
  return (
    <div className="bg-white py-4 md:py-16 text-slate-800">
      <div className="md:container px-4 mx-auto">
        <PageHeaderText label={"Our capabilities include:"} />
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-16 md:pt-8">
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
