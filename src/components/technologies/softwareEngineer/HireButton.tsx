import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HireButton = () => {
  return (
    <Link href={"/contact-us"}>
      <Button className="w-fit mt-4" data-aos="fade-up">
        Hire software engineer
        <ArrowRight />
      </Button>
    </Link>
  );
};

export default HireButton;
