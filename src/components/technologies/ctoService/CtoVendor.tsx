import { PageHeaderText } from "@/components/shared";
import React from "react";
import HireButton from "./HireButton";

const CtoVendor = () => {
  return (
    <div>
      {" "}
      <div className="py-12 bg-white">
        <div className="py-12 bg-amber-100 p-8 text-slate-800 container mx-auto">
          <PageHeaderText label="What makes ITRex a reliable CTO as a Service vendor?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            <div>
              <strong>We are experienced.</strong> With over 10 years of
              experience, we specialize in delivering innovative software
              solutions and leading complex development projects across
              industries such as healthcare, education, retail, and more.
            </div>
            <div>
              <strong>We are visionary.</strong> We don’t just implement
              technology, although we excel at that; we also help you define
              your company’s vision and transform it into a practical,
              actionable technology strategy.
            </div>
            <div>
              <strong>We are innovative.</strong> We have deep expertise in
              modern technologies and stay on top of market trends to help our
              clients gain a competitive edge through disruptive innovations.
            </div>
            <div>
              <strong>We care.</strong>By partnering with our clients on a
              CTO-as-a-Service basis, we thoroughly immerse ourselves in every
              project to ensure excellence and take full accountability for the
              success of the technology in your initiative.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtoVendor;
