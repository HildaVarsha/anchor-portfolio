import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import ConsultationButton from "./ConsultationButton";

const HowWeDoCollaboration = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 md:container mx-auto">
        <PageHeaderText label="Our Collaboration Models" />
        <p data-aos="fade-up">
          When selecting the ideal engagement model for our clients, we
          carefully evaluate various factors, including core business goals,
          project scope, and the desired level of flexibility and control. Our
          objective is to deliver a solution that strikes the perfect balance
          between cost-effectiveness, performance, and adaptability.
        </p>
        <div className="py-6">
          <div className="flex justify-between border-b border-slate-300 pb-4">
            <p className="font-semibold text-lg w-full">Time & Materials</p>
            <div className="w-full">
              <p data-aos="fade-up">
                The Time & Materials model allows us to develop your software
                product either sequentially or incrementally, ensuring constant
                communication with you. You only pay for the actual work done,
                based on daily or hourly rates per specialist.
              </p>
              <Button
                variant={"link"}
                className="px-0 font-semibold"
                data-aos="fade-up"
              >
                Show More{" "}
                <PlusCircleIcon className="bg-blue-600 text-white rounded-full" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between border-b border-slate-300 py-4">
            <p className="font-semibold text-lg w-full">Fixed Price</p>
            <div className="w-full">
              <p data-aos="fade-up">
                With the Fixed Price model, we agree on a fixed price for the
                entire project before development starts. This approach requires
                detailed planning and project scope estimation upfront.
              </p>
              <Button
                variant={"link"}
                className="px-0 font-semibold"
                data-aos="fade-up"
              >
                Show More{" "}
                <PlusCircleIcon className="bg-blue-600 text-white rounded-full" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between border-b border-slate-300 py-4">
            <p className="font-semibold text-lg w-full" data-aos="fade-up">
              Dedicated Team
            </p>
            <div className="w-full">
              <p data-aos="fade-up">
                The Dedicated Team model allows you to hire our skilled
                engineers to fill specific in-house skill gaps, or to create a
                fully dedicated, self-managed team. Our professionals integrate
                seamlessly into your environment, offering fresh perspectives
                and ideas, while delivering exceptional results with the same
                level of commitment as an in-house team.
              </p>
              <Button
                variant={"link"}
                className="px-0 font-semibold"
                data-aos="fade-up"
              >
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
