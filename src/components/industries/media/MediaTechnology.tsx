import { GetHireButton, ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "AI & ML:",
    description:
      "Harnessing the power of neural networks and machine learning algorithms, we let you tap into valuable insights and deliver tailored experiences that resonate with your audience — be it through personalized content",
  },
  {
    title: "RPA & IPA:",
    description:
      "We implement solutions that automate data entry, content ingestion, metadata management, and other manual tasks. By eliminating human error and improving accuracy, our automation solutions ensure smoother operations, faster turnarounds, and enhanced productivity, allowing your team to focus on creative initiatives",
  },
  {
    title: "AR & VR:",
    description:
      "We leverage the power of immersive technologies to let you captivate your viewers and offer unique experiences. Whether it’s enhancing live events, enabling interactive storytelling, or creating virtual environments, we bring your content to life in a way that engages your audience",
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Modern technology
          <span className="text-amber-400"> {""} at your fingertips</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          Crafting our media and entertainment software solutions, we implement
          innovative technology to deliver exceptional results through
          data-driven decision making, intelligent automation, and engaging user
          experience.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
