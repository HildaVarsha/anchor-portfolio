"use client";
import { useState } from "react";

const industryContent: any = {
  Consulting: {
    description:
      "Provide expert guidance and strategic advice to optimize business operations and technology implementation. We develop solutions for:",
    points: [
      "Business process analysis",
      "Technology roadmap development",
      "System integration strategies",
      "Regulatory compliance guidance",
      "Market trend analysis",
      "Change management support",
    ],
  },
  Design: {
    description:
      "Craft user-centered designs that enhance usability and deliver exceptional experiences. We develop solutions for:",
    points: [
      "User interface design",
      "User experience optimization",
      "Prototyping and wireframing",
      "Responsive design solutions",
      "Brand identity development",
      "Accessibility compliance",
    ],
  },
  Development: {
    description:
      "Build robust and scalable applications tailored to meet your business needs. We develop solutions for:",
    points: [
      "Custom software development",
      "Mobile application development",
      "Web application development",
      "Cloud-based solutions",
      "API integration",
      "DevOps implementation",
    ],
  },
  Testing: {
    description:
      "Ensure the reliability and performance of your applications through rigorous testing processes. We develop solutions for:",
    points: [
      "Functional testing",
      "Performance testing",
      "Security testing",
      "Automated testing",
      "User acceptance testing",
      "Compatibility testing",
    ],
  },
  "Maintenance and Support": {
    description:
      "Provide ongoing support and maintenance to ensure the smooth operation of your systems. We develop solutions for:",
    points: [
      "System monitoring",
      "Bug fixes and updates",
      "Performance optimization",
      "24/7 technical support",
      "Data backup and recovery",
      "Scalability enhancements",
    ],
  },
};

const EComTechnology = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Consulting");

  return (
    <div className="py-16 bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-16">
        <div className="flex flex-row flex-wrap md:flex-col gap-4">
          {Object.keys(industryContent).map((industry) => (
            <button
              key={industry}
              data-aos="fade-up"
              onClick={() => setSelectedIndustry(industry)}
              className={`font-semibold text-2xl ${
                selectedIndustry === industry ? "text-blue-600" : ""
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        <div className="">
          <p data-aos="fade-up">
            {industryContent[selectedIndustry].description}
          </p>
          <ul className="py-4">
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

export default EComTechnology;
