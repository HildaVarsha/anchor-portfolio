import React from "react";

const AiAppProcess = () => {
  const processes = [
    {
      title: "Machine Learning",
      description:
        "We build intelligent predictive systems using supervised, semi-supervised, and unsupervised learning algorithms to support data-driven decision-making and enable personalized experiences.",
    },
    {
      title: "Deep Learning",
      description:
        "Tackling complex tasks with brain-like algorithmic structures for a wide range of applications, including virtual assistants, visual recognition, fraud detection, deep video analysis, and beyond.",
    },
    {
      title: "Computer Vision",
      description:
        "Tackling any computer vision challenge, including image processing, object recognition, live video analysis, pose estimation, biometric authentication, and more.",
    },
    {
      title: "NLP",
      description:
        "Providing real-time speech recognition and conversational AI solutions that significantly enhance the user experience while reducing staffing costs.",
    },
  ];

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-16">
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
