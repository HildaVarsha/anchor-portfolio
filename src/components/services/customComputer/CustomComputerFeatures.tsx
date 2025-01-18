"use client";
import { useState } from "react";

const industryContent: any = {
  Retail: {
    description:
      "Reduce in-store human interactions, personalize the customer experience, or utilize computer vision technology for improved inventory management and product displays. We develop solutions for:",
    points: [
      "Automated checkout",
      "In-store navigation",
      "Visual search",
      "Theft prevention",
      "Personalized product recommendations",
      "Visual inventory inspections",
      "Counterfeit detection",
    ],
  },
  Healthcare: {
    description:
      "Enhance patient care, streamline operations, and improve diagnostic accuracy using AI solutions tailored for healthcare. We develop solutions for:",
    points: [
      "Predictive healthcare analytics",
      "AI-powered diagnostics",
      "Virtual health assistants",
      "Remote patient monitoring",
      "Healthcare chatbots",
      "Electronic health records optimization",
    ],
  },
  Education: {
    description:
      "Empower learners and educators with personalized and engaging educational experiences. We develop solutions for:",
    points: [
      "AI-powered tutoring systems",
      "Personalized learning platforms",
      "Automated grading systems",
      "Virtual classrooms",
      "Sentiment analysis for student engagement",
      "Curriculum optimization",
    ],
  },
  "Fitness & Sports": {
    description:
      "Revolutionize fitness training and sports performance analysis with AI-driven solutions. We develop solutions for:",
    points: [
      "Fitness tracking applications",
      "Real-time performance analytics",
      "Virtual personal trainers",
      "Injury prevention systems",
      "Sports strategy optimization",
      "Athlete health monitoring",
    ],
  },
  Manufacturing: {
    description:
      "Streamline production, reduce downtime, and improve quality control in manufacturing with AI solutions. We develop solutions for:",
    points: [
      "Predictive maintenance",
      "Automated quality inspection",
      "Supply chain optimization",
      "Production scheduling",
      "Workforce management systems",
      "Defect detection using computer vision",
    ],
  },
};

const CustomComputerFeatures = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Retail");

  return (
    <div className="py-16 bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="flex flex-row flex-wrap md:flex-col gap-4">
          {Object.keys(industryContent).map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`font-semibold text-2xl ${
                selectedIndustry === industry ? "text-blue-600" : ""
              }`}
              data-aos="fade-up"
            >
              {industry}
            </button>
          ))}
        </div>
        <div className="" data-aos="fade-up">
          <p>{industryContent[selectedIndustry].description}</p>
          <ul className="py-4" data-aos="fade-up">
            {industryContent[selectedIndustry].points.map(
              (point: string, index: number) => (
                <li
                  key={index}
                  className={index % 2 === 0 ? "py-4" : ""}
                  data-aos="fade-up"
                >
                  {point}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomComputerFeatures;
