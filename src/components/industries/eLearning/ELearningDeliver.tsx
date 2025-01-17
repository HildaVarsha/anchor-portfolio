import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "LMS and LCMS",
    description:
      "Leverage a kit of easy-to-handle learning tools to build impactful and accessible training programs, create top-notch educational resources, and conveniently enroll, track, and evaluate online learners. Our learning management systems feature student assessment and remote proctoring modules, too, supporting the entire education process",
  },
  {
    title: "School management software",
    description:
      "Increase operational efficiency and drive cost savings with school management and school ERP software. Our educational solutions help manage daily administrative tasks, such as fee and staff payroll management, accounting and financial management, library and inventory management, school transportation tracking, and many more",
  },
  {
    title: "Education portals",
    description:
      "Manage educational data online with feature-rich education portals and information systems. Our custom eLearning solutions optimize scheduling, facilitate student attendance monitoring, speed upgrading, and allow educators and students to conveniently view educational information, generate performance reports, and more",
  },
  {
    title: "Assistive learning solutions",
    description:
      "Make education accessible to students with special needs by leveraging AI-powered text-to-speech, speech-to-text, writing assistance, proofreading, as well as planning and class scheduling software. Our custom assistive learning solutions improve focus, promote independent learning, and spark academic success for all students",
  },
];
const ELearningDeliver = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/e-learning-deliver.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Delivering custom eLearning solutions
          <span className="text-amber-400"> to make practice perfect</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Technologies keep reshaping every aspect of our daily lives, and
          education needs innovative tools to make offline and online learners’
          practice more efficient. An eLearning software development company
          with a decade of experience, we design and develop high-performing,
          full-fledged solutions for students, educators, and instructional
          designers.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
          <GetHireButton />
        </div>
      </div>
    </div>
  );
};

export default ELearningDeliver;
