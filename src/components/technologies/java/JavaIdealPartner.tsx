import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";
const javaIdeal = [
  {
    title: "Easy onboarding",
    description:
      "Receive the most suitable CVs within 24 hours, with no recruitment fees.",
  },
  {
    title: "Fast kickoff",
    description:
      "The development process can begin within 1 to 2 weeks after we finalize the contract.",
  },
  {
    title: "Performance guarantee",
    description:
      "You can trial our team for 30 days and replace any member based on your needs.",
  },
  {
    title: "Zero friction",
    description:
      "We are flexible and can align as many working hours as possible with your business schedule.",
  },
  {
    title: "End-to-end support",
    description:
      "We offer any specialist you require and provide 24/7 DevOps and cloud support.",
  },
  {
    title: "Certified Java developers",
    description:
      "Our Java community is made up of certified professionals in Java EE Web/Business, Java SE, Oracle, and AWS.",
  },
  {
    title: "Effective communication",
    description:
      "You can communicate directly with our developers and select the level of detail in the reports.",
  },
  {
    title: "Agile approach",
    description:
      "You can go to market faster as we deliver releases every 2-6 weeks, with incremental updates several times a day.",
  },
];

const JavaIdealPartner = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl lg:container mx-auto font-bold"
          data-aos="fade-up"
        >
          What makes our Java development company the{" "}
          <span className="text-lime-500">ideal partner for your project.</span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-slate-800">
          {javaIdeal.map((tech, index) => (
            <div key={index} data-aos="fade-up">
              <p className="text-2xl font-semibold" data-aos="fade-up">
                {tech.title}
              </p>
              <p className="py-4" data-aos="fade-up">
                {tech.description}
              </p>
            </div>
          ))}
          <HireJavaDeveloperButton label="Discuss your Java project" />
        </div>
      </div>
    </div>
  );
};

export default JavaIdealPartner;
