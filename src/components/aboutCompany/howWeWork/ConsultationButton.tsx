import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const ConsultationButton = () => {
  return (
    <Link href={"/contact-us"} data-aos="fade-up">
      <Button className="w-full">Get a free consultation!</Button>
    </Link>
  );
};

export default ConsultationButton;
