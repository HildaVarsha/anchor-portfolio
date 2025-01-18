import React from "react";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";
const softwareServices = [
  {
    title: "Technology Consulting &Audits",
    description:
      "The foundation of our software engineering services package includes assessing your business requirements, reviewing your current IT infrastructure, recommending the right technology, and creating a proof of concept to evaluate the feasibility of your idea.",
  },
  {
    title: "Software Development",
    description:
      "Whether it's a dynamic web app, embedded software for a Smart Home device, or an advanced analytics platform to process your data, our software engineering company is here to serve you!",
  },
  {
    title: "Solution Architecture",
    description:
      "Building on the insights gathered during the project discovery phase, our software architects collaborate with experienced business analysts to design a robust software architecture that scales seamlessly with your business and allows for future innovation.",
  },
  {
    title: "Application Modernization",
    description:
      "In addition to custom software engineering, we implement modern tech stacks, break down large software systems into microservices, orchestrate containerized apps, and seamlessly integrate the components of your IT infrastructure.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "The Anchor Informatics software engineering service team will follow best practices to establish a comprehensive cloud infrastructure for your software solution, ensure faster updates, and monitor application performance. We provide:",
  },
  {
    title: "UI/UX Design",
    description:
      "From analyzing your customers' buying journey to implementing data democratization principles, our engineering company designs intuitive navigation logic and interfaces that enable users to complete their intended actions with minimal friction.",
  },
  {
    title: "Quality Assurance",
    description:
      "As part of our software product engineering services, we ensure that your applications are free of bugs, function as expected, and provide an exceptional user experience.",
  },
  {
    title: "Product Innovation",
    description:
      "We offer innovative software engineering services to tech startups and enterprises. Whether you're upgrading your accounting software or building an IoT-powered fitness mirror from scratch, just reach out to us!",
  },
];

const SoftwareEngineerAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Custom software engineering services designed to deliver value from day one." />
        <p className="py-4 text-lg" data-aos="fade-up">
          We provide a comprehensive range of software engineering and
          consulting services to help our clients build technology systems for
          enterprise resource planning, collaboration, customer management, data
          analysis, and process automation. You can rely on our software
          engineering firm for:
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-4">
          {softwareServices?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4" data-aos="fade-up">
                {service.title}
              </h3>
              <p data-aos="fade-up">{service.description}</p>
            </div>
          ))}
        </div>
        <HireButton />
      </div>
    </div>
  );
};

export default SoftwareEngineerAbout;
