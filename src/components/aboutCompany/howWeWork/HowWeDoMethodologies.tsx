import { PageHeaderText } from "@/components/shared";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import ConsultationButton from "./ConsultationButton";

const HowWeDoMethodologies = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto py-16 ">
        <div className="flex items-center justify-between">
          <PageHeaderText
            label="Software development
methodologies"
            className="w-full"
          />
          <p className="w-full">
            With hundreds of successful projects under our belt, we will help
            you determine the best approach for developing your software product
            and assemble a skilled team to deliver the desired results.
          </p>
        </div>
        <div>
          <Tabs defaultValue="agile" className="">
            <TabsList className="flex gap-8 w-72 md:w-full overflow-auto overflow-y-hidden">
              <TabsTrigger value="agile">Agile</TabsTrigger>
              <TabsTrigger value="water-fall">Water Fall</TabsTrigger>
            </TabsList>
            <TabsContent value="agile">
              <div className="py-8 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
                <div className="w-full">
                  The Agile approach focuses on an evolving project scope and
                  iterative development, where the team delivers a work
                  product—such as a new feature or significant improvement—at
                  the end of each iteration. This method enables rapid
                  initiation and allows for decision-making based on real-time
                  feedback.
                </div>
                <div className="w-full">
                  <p className="font-semibold">
                    Agile is your go-to methodology when:
                  </p>
                  <li className="py-4">
                    Your vision for the end product is likely to evolve
                    throughout the development process.
                  </li>
                  <li>
                    It’s difficult to detail all the requirements at the project
                    onset, for instance, because of its complexity
                  </li>
                  <li className="pt-4">
                    It can be challenging to outline all the requirements at the
                    start of the project, especially due to its complexity.
                  </li>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="water-fall">
              <div className="py-8 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
                <div className="w-full">
                  The Waterfall approach follows a linear and sequential design
                  process, where each phase must be completed before the next
                  phase begins. This method is highly structured and works best
                  when project requirements are clearly defined and unlikely to
                  change.
                </div>
                <div className="w-full">
                  <p className="font-semibold">
                    Waterfall is your go-to methodology when:
                  </p>
                  <li className="py-4">
                    The project scope, requirements, and deliverables are
                    well-defined and unlikely to change.
                  </li>
                  <li>
                    There is a clear understanding of the project's goals, and
                    the sequence of tasks can be laid out in advance.
                  </li>
                  <li className="pt-4">
                    The project involves critical, high-stakes deliverables
                    where thorough documentation and formal processes are
                    necessary.
                  </li>
                  <li className="pt-4">
                    Stakeholders require a predictable timeline with specific
                    milestones.
                  </li>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <ConsultationButton />
      </div>
    </div>
  );
};

export default HowWeDoMethodologies;
