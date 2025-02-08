import { PageHeaderText } from "@/components/shared";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import ConsultationButton from "./ConsultationButton";

const HowWeDoMethodologies = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 lg:px-0 lg:container mx-auto py-16 ">
        <div className="flex items-center justify-between">
          <PageHeaderText
            label="Software development methodologies"
            className="w-full"
          />
          <p className="w-full" data-aos="fade-up">
            With hundreds of successful projects under our belt, we will help
            you determine the best approach for developing your software product
            and assemble a skilled team to deliver the desired results.
          </p>
        </div>
        <div>
          <Tabs defaultValue="agile" className="" data-aos="fade-up">
            <TabsList className="flex gap-8 w-72 lg:w-full overflow-auto overflow-y-hidden">
              <TabsTrigger value="agile" data-aos="fade-up">
                Agile
              </TabsTrigger>
              <TabsTrigger value="water-fall" data-aos="fade-up">
                Water Fall
              </TabsTrigger>
            </TabsList>
            <TabsContent value="agile">
              <div className="py-8 flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
                <div className="w-full" data-aos="fade-up">
                  The Agile approach emphasizes flexibility and iterative
                  development, with teams delivering a work product—such as a
                  new feature or key improvement—at the end of each iteration.
                  This method enables quick initiation and decision-making based
                  on real-time feedback.
                </div>
                <div className="w-full">
                  <p className="font-semibold" data-aos="fade-up">
                    Agile is the ideal methodology when:
                  </p>
                  <li className="py-4" data-aos="fade-up">
                    Your vision for the final product is expected to evolve
                    throughout development.
                  </li>
                  <li data-aos="fade-up">
                    Detailing all requirements at the project's start is
                    difficult, particularly due to its complexity.
                  </li>
                  <li className="pt-4" data-aos="fade-up">
                    It's challenging to define all project requirements upfront
                    because of its complexity.
                  </li>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="water-fall">
              <div className="py-8 flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
                <div className="w-full" data-aos="fade-up">
                  The Waterfall approach follows a structured, linear process,
                  where each phase is completed before moving to the next. This
                  methodology is most effective when project requirements are
                  clearly defined and unlikely to change.
                </div>
                <div className="w-full">
                  <p className="font-semibold" data-aos="fade-up">
                    Waterfall is the ideal methodology when:
                  </p>
                  <li className="py-4" data-aos="fade-up">
                    The project’s scope, requirements, and deliverables are
                    well-defined and stable.
                  </li>
                  <li data-aos="fade-up">
                    There is a clear understanding of the project’s goals, and
                    the tasks can be planned sequentially.
                  </li>
                  <li className="pt-4" data-aos="fade-up">
                    The project involves high-priority deliverables that require
                    detailed documentation and formal processes.
                  </li>
                  <li className="pt-4" data-aos="fade-up">
                    Stakeholders need a predictable timeline with specific
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
