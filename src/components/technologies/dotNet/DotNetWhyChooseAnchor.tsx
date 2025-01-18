import React from "react";

const DotNetWhyChooseAnchor = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/why-choose-anchor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          Why choose Anchor Informatics as your
          <span className="text-amber-400"> .NET development company?</span>.
        </p>
      </div>
      <div className="py-12  bg-white text-slate-800">
        <div className="bg-amber-50 p-6 container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-12">
          <div className="w-full">
            <p data-aos="fade-up">
              Extensive experience. Our .NET developers have over 13 years of
              working with companies of all sizes and industries, so they
              understand your specific requirements and know how to deliver the
              right technology solutions.
            </p>
            <p className="pt-8" data-aos="fade-up">
              Expert .NET developers. We provide exceptional technical
              expertise, guidance, and innovative ideas to deliver .NET
              applications that drive meaningful results.
            </p>
          </div>
          <div className="w-full">
            <p data-aos="fade-up">
              Strong partnerships. As a Microsoft Gold-Certified partner, we
              work closely with industry leaders to provide top-tier services.
            </p>
            <p className="pt-8" data-aos="fade-up">
              Proven success. We have successfully delivered over 600 projects
              and served more than 200 satisfied clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotNetWhyChooseAnchor;
