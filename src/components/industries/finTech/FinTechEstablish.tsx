import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const FinTechEstablish = () => {
  const tabsData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "Exploring opportunities, identifying challenges, and gathering insights to set the foundation for the project.",
        points: [
          "Conducting stakeholder interviews",
          "Understanding user needs",
          "Analyzing market trends",
          "Defining initial goals and scope",
        ],
      },
    },
    {
      value: "Evaluation",
      title: "Evaluation",
      content: {
        description:
          "Assessing requirements, analyzing feasibility, and setting priorities for project execution.",
        points: [
          "Technical feasibility analysis",
          "Risk assessment",
          "Resource allocation",
          "Prioritizing features and functionalities",
        ],
      },
    },
    {
      value: "Planning",
      title: "Planning",
      content: {
        description:
          "Formulating a detailed roadmap and preparing for implementation with clear timelines and responsibilities.",
        points: [
          "Creating a project timeline",
          "Assigning team roles",
          "Establishing milestones",
          "Finalizing the project scope",
        ],
      },
    },
    {
      value: "Development",
      title: "Development",
      content: {
        description:
          "Bringing ideas to life by coding, testing, and iterating to build functional solutions.",
        points: [
          "Writing and reviewing code",
          "Integrating APIs and services",
          "Unit and integration testing",
          "Tracking progress with agile methodologies",
        ],
      },
    },
    {
      value: "Reiteration",
      title: "Reiteration",
      content: {
        description:
          "Refining the product through feedback, enhancements, and continuous improvement cycles.",
        points: [
          "Gathering user feedback",
          "Implementing iterative updates",
          "Addressing bugs and performance issues",
          "Ensuring product scalability and stability",
        ],
      },
    },
  ];
  return (
    <div className="bg-white">
      {" "}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/fintech-establish.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">Established FinTech software development </p>
          <p className="text-amber-400" data-aos="fade-up">
            {" "}
            workflows for prolific cooperation
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you look to transform your organization into a truly digital
          enterprise or seek to bring a new FinTech product to the market, we
          have efficient processes to deliver value from day one.
        </div>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-16  text-slate-800">
        <Tabs defaultValue="Discovery" data-aos="fade-up">
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
                <div className="w-full" data-aos="fade-up">
                  {tab.content.description}
                </div>
                <div className="w-full">
                  <p className="font-semibold" data-aos="fade-up">
                    Key Points:
                  </p>
                  <ul>
                    {tab.content.points.map((point, index) => (
                      <li key={index} className="py-2" data-aos="fade-up">
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

export default FinTechEstablish;
