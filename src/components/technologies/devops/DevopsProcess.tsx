import React from "react";
import HireButton from "./HireButton";
const devopsProcess = [
  {
    title: "Infrastructure and Operations Management",
    description:
      "Our DevOps consulting services and end-to-end DevOps solutions will help you optimize your processes, streamline workflows, and accelerate software delivery.",
  },
  {
    title: "Containerization",
    description:
      "With containerization strategies, you’ll achieve greater efficiency by using fewer resources, ensuring built-in system availability and resiliency, implementing proactive security, and gaining unmatched scalability.",
  },
  {
    title: "Transformation Strategies",
    description:
      "Our DevOps consulting firm evaluates your current infrastructure, processes, security, costs, and risks to bring your systems to the desired state. You’ll receive a roadmap that outlines ideal candidates for cloud migration, action points for automation, the right tools, and configuration recommendations.",
  },
  {
    title: "Capacity and Availability Management",
    description:
      "Leverage smarter tools to automate performance benchmarking and monitoring, ensuring that cloud resources are optimally sized. This allows you to proactively identify issues and quickly determine whether recent code changes have made the application more resource-intensive.",
  },
  {
    title: "Automation",
    description:
      "By automating infrastructure provisioning, testing, integration, and deployment, we help accelerate releases and reduce software defects. Our DevOps experts and consultants use the latest tools to lighten the load on your teams and reduce IT overhead.",
  },
  {
    title: "Managed Services",
    description:
      "Build your software, and we'll handle the rest. We'll establish automated processes to provide you with the benefits of cloud-based DevOps solutions, then manage them for you. By outsourcing our DevOps consulting services, you’ll start seeing results from day one, without wasting time on team setup.",
  },
  {
    title: "Release Management",
    description:
      "Advanced release management orchestration tools, such as release automation, ticketing, and configuration management, help you integrate best practices to increase the frequency of zero-downtime deployments.",
  },
  {
    title: "Monitoring and Enhancement",
    description:
      "In addition to providing 24/7 support for your applications, we can set up monitoring and reporting systems to measure performance and detect issues. From resource utilization to uptime, availability, and other key performance indicators (KPIs), we've got you covered.",
  },
  {
    title: "Training",
    description:
      "Enhance your IT team’s expertise in the latest DevOps trends, tools, and best practices with our Centers of Excellence. Our DevOps consultants and engineers will guide you on adopting the cloud model of your choice, orchestrating containers, or building CI/CD pipelines.",
  },
];
const DevopsProcess = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {devopsProcess?.map((service, index) => (
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

export default DevopsProcess;
