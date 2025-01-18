import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

const JavaTopWays: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-top-ways.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <p className="text-2xl md:text-5xl  font-bold" data-aos="fade-up">
            The top ways our Java development company can bring exceptional
            value to you.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-slate-800">
          {/* Overview */}
          <p className="pb-6" data-aos="fade-up">
            We can expand your team or company with Java app development
            expertise of any scale. Whether you need a dedicated team or
            individual developers, we manage your Java project from start to
            finish or step in at any stage. Choose between our Time & Material
            or fixed-price engagement models. Discover more about our flexible
            engagement options.
          </p>

          {/* Service Options */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-6">
            <ServiceOption
              title="In-house team augmentation"
              description="Enhance your project with additional Java talent to fill
              knowledge gaps and accelerate progress. You’ll manage the
              resources directly while we provide expert Java skills, seamless
              integration into your project, and the flexibility to scale up
              as needed."
            />
            <ServiceOption
              title="Dedicated team"
              description="If you're looking for full end-to-end coverage or assistance
              with specific parts of your Java project, hire our dedicated
              team and leave the management and recruitment to us. We assemble
              autonomous, skilled Java developers who will work exclusively on
              your project."
            />
          </div>

          {/* Roles Section */}
          <div className="py-12 bg-blue-100 p-8">
            <p className="text-2xl pb-8 font-semibold" data-aos="fade-up">
              If you&apos;re looking for full end-to-end coverage or assistance
              with specific parts of your Java project, hire our dedicated team
              and leave the management and recruitment to us.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <RoleColumn
                roles={[
                  "Java Architect",
                  "Java Developer",
                  "QA Lead",
                  "Business Analyst",
                  "UI/UX Specialist",
                ]}
              />
              <RoleColumn
                roles={[
                  "Java Team Lead",
                  "JavaScript Developer",
                  "QA Engineers",
                  "Project Manager",
                  "DevOps Engineer",
                ]}
              />
            </div>
          </div>

          {/* Call-to-Action */}
          <HireJavaDeveloperButton label="Get a quote " />
        </div>
      </div>
    </div>
  );
};

// Props for ServiceOption component
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

// Props for RoleColumn component
interface RoleColumnProps {
  roles: string[];
}

const RoleColumn: React.FC<RoleColumnProps> = ({ roles }) => (
  <div className="w-full">
    {roles?.map((role, index) => (
      <li
        key={index}
        className={index % 2 !== 0 ? "py-8" : ""}
        data-aos="fade-up"
      >
        {role}
      </li>
    ))}
  </div>
);

export default JavaTopWays;
