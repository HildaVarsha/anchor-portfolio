import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "LMS and LCMS",
    description:
      "Utilize a suite of easy-to-use learning tools to create effective and accessible training programs, develop high-quality educational content, and efficiently manage, track, and assess online learners. Our learning management systems also include student assessment and remote proctoring features, supporting the entire education lifecycle.",
  },
  {
    title: "School management software",
    description:
      "Boost operational efficiency and achieve cost savings with our school management and ERP solutions. These tools assist in managing everyday administrative tasks such as fee collection, payroll management, accounting, library and inventory management, transportation tracking, and more.",
  },
  {
    title: "Education portals",
    description:
      "Easily manage educational data online with custom-designed education portals and information systems. Our solutions streamline scheduling, attendance tracking, speed up updates, and provide a convenient platform for educators and students to access educational content, generate performance reports, and more.",
  },
  {
    title: "Assistive learning solutions",
    description:
      "Make education more inclusive by offering AI-powered tools such as text-to-speech, speech-to-text, writing assistance, proofreading, and class planning software. Our tailored assistive learning solutions enhance focus, promote independent learning, and drive academic success for all students.",
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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Delivering custom eLearning solutions
          <span className="text-amber-400"> to make practice perfect</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Technologies continue to reshape every facet of our lives, and
          education requires innovative tools to make learning—both online and
          offline—more effective. As an eLearning software development company
          with over a decade of experience, we specialize in designing and
          developing high-performance, comprehensive solutions for students,
          educators, and instructional designers.
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
