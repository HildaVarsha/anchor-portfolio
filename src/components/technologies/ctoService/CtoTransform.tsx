import React from "react";
import HireButton from "./HireButton";

interface ServiceOptionProps {
  title: string;
  description: string;
}
const ServiceOption: React.FC<ServiceOptionProps> = ({
  title,
  description,
}) => (
  <div data-aos="fade-up">
    <p className="font-semibold text-xl mb-6" data-aos="fade-up">
      {title}
    </p>
    <p data-aos="fade-up">{description}</p>
  </div>
);
const CtoTransform = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/cto-tailored.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          <p data-aos="fade-up">See how CTO as a Service can</p>{" "}
          <p className="text-lime-500" data-aos="fade-up">
            transform your technology leadership.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-slate-800">
          {/* Overview */}
          <p className="pb-6" data-aos="fade-up">
            We’ll ensure you fully capitalize on our CTO consulting services by
            providing CTO-led research and development, strategic planning, and
            expert oversight, all aimed at delivering technical excellence while
            minimizing risks and optimizing costs.
          </p>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 mb-6">
            <ServiceOption
              title="Reduced operational
risks"
              description="With a solid strategy that includes risk prevention and mitigation measures, you can be assured of delivering a high-quality product, even under tight deadlines."
            />
            <ServiceOption
              title="Optimized
development costs"
              description="A well-crafted strategy, scalable architecture, and strong technology leadership help optimize project budgets, making our CTO as a Service offering a valuable investment with quick ROI."
            />
            <ServiceOption
              title="Possibilities for rapid
business growth"
              description="With business and technical challenges addressed by an experienced virtual CTO, you can pave the way for quicker product evolution and growth."
            />
            <ServiceOption
              title="Satisfied investors
and executives"
              description="With strategic financial planning and a clear growth vision for your product, you can confidently secure support from investors and executives. "
            />
          </div>
          <HireButton />
        </div>
      </div>
    </div>
  );
};

export default CtoTransform;
