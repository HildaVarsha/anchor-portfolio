import React from "react";

const CustomComputerServices = () => {
  return (
    <div className="bg-white pt-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Why Anchor’s Informative
          <span className="text-lime-500">{""} computer vision services</span>
        </p>
      </div>
      <div className="mt-12 p-4 lg:p-12 lg:container mx-auto text-slate-800 bg-amber-100 flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong>Cross-industry experience.</strong> With over a decade of
            expertise delivering computer vision services across multiple
            sectors, our team possesses a deep understanding of the unique
            challenges and data intricacies within your industry, enabling us to
            tailor the perfect solution for your business.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>Extensive expertise.</strong> We remain at the cutting edge
            of innovation and are constantly working towards improvement.
            Trusted by both established enterprises and emerging startups, we
            help transform ideas into successful computer vision solutions.
          </p>
        </div>
        <div>
          <p data-aos="fade-up">
            <strong>Technology-agnostic approach.</strong> We refuse to settle
            for mediocrity. We thoughtfully select the most suitable computer
            vision techniques, platforms, and libraries for your specific
            requirements. Additionally, we ensure full compliance with industry
            regulations.
          </p>
          <p className="pt-4" data-aos="fade-up">
            <strong>Research and Development.</strong> In our dedicated R&D lab,
            we explore cutting-edge computer vision concepts and experiment with
            emerging technologies. By developing prototypes based on valuable
            insights, we proactively address and solve your challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomComputerServices;
