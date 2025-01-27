import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DotNetTechnology = () => {
  return (
    <div className="bg-white pb-16">
      {" "}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/dot-net-technology.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl  font-bold container mx-auto"
          data-aos="fade-up"
        >
          Our .NET
          <p className="text-green-500 pr-2 px-4 md:px-0 text-2xl md:text-5xl  font-bold container">
            technology stack
          </p>
        </p>
      </div>
      <div className="bg-white mt-16 text-slate-800">
        <div className="bg-amber-50 p-16 container mx-auto flex flex-col md:flex-row gap-12">
          <div>
            <li data-aos="fade-up">
              <strong>Platforms:</strong> .NET Framework | .NET Core
            </li>
            <li className="py-4" data-aos="fade-up">
              <strong>Desktop:</strong> WPF | Windows Forms | UWP
            </li>
            <li data-aos="fade-up">
              <strong>Cloud:</strong> Microsoft Azure | AWS | Google Cloud |
              Cloud Foundry | Rackspace Technology | OpenStack
            </li>
            <li className="py-4" data-aos="fade-up">
              <strong>ML:</strong> Azure Machine Learning | Azure Cognitive
              Services
            </li>
            <li data-aos="fade-up">
              <strong> UI: </strong> .NET MAUI
            </li>
          </div>
          <div>
            <li data-aos="fade-up">
              <strong>Programming languages:</strong> C# | Visual Basic
            </li>
            <li className="py-4" data-aos="fade-up">
              <strong>Web:</strong> ASP.NET MVC | ASP.NET Web API | Asp.NET Core
            </li>
            <li data-aos="fade-up">
              <strong>Mobile:</strong> Xamarin/Mono
            </li>
            <li className="py-4" data-aos="fade-up">
              <strong>DevOps:</strong> Ansible | Terraform | Puppet | SaltStack
              | Chef | Kubernetes | Docker
            </li>
            <li data-aos="fade-up">
              <strong> CMS: </strong> Umbraco
            </li>
          </div>
        </div>
        <Link href={"/contact-us"}>
          <div className="flex items-center justify-center">
            <Button className="mt-4" data-aos="fade-up">
              Hire .NET developers <ArrowRight />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DotNetTechnology;
