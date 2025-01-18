import { PageHeaderText } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const SuitableJob = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText
          label="Many say they want this"
          className="text-center"
        />
        <p className="text-center" data-aos="fade-up">
          Some truly mean it.If you believe you’d thrive at ITRex, we’d love to
          hear from you. Browse through our vacancies and see if there’s a role
          that fits you.
        </p>
        <div className="pt-6 bg-slate-200 p-4 md:p-16 mt-8">
          <PageHeaderText
            label="Didn’t find a suitable job?"
            className="text-center"
          />
          <Link
            href={"/contact-us"}
            className="w-full flex items-center justify-center"
            data-aos="fade-up"
          >
            <Button>Send a CV anyway</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuitableJob;
