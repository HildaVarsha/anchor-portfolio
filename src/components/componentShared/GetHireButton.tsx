import Link from "next/link";
import React from "react";
import { Button } from "../ui";

const GetHireButton = () => {
  return (
    <Link href={"/contact-us"} data-aos="fade-up" className="z-10">
      <Button>Get In Touch</Button>
    </Link>
  );
};

export default GetHireButton;
