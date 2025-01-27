import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HireJavaDeveloperButton = ({ label }: { label?: string }) => {
  return (
    <Link href={"/contact-us"}>
      <Button className="w-fit mt-4 z-10" data-aos="fade-up">
        {label ? label : "Hire Java developers"}
        <ArrowRight />
      </Button>
    </Link>
  );
};

export default HireJavaDeveloperButton;
