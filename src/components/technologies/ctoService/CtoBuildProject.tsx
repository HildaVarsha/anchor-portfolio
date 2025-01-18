import React from "react";
import { HireButton } from "../angular";
interface ServiceOptionProps {
  title: string;
  description: string;
}
const ServiceOption: React.FC<ServiceOptionProps> = ({
  title,
  description,
}) => (
  <div data-aos="fade-up">
    <p className="font-semibold text-xl mb-6">{title}</p>
    <p>{description}</p>
  </div>
);
const CtoBuildProject = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/cto-build.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold container"
          data-aos="fade-up"
        >
          <p data-aos="fade-up">Build your project with the support</p>{" "}
          <p className="text-amber-400" data-aos="fade-up">
            of a virtual CTO and a top-tier team.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-slate-800">
          {/* Overview */}
          <p className="pb-6" data-aos="fade-up">
            Our diverse tech expertise and ample resources enable us not only to
            guide your project but also to bring it to fruition. Depending on
            your project’s requirements, you can select from the following
            collaboration models:
          </p>

          {/* Service Options */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-6">
            <ServiceOption
              title="Standalone CTO"
              description="A virtual CTO will fulfill the agreed-upon scope, whether it's refining your product vision, crafting a compelling tech pitch deck, or guiding you through any other technology and product-related challenges."
            />
            <ServiceOption
              title="A managed team lead by a CTO"
              description="Along with providing technology leadership, our CTO will build full-cycle development team  of Anchor top talent for you. Anchor We will assemble a team of specialists tailored to your project’s needs, including business analysts, engineers, testers, and other niche experts required for success."
            />
          </div>
          <HireButton />
        </div>
      </div>
    </div>
  );
};

export default CtoBuildProject;
