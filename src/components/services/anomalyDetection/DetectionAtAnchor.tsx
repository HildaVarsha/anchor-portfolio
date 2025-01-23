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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Why Choose Anchor&apos;s Informatics Over Other
          <span className="text-amber-400">
            {""} Anomaly Detection Companies?
          </span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-blue-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong>We know your business inside and out.</strong> With our
            extensive expertise across various domains, including healthcare,
            banking, and commerce technology, we understand the unique
            challenges your business faces and develop tailored anomaly
            detection solutions to effectively address them.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>We take the custom route.</strong> Our team creates tailored
            anomaly detection solutions using powerful cloud services and
            open-source machine learning technologies. Unlike SaaS tools, these
            solutions are fully customizable, precisely meeting your needs, and
            designed to scale with your business growth.
          </p>
        </div>
        <div>
          <p data-aos="fade-up">
            <strong>We breathe AI.</strong> Anchor Informatics Ltd has been
            developing custom machine learning models, from supervised
            algorithms to deep neural networks, long before they became
            mainstream. We specialize in gathering and preparing training data,
            and creating AI-driven anomaly detection solutions that are
            accurate, transparent, and ethically sound.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>We strive for your success.</strong> With a customer
            satisfaction index of 83%, our results speak for themselves. Our
            anomaly detection service team is dedicated to ensuring that your
            connected palette changer or Holter monitor consistently detects
            abnormalities and alerts staff before incidents occur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetectionAtAnchor;
