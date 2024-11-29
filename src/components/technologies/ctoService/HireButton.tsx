import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";

const HireButton = ({ label }: { label?: string }) => {
  return (
    <div>
      <Button className="w-fit mt-4">
        {label ? label : "Hire a virtual CTO"}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default HireButton;
