import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const AiDevApproach = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-approach.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Our Approach for
          <span className="text-amber-400">AI Software Development</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          We provide comprehensive AI software development services, covering
          everything from data preparation for AI algorithms to system
          deployment for thousands of users. Our AI developers can also help you
          tailor third-party AI-as-a-Service (AIaaS) solutions to meet your
          specific needs.
        </p>
      </div>
      <div className="text-slate-800 md:container px-4 md:px-0 mx-auto pt-6">
        <Tabs defaultValue="Discovery" className="">
          <TabsList className="flex gap-8 w-72 md:w-full overflow-auto overflow-y-hidden">
            <TabsTrigger value="Discovery">Discovery</TabsTrigger>
            <TabsTrigger value="Design">Design</TabsTrigger>
            <TabsTrigger value="Proof">Proof of concept</TabsTrigger>
            <TabsTrigger value="Implementation">Implementation</TabsTrigger>
          </TabsList>
          <TabsContent value="Discovery">
            <div className="py-8 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
              <div className="w-full">
                We thoroughly analyze your data, challenges, and IT
                infrastructure to uncover new business opportunities, define use
                cases, and outline the AI development process.
              </div>
              <div className="w-full">
                <p className="font-semibold">
                  Agile is your go-to methodology when:
                </p>
                <li className="py-4">
                  Your vision for the end product is likely to evolve throughout
                  the development process.
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
          <TabsContent value="Design">
            <div className="py-8 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
              <div className="w-full">
                The Design approach follows a linear and sequential design
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
                  There is a clear understanding of the project&apos;s goals,
                  and the sequence of tasks can be laid out in advance.
                </li>
                <li className="pt-4">
                  The project involves critical, high-stakes deliverables where
                  thorough documentation and formal processes are necessary.
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
    </div>
  );
};

export default AiDevApproach;
