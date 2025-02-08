import React from "react";

const AiAppProcess = () => {
  const processes = [
    {
      title: "Machine Learning",
      description:
        "We create intelligent predictive systems using supervised, semi-supervised, and unsupervised learning algorithms to drive data-informed decisions and deliver personalized experiences.",
    },
    {
      title: "Deep Learning",
      description:
        "We address complex challenges with brain-inspired algorithms, applying them across various fields, including virtual assistants, image recognition, fraud detection, deep video analysis, and more.",
    },
    {
      title: "Computer Vision",
      description:
        "We tackle any computer vision problem, from image processing and object recognition to live video analysis, pose estimation, biometric authentication, and beyond.",
    },
    {
      title: "NLP (Natural Language Processing)",
      description:
        "We provide real-time speech recognition and conversational AI solutions that enhance user experiences while reducing staffing needs.",
    },
  ];

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4 flex flex-col lg:flex-row gap-4 lg:gap-16">
        {processes.map((process, index) => (
          <div key={index} data-aos="fade-up">
            <p className="font-semibold text-lg text-blue-600">
              {process.title}
            </p>
            <p className="pt-6">{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAppProcess;
