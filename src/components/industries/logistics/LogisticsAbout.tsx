import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const LogisticsAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Transportation and logistics software development company to serve your innovation needs" />
        <p data-aos="fade-up">
          We understand that the pandemic has brought about unprecedented
          challenges, and we're here to support you through this transformation.
          Leverage our unparalleled expertise in logistics software development
          to shape the future of your business. We create advanced logistics and
          transportation solutions with cutting-edge features that bridge
          visibility gaps, enable informed decision-making, and enhance supply
          chain resilience.
        </p>

        <div className="py-12 flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="w-full">
            <p
              className="font-semibold text-blue-600 flex items-center gap-4"
              data-aos="fade-up"
            >
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" />{" "}
              Logistics technology consulting
            </p>
            <p
              className="font-semibold flex items-center gap-4 py-6"
              data-aos="fade-up"
            >
              {" "}
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" />{" "}
              Logistics apps, systems, and more
            </p>
            <p
              className="font-semibold text-blue-600 flex items-center gap-4"
              data-aos="fade-up"
            >
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" /> Legacy
              software modernization Business process automation Integration of
              logistics modules
            </p>
          </div>
          <div className="w-full">
            <p
              className="font-semibold text-blue-600 flex items-center gap-4"
              data-aos="fade-up"
            >
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" />
              Business process automation
            </p>
            <p
              className="font-semibold flex items-center gap-4 py-6"
              data-aos="fade-up"
            >
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" />
              Integration of logistics modules
            </p>
            <p
              className="font-semibold text-blue-600 flex items-center gap-4"
              data-aos="fade-up"
            >
              <CheckCircle className="w-6 h-6 pr-2" data-aos="fade-up" />
              Advanced analytics, BI, and reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsAbout;
