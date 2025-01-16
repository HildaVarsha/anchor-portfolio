import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const LogisticsAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Transportation and logistics software development company to serve your innovation needs" />
        <p>
          We know you are in the midst of unprecedented change accelerated by
          the pandemic, and we are here to help. Use our unmatched expertise in
          logistics software development to change the face of your business
          going forward. We build logistics and transportation software
          solutions with top-tier features that close visibility gaps, empower
          confident decisions, and strengthen supply chain resilience.
        </p>
        <div className="py-12 flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full">
            <p className="font-semibold text-blue-600 flex items-center gap-4">
              <CheckCircle className="w-6 h-6 pr-2" /> Logistics technology
              consulting
            </p>
            <p className="font-semibold flex items-center gap-4 py-6">
              {" "}
              <CheckCircle className="w-6 h-6 pr-2" /> Logistics apps, systems,
              and more
            </p>
            <p className="font-semibold text-blue-600 flex items-center gap-4">
              <CheckCircle className="w-6 h-6 pr-2" /> Legacy software
              modernization Business process automation Integration of logistics
              modules
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-blue-600 flex items-center gap-4">
              <CheckCircle className="w-6 h-6 pr-2" />
              Business process automation
            </p>
            <p className="font-semibold flex items-center gap-4 py-6">
              <CheckCircle className="w-6 h-6 pr-2" />
              Integration of logistics modules
            </p>
            <p className="font-semibold text-blue-600 flex items-center gap-4">
              <CheckCircle className="w-6 h-6 pr-2" />
              Advanced analytics, BI, and reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsAbout;
