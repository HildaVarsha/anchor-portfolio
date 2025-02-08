import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const FinTechEstablish = () => {
  const tabsData = [
    {
      value: "Discovery",
      title: "Discovery",
      content: {
        description:
          "Identifying opportunities, addressing challenges, and gathering key insights to establish a solid foundation for the project.",
        points: [
          "Conducting interviews with stakeholders",
          "Understanding the needs of users",
          "Examining market trends",
          "Setting initial goals and defining scope",
        ],
      },
    },
    {
      value: "Evaluation",
      title: "Evaluation",
      content: {
        description:
          "Evaluating requirements, assessing feasibility, and prioritizing tasks for project execution.",
        points: [
          "Analyzing technical feasibility",
          "Assessing potential risks",
          "Allocating resources",
          "Prioritizing features and functionalities",
        ],
      },
    },
    {
      value: "Planning",
      title: "Planning",
      content: {
        description:
          "Creating a comprehensive plan with a clear timeline and assigning roles and responsibilities for successful project implementation.",
        points: [
          "Developing a project timeline",
          "Defining team roles and responsibilities",
          "Setting milestones for progress",
          "Finalizing the project scope and deliverables",
        ],
      },
    },
    {
      value: "Development",
      title: "Development",
      content: {
        description:
          "Turning ideas into tangible solutions through coding, testing, and iteration to ensure functionality and performance.",
        points: [
          "Writing and refining code",
          "Integrating third-party APIs and services",
          "Performing unit and integration testing",
          "Monitoring progress with agile methodologies",
        ],
      },
    },
    {
      value: "Reiteration",
      title: "Reiteration",
      content: {
        description:
          "Enhancing the product through continuous feedback, iterative improvements, and addressing any issues to ensure stability and scalability.",
        points: [
          "Collecting feedback from users",
          "Implementing iterative updates and enhancements",
          "Resolving bugs and optimizing performance",
          "Ensuring scalability and stability for long-term success",
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
        <div className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold  lg:container">
          <p data-aos="fade-up">Established FinTech software development </p>
          <p className="text-lime-500" data-aos="fade-up">
            {" "}
            workflows for prolific cooperation
          </p>
        </div>
      </div>
      <div className="py-12 bg-lime-500">
        <div
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you aim to evolve your organization into a fully digital
          enterprise or introduce a new FinTech product to the market, we employ
          streamlined processes that deliver value right from the start.
        </div>
      </div>
      <div className="px-4 lg:px-0 lg:container mx-auto py-16  text-slate-800">
        <Tabs defaultValue="Discovery" data-aos="fade-up">
          <TabsList className="flex gap-8 w-72 lg:w-full overflow-auto overflow-y-hidden">
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} data-aos="fade-up">
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} data-aos="fade-up">
              <div className="py-8 flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
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
