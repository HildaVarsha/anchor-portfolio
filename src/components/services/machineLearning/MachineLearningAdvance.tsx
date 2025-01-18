import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const MachineLearningAdvance = () => {
  const tabsData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "We thoroughly analyze your data, challenges, and IT infrastructure to uncover new business opportunities, define use cases, and outline the AI development process.",
        points: [
          "Assessing data sources and quality",
          "Identifying business goals and challenges",
          "Defining success metrics and benchmarks",
          "Outlining the ML project roadmap",
        ],
      },
    },
    {
      value: "DataPreparation",
      title: "Data Preparation",
      content: {
        description:
          "Preparing your data for machine learning involves cleaning, structuring, and transforming raw data into a usable format for effective model training.",
        points: [
          "Data cleaning and handling missing values",
          "Feature engineering and extraction",
          "Data normalization and scaling",
          "Splitting datasets into training, validation, and test sets",
        ],
      },
    },
    {
      value: "Modeling",
      title: "Modeling",
      content: {
        description:
          "The modeling phase focuses on developing, training, and fine-tuning machine learning models to achieve optimal performance.",
        points: [
          "Choosing the right algorithms for the problem",
          "Training and validating models",
          "Hyperparameter tuning for optimization",
          "Comparing model performance using metrics",
        ],
      },
    },
    {
      value: "DeploymentOptimization",
      title: "Deployment & Optimization",
      content: {
        description:
          "Deployment involves integrating the machine learning model into production systems, followed by continuous optimization to ensure scalability and efficiency.",
        points: [
          "Model deployment to cloud or on-premise systems",
          "Setting up monitoring for model performance",
          "Implementing feedback loops for continuous improvement",
          "Scaling models for high-volume data processing",
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
          <span className="text-amber-400 px-2">ML Development</span>
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
