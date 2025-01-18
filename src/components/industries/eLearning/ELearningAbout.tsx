import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "K-12",
    description:
      "We help K-12 leaders unleash the power of technology-assisted learning with R&D and consulting services and deliver turnkey educational software that automates workflows, simplifies student performance management, and makes knowledge delivery more efficient and interactive",
  },
  {
    title: "EdTech and eLearning companies",
    description:
      "We can fill in the skills gap in your knowledge-intensive project and enrich your eLearning software with AI-driven data analytics, natural language processing, teleconferencing, as well as augmented and virtual reality capabilities to attract more customers with stellar functionality and user experience",
  },
  {
    title: "Colleges and universities",
    description:
      "Along with educational technology consulting services, we craft innovative educational software solutions from scratch, so that you can attract the right students, personalize learning materials, optimize daily operations, and tap into useful insights about the school’s academic performance",
  },
  {
    title: "Corporations and nonprofits",
    description:
      "We can enhance your existing learning management software or develop a corporate eLearning solution from scratch. We deep dive into the specifics of your business and tailor our eLearning solutions to match them, supporting your corporate training programs with the right tech",
  },
];

const ELearningAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="We craft educational software for every need" />
        <p data-aos="fade-up">
          We help our clients in K-12, postsecondary, and corporate segments to
          redefine the way they teach, learn, communicate, and operate. EdTech
          startups and educational software companies, in turn, use our
          eLearning software development expertise to win the market with
          next-gen features that drive online education way forward.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

export default ELearningAbout;
