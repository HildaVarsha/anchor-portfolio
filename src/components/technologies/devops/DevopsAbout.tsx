import React from "react";
import { PageHeaderText } from "../../shared";
import HireButton from "./HireButton";
const devopsAbout = [
  {
    title: "Continuous Integration",
    description:
      "Regularly merging code changes into a central cloud repository allows teams to identify and resolve bugs more quickly, enhancing code quality and speeding up release cycles.",
  },
  {
    title: "Continuous Testing",
    description:
      "Each build and delivery removes a major roadblock—testing—that typically delays delivery. Shift-left strategies help identify issues early, boosting efficiency and speeding up the process.",
  },
  {
    title: "Continuous Delivery",
    description:
      "Automatically preparing code changes for seamless release to testing and preproduction environments ensures that your developers consistently have deployment-ready deliverables.",
  },
  {
    title: "Continuous Deployment",
    description:
      "Automating the entire release process with container technologies enables teams to deploy updates to production and perform rollbacks with a single click, while automatically checking code for issues.",
  },
  {
    title: "Microservices",
    description:
      "Breaking an application into smaller, independent services that run their own processes provides the flexibility to scale and deploy each service individually, without affecting other teams.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Provisioning servers, storage, and databases through code eliminates the need for manual setup and deployments, enabling your teams to interact with the infrastructure programmatically.",
  },
];

const DevopsAbout = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Enhance your business with our expert DevOps consulting services and solutions." />
        <p className="py-4 text-lg" data-aos="fade-up">
          Leading tech companies trust Anchor Informatics to implement DevOps
          solutions that enhance culture, technology, and processes. Our DevOps
          consulting team works to break down the barriers between Development
          and Operations, fostering collaborative problem-solving rather than
          working in silos. By focusing on agility, tighter feedback loops, and
          rapid iterations, we help you streamline software delivery and
          maximize its speed.
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {devopsAbout?.map((service, index) => (
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

export default DevopsAbout;
