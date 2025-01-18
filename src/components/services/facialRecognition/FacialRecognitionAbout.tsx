import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Face detection",
    description:
      "Our face recognition development team will train models to identify faces in both photos and video footage, performing real-time and historical data analysis. Implementing multi-face detection functionality into your software is also a seamless addition for us.",
  },
  {
    title: "Facial geometry analysis",
    description:
      "Anchor, a reputable face recognition development company, creates algorithms that precisely identify key facial landmarks—ranging from brow contours to the mouth and chin—under any lighting conditions and even with partial obstructions like clothing and accessories.",
  },
  {
    title: "Face identification",
    description:
      "During the face recognition software development process, we implement algorithms that search for matches in databases to accurately identify a person within a group. We also adjust the system's thresholds to minimize false positives and false negatives.",
  },
  {
    title: "Face verification",
    description:
      "Anchor Informative elevates face recognition app development by training AI models to verify a person's identity. We enhance your system's security by integrating facial recognition technology with additional authentication methods, such as tokens and passwords.",
  },
];

const FacialRecognitionAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Enhance Your Apps with Our Facial Recognition Software Development Services" />
        <p data-aos="fade-up">
          Anchor’s AI consultancy with unrivaled expertise in computer vision
          provides Custom facial recognition software development services to
          elevate your mobile and web applications, as well as cyber-physical
          systems. We can enhance your IT solutions with the following features:
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

export default FacialRecognitionAbout;
