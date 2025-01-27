import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const AiDevApproach = () => {
  const tabData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "In the Discovery phase, we focus on understanding your business needs, pinpointing potential use cases, and defining the project scope. This phase ensures alignment among stakeholders and sets clear project objectives.",
        points: [
          "Analyzing business challenges and opportunities",
          "Defining project goals and success criteria",
          "Identifying data sources and evaluating data quality",
          "Creating a high-level project roadmap",
        ],
      },
    },
    {
      value: "Design",
      title: "Design",
      content: {
        description:
          "During the Design phase, we craft detailed plans for the machine learning solution, including architecture design, data pipelines, and user interfaces. This ensures a structured, efficient development process.",
        points: [
          "Designing solution architecture",
          "Creating data pipeline schematics",
          "Developing model selection strategy",
          "Building prototypes and wireframes for user interfaces",
        ],
      },
    },
    {
      value: "Proof",
      title: "Proof of Concept",
      content: {
        description:
          "The Proof of Concept (PoC) phase verifies the feasibility and potential of the proposed solution. We develop a small-scale version to demonstrate its effectiveness.",
        points: [
          "Building and testing a prototype",
          "Evaluating model performance and accuracy",
          "Incorporating feedback from stakeholders",
          "Identifying challenges and proposing solutions",
        ],
      },
    },
    {
      value: "Implementation",
      title: "Implementation",
      content: {
        description:
          "The Implementation phase involves deploying the machine learning solution into production. This includes setting up infrastructure, integrating with existing systems, and ensuring scalability.",
        points: [
          "Deploying models to production environments",
          "Integrating the solution with existing systems",
          "Monitoring performance and ensuring reliability",
          "Scaling the solution for real-world applications",
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
          <span className="text-lime-500"> AI Software Development</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We offer complete AI software development services, spanning
          everything from data preparation for AI algorithms to deploying
          systems for thousands of users. Our AI developers can also assist in
          customizing third-party AI-as-a-Service (AIaaS) solutions to fit your
          unique requirements.
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
