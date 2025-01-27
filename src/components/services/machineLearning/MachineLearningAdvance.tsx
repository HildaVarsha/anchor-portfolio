import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const MachineLearningAdvance = () => {
  const tabsData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "We conduct a comprehensive analysis of your data, challenges, and IT infrastructure to identify new business opportunities, define use cases, and map out the AI development journey.",
        points: [
          "Evaluating data sources and quality",
          "Recognizing business goals and challenges",
          "Establishing success metrics and benchmarks",
          "Planning the ML project roadmap",
        ],
      },
    },
    {
      value: "DataPreparation",
      title: "Data Preparation",
      content: {
        description:
          "Preparing your data for machine learning includes cleaning, organizing, and transforming raw data into a structured format suitable for effective model training.",
        points: [
          "Cleaning data and addressing missing values",
          "Feature extraction and engineering",
          "Normalizing and scaling data",
          "Splitting data into training, validation, and test sets",
        ],
      },
    },
    {
      value: "Modeling",
      title: "Modeling",
      content: {
        description:
          "The modeling stage focuses on developing, training, and fine-tuning machine learning models to achieve the best possible performance.",
        points: [
          "Selecting the appropriate algorithms for the task",
          "Training and validating models",
          "Optimizing models through hyperparameter tuning",
          "Evaluating model performance using various metrics",
        ],
      },
    },
    {
      value: "DeploymentOptimization",
      title: "Deployment & Optimization",
      content: {
        description:
          "Deployment involves incorporating the machine learning model into production systems, followed by ongoing optimization to ensure efficiency and scalability.",
        points: [
          "Deploying models to cloud or on-premise environments",
          "Setting up performance monitoring for models",
          "Implementing feedback mechanisms for continuous refinement",
          "Scaling models to handle large volumes of data",
        ],
      },
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our Strategy for Advancing Future-Ready
          <span className="text-lime-500 px-2">ML Development</span>
        </p>
      </div>
      <div className="mt-12 p-4 md:p-12 md:container mx-auto text-slate-800 flex flex-col md:flex-row gap-4 md:gap-16">
        <Tabs defaultValue="Discovery">
          <TabsList className="flex gap-8 w-72 md:w-full overflow-auto overflow-y-hidden">
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} data-aos="fade-up">
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} data-aos="fade-up">
              <div className="py-8 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
                <div className="w-full">{tab.content.description}</div>
                <div className="w-full">
                  <p className="font-semibold">Key Points:</p>
                  <ul>
                    {tab.content.points.map((point, index) => (
                      <li key={index} className="py-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MachineLearningAdvance;
