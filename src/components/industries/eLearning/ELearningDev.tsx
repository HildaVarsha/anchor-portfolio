import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Back-end development",
    description:
      "We specialize in custom web development, cloud computing, and DevOps, as well as data acquisition, management, and analysis. We deliver functional, high-performing educational software solutions that run smoothly without glitches.",
  },
  {
    title: "Front-end development",
    description:
      "We create intuitive and user-friendly interfaces, including cloud dashboards, voice interfaces, and educational web and mobile apps. This ensures your software reaches more learners and is accessible to all.",
  },
  {
    title: "Reliable integration",
    description:
      "We focus on integrating your education technology solutions with other applications, devices, and third-party tools within your IT infrastructure. This helps create a cohesive and efficient learning environment.",
  },
  {
    title: "End-to-end software testing",
    description:
      "We conduct thorough testing to ensure your educational software is flawless. Our services include visualizations that simplify data analysis, and we also offer AR/VR or voice assistant integration for easy access to your data.",
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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Building upon an extensive eLearning
          <span className="text-lime-500 pl-2">
            software development know-how
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
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
