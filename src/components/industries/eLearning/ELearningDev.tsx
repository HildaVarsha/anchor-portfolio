import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Back-end development",
    description:
      "We are well-versed in custom web development, cloud computing, and DevOps, as well as data acquisition, management, and analysis, and deliver functional and high-performing educational software solutions that run without glitches",
  },
  {
    title: "Front-end development",
    description:
      "We craft all kinds of interfaces, including cloud dashboards, voice interfaces, as well as educational web and mobile apps, so you can reach out to more learners with highly accessible and easy-to-use software",
  },
  {
    title: "Reliable integration",
    description:
      "We focus on creating coherent learning environments and connect your education technology solutions with other applications and devices within your IT infrastructure, as well as third-party tools and service",
  },
  {
    title: "End-to-end software testing",
    description:
      "We build visualizations that tell stories in a simple way, enabling informed decision-making and solid ad-hoc data analysis. Take your next big step forward with AR/VR or voice assistants that will deliver convenient access to all of your data",
  },
];
const ELearningDev = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/learning-dev.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Building upon an extensive eLearning
          <span className="text-amber-400 pl-2">
            software development know-how
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Applying our expertise in providing EdTech and eLearning software
          development services and setting up security safeguards regarding
          student data management, we help you make knowledge delivery instant,
          engaging, and intuitive while ensuring compliance with FERPA, COPPA,
          CIPA, GLBA, and other relevant standards.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ELearningDev;
