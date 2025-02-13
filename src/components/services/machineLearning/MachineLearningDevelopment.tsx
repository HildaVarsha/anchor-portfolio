import React from "react";

const MachineLearningDevelopment = () => {
  const sections = [
    {
      title: "Algorithms",
      items: [
        "Supervised Learning (classification, regression, etc.)",
        "Semi-supervised Learning",
        "Unsupervised Learning (clustering, etc.)",
        "Deep Learning (neural networks, reinforcement learning, etc.)",
        "Optimization",
        "Probabilistic ML",
        "Computer Vision (object detection, instance segmentation, etc.)",
      ],
    },
    {
      title: "Libraries & Frameworks",
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "XGBoost",
        "LightGBM",
        "OpenCV",
      ],
    },
    {
      title: "Programming Languages",
      items: ["Python", "R", "Java", "C++", "Scala", "Julia"],
    },
    {
      title: "Data Visualization Tools",
      items: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
    },
    {
      title: "Cloud Platforms",
      items: [
        "AWS",
        "Google Cloud Platform",
        "Microsoft Azure",
        "IBM Watson",
        "Alibaba Cloud",
      ],
    },
    {
      title: "Other Tools & Technologies",
      items: ["Hadoop", "Spark", "Kafka", "Docker", "Kubernetes"],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ml-develop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Our
          <span className="text-lime-500 px-2">
            Machine Learning Development
          </span>
          Technology Stack
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a machine learning services provider with a team of over 230
          cross-functional experts, we stay ahead of industry challenges and
          leverage emerging ML opportunities to drive success for your business.
        </p>
      </div>
      <div className="mt-12 px-4 lg:px-0 lg:p-12 lg:container mx-auto text-slate-800 bg-white grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16">
        {sections.map((section, index) => (
          <div key={index} data-aos="fade-up">
            <h2 className="font-semibold text-lg" data-aos="fade-up">
              {section.title}
            </h2>

            {section.items.map((item, i) => (
              <li
                key={i}
                data-aos="fade-up"
                className={i % 2 === 0 ? "py-4" : ""}
              >
                {item}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineLearningDevelopment;
