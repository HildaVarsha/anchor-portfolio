import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import React from "react";

const SoftwareEngineerDedication = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <Tabs defaultValue="projects" className="">
          <TabsList className="flex gap-8 w-72 md:w-full overflow-auto overflow-y-hidden">
            <TabsTrigger value="projects">Turnkey Projects</TabsTrigger>
            <TabsTrigger value="teams">Dedicated Teams</TabsTrigger>
            <TabsTrigger value="staff">IT staff Augmentation</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <div className="py-8">
              Our turnkey product development model, based on the time and
              materials (T&M) approach, offers a seamless way to utilize our
              software engineering services. We manage the entire development
              process, delivering functional software or components at regular
              intervals, allowing you to focus on strategic priorities. With
              expert knowledge, detailed reporting, transparent pricing, and a
              customer-centric approach, we ensure a smooth and reliable
              experience.
            </div>
          </TabsContent>
          <TabsContent value="teams">
            <div></div>
          </TabsContent>
          <TabsContent value="staff">
            <div></div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SoftwareEngineerDedication;
