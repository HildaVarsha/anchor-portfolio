import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "K-12",
    description:
      "We help K-12 leaders unlock the potential of technology-assisted learning through R&D and consulting services, delivering turnkey educational software that automates workflows, simplifies student performance management, and enhances knowledge delivery, making it more efficient and interactive.",
  },
  {
    title: "EdTech and eLearning Companies",
    description:
      "We bridge the skills gap in your knowledge-intensive projects by enriching your eLearning software with AI-driven data analytics, natural language processing, teleconferencing, and augmented/virtual reality capabilities. These enhancements attract more customers through improved functionality and user experience.",
  },
  {
    title: "Colleges and Universities",
    description:
      "In addition to educational technology consulting, we develop innovative educational software solutions from scratch, helping you attract the right students, personalize learning materials, optimize daily operations, and gain valuable insights into the school’s academic performance.",
  },
  {
    title: "Corporations and Nonprofits",
    description:
      "We enhance your existing learning management software or develop corporate eLearning solutions from the ground up. By deeply understanding your business needs, we tailor eLearning solutions to match, supporting your corporate training programs with the right technology.",
  },
];

const ELearningAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="We craft educational software for every need" />
        <p data-aos="fade-up">
          We assist clients in K-12, postsecondary, and corporate sectors to
          transform how they teach, learn, communicate, and operate. EdTech
          startups and educational software companies leverage our eLearning
          software development expertise to capture the market with cutting-edge
          features that propel online education to the next level.
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
