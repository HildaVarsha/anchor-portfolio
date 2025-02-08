import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "AI & ML:",
    description:
      "By leveraging neural networks and machine learning algorithms, we help you unlock valuable insights and create personalized experiences that connect with your audience, whether through tailored content or dynamic recommendations.",
  },
  {
    title: "RPA & IPA:",
    description:
      "We implement automation solutions for tasks like data entry, content ingestion, and metadata management. These solutions reduce human error, boost accuracy, and streamline operations, enabling faster turnarounds and allowing your team to focus on more creative projects.",
  },
  {
    title: "AR & VR:",
    description:
      "Using immersive technologies, we help you captivate your audience by enhancing live events, enabling interactive storytelling, and creating virtual environments, offering unique, engaging experiences that bring your content to life.",
  },
];

const MediaTechnology = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/detection-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Modern technology
          <span className="text-lime-500"> {""} at your fingertips</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          In developing our media and entertainment software solutions, we
          incorporate innovative technologies to achieve outstanding results
          through data-driven decision-making, intelligent automation, and
          engaging user experiences.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <GetHireButton />
        </div>
      </div>
    </div>
  );
};

export default MediaTechnology;
