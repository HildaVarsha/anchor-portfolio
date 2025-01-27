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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Anchor: Top transportation & logistics
          <span className="text-green-500">
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
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>We have great talent.</strong> With our 300-strong
                  team, we bring together top professionals to develop both
                  simple and complex logistics software solutions that drive
                  your growth.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>We are vendor-agnostic.</strong> As independent
                  consultants in transportation and logistics software
                  development, we recommend only the best technologies and
                  solutions tailored to your unique logistics needs.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>We know emerging tech.</strong> We remain at the
                  cutting edge of new technologies, delivering expertly crafted
                  solutions in areas like AI/ML, Big Data, IoT, Intelligent
                  Automation, and Cloud.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>We have experience.</strong> With over 13 years of
                  expertise in technology consulting and software development,
                  we have successfully delivered 600+ products to over 200
                  satisfied clients worldwide.
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
