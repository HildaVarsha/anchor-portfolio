import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const DotNetWhyChoose = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 md:px-0 md:container mx-auto flex flex-col md:flex-row gap-4 md:gap-12 text-slate-800">
        <div>
          <h3 className="font-semibold text-xl ">Fixed price</h3>
          <p className="pt-4">
            Choose a fixed-price cooperation model if your project requirements
            and deliverables are clearly defined and unlikely to change. With
            this model, you&apos;ll pay a predetermined amount upon project
            completion.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl ">Dedicated team</h3>
          <p className="pt-4">
            Our highly skilled .NET engineers are ready to help you address
            specific in-house talent gaps. With FTE-based pricing, you only pay
            for the dedicated resources you hire.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Time and material</h3>
          <p className="pt-4">
            Choose a T&M engagement if you need flexibility. This model is ideal
            for projects with evolving requirements and an undefined scope.
            You’ll be billed based on the time and resources utilized.
          </p>
        </div>
      </div>
      <div className="flex items-center px-4 md:px-0 md:container mx-auto">
        <Button className="mt-4">
          Hire .NET developers <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default DotNetWhyChoose;
