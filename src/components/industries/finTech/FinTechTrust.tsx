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
          <p
            className="text-3xl md:text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            ITRex: a trusted financial software
            <span className="text-lime-500 text-3xl md:text-5xl mx-auto font-bold pl-2">
              development company
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-amber-100">
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Vendor-Agnostic:</strong> We are independent of any
                  single provider, allowing us to recommend only the best
                  technologies suited to your unique needs.
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Top Developers with Niche Skills:</strong> With a
                  talented team of 350+ experts, we provide the best business
                  analysts, developers, and R&D professionals to bring your
                  vision to life.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Diverse Expertise:</strong> With over a decade of
                  experience in financial software development, we’ve
                  successfully delivered hundreds of solutions across various
                  industries.
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Proven Track Record:</strong> We’ve completed over 600
                  projects and served 200+ clients worldwide, demonstrating our
                  ability to deliver impactful, high-quality solutions.
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
