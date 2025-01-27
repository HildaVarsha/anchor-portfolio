import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HireButton = ({ label }: { label?: string }) => {
  return (
    <Link href={"/contact-us"}>
      {" "}
      <Button className="w-fit mt-4 z-10" data-aos="fade-up">
        {label ? label : "Hire DevOps"}
        <ArrowRight />
      </Button>
    </Link>
  );
};

export default HireButton;
