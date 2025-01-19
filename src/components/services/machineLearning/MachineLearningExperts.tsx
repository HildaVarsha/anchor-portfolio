import React from "react";

const MachineLearningExperts = () => {
  const sections = [
    {
      title: "Computer Vision",
      content:
        "We design advanced deep learning architectures for a wide range of computer vision tasks, including image classification, object detection, smart video analysis, and GANs. Our solutions enable clients to stay ahead with the latest breakthroughs in computer vision. Learn more about our computer vision services.",
    },
    {
      title: "Natural Language Processing (NLP)",
      content:
        "Our machine learning development services enable machines to understand and interpret human language. We offer solutions including speech recognition, translation, sentiment analysis, automatic text classification, and chatbots. Our team delivers top-tier NLP solutions for various applications.",
    },
    {
      title: "Data Mining",
      content:
        "Using machine learning and deep learning algorithms, we create both basic and advanced predictive models. These models help businesses forecast essential outcomes such as workforce planning, churn analysis, competitive insights, risk management, and asset maintenance, in addition to providing comprehensive data management services.",
    },
    {
      title: "Predictive Algorithms",
      content:
        "By leveraging machine learning and deep learning techniques, we develop predictive models, both simple and advanced. These models assist businesses in forecasting crucial outcomes, including workforce planning, churn analysis, competitive insights, risk management, and asset maintenance.",
    },
    {
      title: "Intelligent Process Automation",
      content:
        "Anchor’s machine learning development services offer customized Intelligent Process Automation (IPA) solutions that combine data, ML, and automation. We simplify automation by integrating deductive analytics and predictive capabilities into Robotic Process Automation (RPA) systems.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/machine-expertise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our Expertise in
          <span className="text-amber-400"> Machine Learning</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400 ">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Leverage our specialized expertise in creating cutting-edge AI
          solutions powered by machine learning and deep learning. Transform
          your vision into success stories in automation, business forecasting,
          and product innovation.
        </p>
      </div>
      <div className="mt-12 px-4 md:px-0 md:p-12 md:container mx-auto text-slate-800 bg-white flex flex-col gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between"
          >
            <p className="font-semibold w-full">{section.title}</p>
            <p className="w-full">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineLearningExperts;
