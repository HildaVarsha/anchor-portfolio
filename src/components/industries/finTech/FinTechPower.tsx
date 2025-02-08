import { ServicesCard } from "@/components/componentShared";
import React from "react";

const FinTechPower = () => {
  const services = [
    {
      title: "Blockchain Technology",
      description:
        "We design and develop decentralized financial systems powered by blockchain, utilizing smart contracts for enhanced security, transparency, and fraud resistance.",
    },
    {
      title: "Artificial Intelligence Solutions",
      description:
        "We integrate AI into FinTech platforms to drive smarter decision-making, accelerate automation, and optimize business outcomes at scale.",
    },
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "We implement RPA to streamline workflows, boost operational efficiency, and empower employees to focus on high-value tasks, fostering innovation and reducing human error.",
    },
    {
      title: "Internet of Things (IoT) Integration",
      description:
        "We harness the power of IoT to offer secure, real-time data processing, enhance customer experiences, and provide contactless payment solutions for financial services.",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "We provide comprehensive cybersecurity measures to protect financial institutions from emerging threats, ensuring data integrity and safeguarding user trust.",
    },
    {
      title: "Cloud Computing Services",
      description:
        "We optimize cloud-based solutions for scalability and flexibility, enabling financial businesses to securely store and manage data, while ensuring accessibility across all devices.",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold  lg:container">
          <p data-aos="fade-up">Leverage the power of innovative techs</p>
          <p className="text-lime-500" data-aos="fade-up">
            {" "}
            to redefine finance
          </p>
        </div>
      </div>
      <div className="py-12 bg-lime-500">
        <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <p data-aos="fade-up">
            At our core, we are innovators, driven by the transformative power
            of cutting-edge technology. Leveraging our expertise in blockchain,
            smart contracts, AI, and RPA development, we empower you to build a
            forward-looking future for the financial world.
          </p>
          <p className="pt-6" data-aos="fade-up">
            Innovation is not just for innovation's sake. We view emerging
            technologies as a strategic tool—enabling both traditional and
            disruptive financial institutions to create real value today and
            shape their future success in an ever-evolving landscape.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-0 lg:container mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-slate-800">
        {services?.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FinTechPower;
