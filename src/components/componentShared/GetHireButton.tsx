import Link from "next/link";
import React from "react";
import { Button } from "../ui";

const GetHireButton = () => {
  return (
    <Link href={"/contact-us"} data-aos="fade-up">
      <Button>Get In Touch</Button>
    </Link>
  );
};

export default GetHireButton;
