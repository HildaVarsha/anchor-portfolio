import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

// Reusable Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, className, style }) => (
  <div className={`py-12 ${className || ""}`} style={style} data-aos="fade-up">
    <div className="px-4 lg:px-0 lg:container mx-auto" data-aos="fade-up">
      {children}
    </div>
  </div>
);

const JavaEndToEndSolutions: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section
        className="bg-white h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/technology-with.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="text-2xl lg:text-5xl mx-auto font-bold"
          data-aos="fade-up"
        >
          End-to-end Java solutions to{" "}
          <span className="text-lime-500 font-bold">
            transform your business.
          </span>
        </p>
      </Section>

      {/* Expertise Section */}
      <Section className="bg-lime-500 text-slate-800" data-aos="fade-up">
        <p data-aos="fade-up">
          With extensive experience delivering both simple and highly complex
          Java projects across various industries, the Anchor Informatics Ltd
          Java community offers unmatched expertise. Here are some examples of
          successful Java solutions we’ve developed for our satisfied clients,
          including leading global companies:
        </p>
      </Section>

      {/* Solutions Section */}
      <Section className="bg-white text-slate-800">
        <div className="flex flex-col lg:flex-row gap-4 p-8 lg:gap-12 bg-amber-50">
          <SolutionList
            items={[
              "Smart contracts",
              "Accommodation booking software",
              "Document management systems",
              "Patient management solutions",
              "Video streaming functionality",
            ]}
          />
          <SolutionList
            items={[
              "Cryptocurrency products",
              "Cruise management system",
              "Education software",
              "Telemedicine platforms",
              "Intelligent automation systems",
            ]}
          />
        </div>
        <HireJavaDeveloperButton label="Contact Us" />
      </Section>
    </div>
  );
};

// Reusable SolutionList Component
interface SolutionListProps {
  items: string[];
}

const SolutionList: React.FC<SolutionListProps> = ({ items }) => (
  <div className="w-full">
    {items.map((item, index) => (
      <li
        key={index}
        className={index % 2 !== 0 ? "py-8" : ""}
        data-aos="fade-up"
      >
        {item}
      </li>
    ))}
  </div>
);

export default JavaEndToEndSolutions;
