import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

// Reusable Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, className, style }) => (
  <div className={`py-12 ${className || ""}`} style={style}>
    <div className="px-4 md:px-0 md:container mx-auto">{children}</div>
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
        <p className="text-2xl md:text-5xl mx-auto font-bold">
          End-to-end Java solutions to{" "}
          <span className="text-amber-400 font-bold">
            transform your business.
          </span>
        </p>
      </Section>

      {/* Expertise Section */}
      <Section className="bg-amber-400 text-slate-800">
        <p>
          With extensive experience delivering both simple and highly complex
          Java projects across various industries, the Anchor Informatics Java
          community offers unmatched expertise. Here are some examples of
          successful Java solutions we’ve developed for our satisfied clients,
          including leading global companies:
        </p>
      </Section>

      {/* Solutions Section */}
      <Section className="bg-white text-slate-800">
        <div className="flex flex-col md:flex-row gap-4 p-8 md:gap-12 bg-amber-50">
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
      <li key={index} className={index % 2 !== 0 ? "py-8" : ""}>
        {item}
      </li>
    ))}
  </div>
);

export default JavaEndToEndSolutions;
