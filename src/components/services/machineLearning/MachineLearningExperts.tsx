import React from "react";

const MachineLearningExperts = () => {
  const sections = [
    {
      title: "Computer Vision",
      content:
        "We design advanced deep learning architectures for a wide range of computer vision tasks, including image classification, object detection, smart video analysis, and GANs. Our solutions help clients stay ahead with the latest breakthroughs in computer vision. Discover more about our computer vision services.",
    },
    {
      title: "Natural Language Processing (NLP)",
      content:
        "Through our machine learning development services, we empower machines to comprehend and interpret human language. Our offerings include speech recognition, translation, sentiment analysis, automatic text classification, and chatbots. Our team of ML developers delivers top-tier solutions in natural language processing (NLP).",
    },
    {
      title: "Data Mining",
      content:
        "Leveraging the power of machine learning and deep learning algorithms, we create both basic and sophisticated predictive models. These models enable businesses to predict crucial outcomes like workforce planning, churn analysis, competitive insights, risk management, asset maintenance, and provide comprehensive data management services.",
    },
    {
      title: "Predictive Algorithms",
      content:
        "By harnessing the power of machine learning and deep learning algorithms, we develop both simple and advanced predictive models. These models help businesses forecast key outcomes such as workforce planning, churn analysis, competitive insights, risk management, and asset maintenance.",
    },
    {
      title: "Intelligent Process Automation",
      content:
        "Anchor's machine learning development services offer tailored IPA solutions that combine the power of data, ML, and automation. We simplify intelligent automation for any process by integrating deductive analytics and predictive capabilities into RPA systems.",
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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Our Expertise in
          <span className="text-amber-400"> Machine Learning</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400 ">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
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
