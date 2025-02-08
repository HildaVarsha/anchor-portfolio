import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DotNetWhyChoose = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-12 text-slate-800">
        <div>
          <h3 className="font-semibold text-xl " data-aos="fade-up">
            Fixed price
          </h3>
          <p className="pt-4" data-aos="fade-up">
            Choose a fixed-price cooperation model if your project requirements
            and deliverables are clearly defined and unlikely to change. With
            this model, you&apos;ll pay a predetermined amount upon project
            completion.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl " data-aos="fade-up">
            Dedicated team
          </h3>
          <p className="pt-4" data-aos="fade-up">
            Our highly skilled .NET engineers are ready to help you address
            specific in-house talent gaps. With FTE-based pricing, you only pay
            for the dedicated resources you hire.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl" data-aos="fade-up">
            Time and material
          </h3>
          <p className="pt-4" data-aos="fade-up">
            Choose a T&M engagement if you need flexibility. This model is ideal
            for projects with evolving requirements and an undefined scope.
            You’ll be billed based on the time and resources utilized.
          </p>
        </div>
      </div>
      <Link href={"/contact-us"}>
        <div className="flex items-center px-4 lg:px-0 lg:container mx-auto">
          <Button className="mt-4" data-aos="fade-up">
            Hire .NET developers <ArrowRight />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default DotNetWhyChoose;
