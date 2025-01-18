import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const AiDevApproach = () => {
  const tabData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "In the Discovery phase, we focus on understanding your business needs, identifying potential use cases, and defining the project scope. This step ensures alignment between stakeholders and project goals.",
        points: [
          "Analyzing business challenges and opportunities",
          "Defining project objectives and success metrics",
          "Identifying data sources and assessing data quality",
          "Developing a high-level project roadmap",
        ],
      },
    },
    {
      value: "Design",
      title: "Design",
      content: {
        description:
          "During the Design phase, we create detailed plans for the machine learning solution, including architectural design, data pipelines, and user interfaces. This ensures a structured and effective development process.",
        points: [
          "Solution architecture design",
          "Data pipeline schematics",
          "Model selection strategy",
          "Prototypes and wireframes for user interfaces",
        ],
      },
    },
    {
      value: "Proof",
      title: "Proof of Concept",
      content: {
        description:
          "The Proof of Concept (PoC) phase validates the feasibility and effectiveness of the proposed solution. We develop a small-scale version to demonstrate its potential.",
        points: [
          "Building and testing a prototype",
          "Evaluating model accuracy and performance",
          "Incorporating stakeholder feedback",
          "Identifying potential challenges and solutions",
        ],
      },
    },
    {
      value: "Implementation",
      title: "Implementation",
      content: {
        description:
          "The Implementation phase focuses on deploying the machine learning solution into production environments. This includes setting up infrastructure, integrating the solution, and ensuring scalability.",
        points: [
          "Deploying models to production",
          "Integrating the solution with existing systems",
          "Monitoring performance and reliability",
          "Scaling for real-world use cases",
        ],
      },
    },
  ];

  return (
    <div className="bg-white pb-16">
      <div
        className="h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-approach.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our Approach for
          <span className="text-amber-400"> AI Software Development</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We provide comprehensive AI software development services, covering
          everything from data preparation for AI algorithms to system
          deployment for thousands of users. Our AI developers can also help you
          tailor third-party AI-as-a-Service (AIaaS) solutions to meet your
          specific needs.
        </p>
      </div>
      <div className="text-slate-800 md:container px-4 md:px-0 mx-auto pt-6">
        <Tabs defaultValue="Discovery">
          <TabsList className="flex gap-8 w-72 md:w-full overflow-auto overflow-y-hidden">
            {tabData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} data-aos="fade-up">
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
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

export default AiDevApproach;
