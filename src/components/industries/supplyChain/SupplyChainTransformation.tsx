import React from "react";

const SupplyChainTransformation = () => {
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
          Why entrust your digital transformation
          <span className="text-amber-400">{""} project to ITRex?</span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-amber-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="">
            <strong>We are vendor-agnostic.</strong> {""} ITRex uses
            proprietary, open-source, and SaaS-based technologies to avoid
            vendor lock-in when developing IT solutions for supply chain and
            manufacturing companies. This way, we create systems that scale well
            and can be adjusted to your evolving needs.
          </p>
          <p className="pt-8">
            <strong>We are agile.</strong> {""} When working on our clients’
            projects, we take the “start small, think big” approach, breaking
            complex systems into smaller pieces of functionality and
            implementing them step by step while considering the bigger picture.
            In the process, we collect stakeholder feedback and tweak the IT
            solutions accordingly.
          </p>
        </div>
        <div>
          <p>
            <strong>We worship innovation.</strong> {""} With an internal R&D
            department and a handful of moonshot projects under our belt, the
            ITRex team masters novel technologies before they go mainstream.
            From rapid prototyping to experimenting with generative AI, we
            always seek ways to help our customers adopt new technologies
            faster, at a lower cost, and with a bigger ROI.
          </p>
          <p className="pt-8">
            <strong> We are ITRex.{""}</strong> Established in 2009 as a
            general-purpose custom software engineering company, we’ve become a
            one-stop shop for leading-edge AI, data, IoT, and automation
            solutions. Our global 270-strong team is ready to take on your
            challenge — and turn it into our common success story!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainTransformation;
