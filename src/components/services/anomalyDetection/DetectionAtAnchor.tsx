import React from "react";

const DetectionAtAnchor = () => {
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Why Choose Anchor&apos;s Informatics Over Other
          <span className="text-amber-400">
            {""} Anomaly Detection Companies?
          </span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-blue-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="">
            <strong> We know your business inside and out.</strong> {""} With
            our extensive expertise across various domains, including
            healthcare, banking, and commerce technology, we comprehend the
            unique challenges your business encounters and develop tailored
            anomaly detection solutions to effectively tackle them.
          </p>
          <p className="pt-4">
            <strong>We take the custom route.</strong> {""} Our team develops
            tailored anomaly detection solutions using powerful cloud services
            and open-source machine learning technologies. Unlike SaaS tools,
            these solutions are fully customizable, precisely meet your needs,
            and can scale with your business growth.
          </p>
        </div>
        <div>
          <p>
            <strong>We breathe AI.</strong> {""} Anchor’s Informative has been
            developing custom machine learning models, ranging from supervised
            algorithms to deep neural networks, long before they became
            mainstream. We specialize in gathering and preparing training data,
            and creating AI-driven anomaly detection solutions that are
            accurate, transparent, and ethically sound.
          </p>
          <p className="pt-4">
            <strong>We strive for your success.{""}</strong> With a customer
            satisfaction index of 83%, our results speak for themselves. Our
            anomaly detection service team is dedicated to ensuring that your
            connected palette changer or Holter monitor consistently detects
            abnormalities and alerts staff before incidents happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetectionAtAnchor;
