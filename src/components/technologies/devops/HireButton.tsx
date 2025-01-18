import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";

const HireButton = ({ label }: { label?: string }) => {
  return (
    <div>
      {" "}
      <Button className="w-fit mt-4 z-10" data-aos="fade-up">
        {label ? label : "Hire DevOps"}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default HireButton;
