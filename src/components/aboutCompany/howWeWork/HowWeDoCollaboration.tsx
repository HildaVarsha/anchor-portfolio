import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import ConsultationButton from "./ConsultationButton";

const HowWeDoCollaboration = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="container mx-auto">
        <PageHeaderText label="Our Collaboration Models" />
        <p>
          When choosing the ideal engagement model for our clients, we consider
          numerous factors, including their core business objectives, project
          scope, and the desired level of flexibility and control. Our goal is
          to deliver a solution that perfectly balances cost efficiency,
          performance, and adaptability.
        </p>
        <div className="py-6">
          <div className="flex justify-between border-b border-slate-300 pb-4">
            <p className="font-semibold text-lg w-full">Time & Materials</p>
            <div className="w-full">
              <p>
                Under the Time & Materials model, we can develop your software
                product either sequentially, stage by stage, or incrementally,
                maintaining constant communication with you. You only pay for
                the actual work completed, based on daily or hourly rates per
                specialist.
              </p>
              <Button variant={"link"} className="px-0 font-semibold">
                Show More{" "}
                <PlusCircleIcon className="bg-blue-600 text-white rounded-full" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between border-b border-slate-300 py-4">
            <p className="font-semibold text-lg w-full">Fixed Price</p>
            <div className="w-full">
              <p>
                With this model, we develop your software product for a fixed
                price agreed upon upfront for the entire project. This typically
                requires detailed planning and estimation of the project scope
                before development begins.
              </p>
              <Button variant={"link"} className="px-0 font-semibold">
                Show More{" "}
                <PlusCircleIcon className="bg-blue-600 text-white rounded-full" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between border-b border-slate-300 py-4">
            <p className="font-semibold text-lg w-full">Dedicated Team</p>
            <div className="w-full">
              <p>
                Alternatively, you can hire our highly skilled engineers to
                address specific in-house skill gaps or opt for a fully
                dedicated, self-managed team. Our professionals integrate
                seamlessly into your environment, bringing fresh perspectives
                and ideas, while delivering exceptional results with
                in-house-like commitment.
              </p>
              <Button variant={"link"} className="px-0 font-semibold">
                Show More{" "}
                <PlusCircleIcon className="bg-blue-600 text-white rounded-full" />
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <ConsultationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoCollaboration;
