import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const HireJavaDeveloperButton = ({ label }: { label?: string }) => {
  return (
    <div>
      <Button className="w-fit mt-4 z-10" data-aos="fade-up">
        {label ? label : "Hire Java developers"}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default HireJavaDeveloperButton;
