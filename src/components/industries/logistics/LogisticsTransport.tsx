import { CheckCircle } from "lucide-react";
import React from "react";

const LogisticsTransport = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          ITRex: Top transportation & logistics
          <span className="text-amber-400">
            {" "}
            {""} software development company
          </span>
        </p>
      </div>

      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-amber-100">
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>We have great talent.</strong> With our 300-strong
                  team, we bring in top professionals to develop simple to
                  complex logistics software solutions for your growth
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>We are vendor-agnostic.</strong> As an independent
                  consultant in transportation and logistics software
                  development, we only recommend technologies and solutions that
                  work best for your unique logistics needs
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>We know emerging tech.</strong> We stay at the
                  forefront of new-age technologies, delivering perfectly
                  crafted solutions in domains like AI/ML, Big Data, IoT,
                  Intelligent Automation, and Cloud
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <CheckCircle className="w-20 h-20 pr-1" />
                <p>
                  <strong>We have experience.</strong> With 13+ years of
                  experience in technology consulting and software development,
                  we’ve successfully delivered 600+ products to 200+ happy
                  customers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsTransport;
