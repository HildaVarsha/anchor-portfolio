import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import React from "react";

const HireButton = () => {
  return (
    <div>
      <Button className="w-fit mt-4" data-aos="fade-up">
        Hire software engineer
        <ArrowRight />
      </Button>
    </div>
  );
};

export default HireButton;
