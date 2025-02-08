import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";

const services = [
  {
    title: "Face detection",
    description:
      "Our team specializes in face recognition development, training models to detect faces in both images and video footage, with capabilities for real-time and historical data analysis. We can also easily integrate multi-face detection into your software.",
  },
  {
    title: "Facial geometry analysis",
    description:
      "As a trusted face recognition development company, we build algorithms that accurately identify key facial landmarks—from brow contours to the mouth and chin—under various lighting conditions and even with partial obstructions like accessories or clothing.",
  },
  {
    title: "Face identification",
    description:
      "In the face recognition software development process, we implement advanced algorithms that match faces against databases to accurately identify individuals within a group. Our system also fine-tunes thresholds to reduce false positives and false negatives.",
  },
  {
    title: "Face verification",
    description:
      "Anchor Informative enhances face recognition app development by training AI models for reliable identity verification. We improve security by integrating facial recognition with other authentication methods, such as tokens and passwords, to provide a comprehensive solution.",
  },
];

const FacialRecognitionAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Enhance Your Apps with Our Facial Recognition Software Development Services" />
        <p data-aos="fade-up">
          Anchor’s AI consultancy, with unmatched expertise in computer vision,
          offers custom facial recognition software development services to
          elevate your mobile, web applications, and cyber-physical systems. We
          can enhance your IT solutions with the following features:
        </p>

        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
