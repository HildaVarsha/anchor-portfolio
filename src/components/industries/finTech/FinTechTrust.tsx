import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const FinTechTrust = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/e-learning-offer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p className="text-3xl md:text-5xl mx-auto font-bold container">
            ITRex: a trusted financial software
            <span className="text-amber-400 text-3xl md:text-5xl mx-auto font-bold pl-2">
              development company
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-amber-100">
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <div className="flex  gap-4">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>Vendor-agnostic:</strong> We are not tied to any
                  providers, so we only recommend technologies that we believe
                  are right for you
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>Top developers with niche skills:</strong>With our
                  350-strong team, we bring in best BA, development, and R&D
                  talent
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>Diverse expertise: </strong>Financial software
                  development company with a decade of experience, we have
                  delivered hundreds of successful solutions to businesses from
                  across sectors.
                </p>
              </div>
              <div className="flex  gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>Proven track record:</strong>
                  We have successfully completed 600+ projects and served 200+
                  clients across the globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTechTrust;
