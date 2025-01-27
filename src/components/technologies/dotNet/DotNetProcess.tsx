import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const dotnetAppServices = [
  {
    title: "Web",
    description:
      "We will develop a web application for you that functions seamlessly on Windows, Linux, and macOS.",
  },
  {
    title: "Mobile",
    description:
      "We will create a cross-platform mobile app that delivers an exceptional experience for users on iOS, Android, and Windows.",
  },
  {
    title: "Desktop",
    description:
      "We will design and build an exceptional desktop application for both Windows and macOS.",
  },
  {
    title: "Cloud",
    description:
      "We’ll assist you in setting up and configuring a robust cloud environment, as well as developing and deploying your software application on it.",
  },
  {
    title: "Machine Learning",
    description:
      "We will create a standalone .NET-based machine learning solution or enhance your existing software with advanced ML capabilities.",
  },
  {
    title: "Internet of Things",
    description:
      "We will leverage .NET's native support for Raspberry Pi to build a high-performance IoT application.",
  },
  {
    title: "Service-Oriented",
    description:
      "e will utilize .NET to develop microservices that can operate independently on Docker.",
  },
];

const DotNetProcess = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="py-16 px-4 md:px-0 md:container mx-auto">
        <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          {dotnetAppServices.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link href={"/contact-us"}>
          <Button className="mt-4" data-aos="fade-up">
            Develop your .NET app <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DotNetProcess;
