import React from "react";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

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
        <p className="px-4 md:px-0 text-2xl md:text-5xl  font-bold container mx-auto">
          Our .NET
          <p className="text-amber-400 pr-2 px-4 md:px-0 text-2xl md:text-5xl  font-bold container">
            technology stack
          </p>
        </p>
      </div>
      <div className="bg-white mt-16 text-slate-800">
        <div className="bg-amber-50 p-16 container mx-auto flex flex-col md:flex-row gap-12">
          <div>
            <li>
              <strong>Platforms:</strong> .NET Framework | .NET Core
            </li>
            <li className="py-4">
              <strong>Desktop:</strong> WPF | Windows Forms | UWP
            </li>
            <li>
              <strong>Cloud:</strong> Microsoft Azure | AWS | Google Cloud |
              Cloud Foundry | Rackspace Technology | OpenStack
            </li>
            <li className="py-4">
              <strong>ML:</strong> Azure Machine Learning | Azure Cognitive
              Services
            </li>
            <li>
              <strong> UI: </strong> .NET MAUI
            </li>
          </div>
          <div>
            <li>
              <strong>Programming languages:</strong> C# | Visual Basic
            </li>
            <li className="py-4">
              <strong>Web:</strong> ASP.NET MVC | ASP.NET Web API | Asp.NET Core
            </li>
            <li>
              <strong>Mobile:</strong> Xamarin/Mono
            </li>
            <li className="py-4">
              <strong>DevOps:</strong> Ansible | Terraform | Puppet | SaltStack
              | Chef | Kubernetes | Docker
            </li>
            <li>
              <strong> CMS: </strong> Umbraco
            </li>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button className="mt-4">
            Hire .NET developers <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DotNetTechnology;
