import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import { title } from "process";
import HireButton from "./HireButton";
const angularServices = [
  {
    title: "Full-Cycle Angular App Development",
    description:
      "From enterprise systems to industry-specific solutions, we can handle all your Angular development needs. With over 13 years of experience, we specialize in connecting Angular frontends to microservices or RESTful APIs and providing custom backend development.",
  },
  {
    title: "Angular Web Development",
    description:
      "We develop clean, tested, and well-documented Angular web applications using TypeScript/JavaScript, HTML, and CSS, tailored to your project goals. From fast SPAs to lightweight, platform-independent PWAs, our Angular solutions deliver advanced functionality and stunning UI/UX, designed to scale with your business.",
  },
  {
    title: "Cross-Platform Angular Mobile Development",
    description:
      "Looking for an Angular development company experienced in look and feel? You are in the right place. Combining Angular with Ionic or NativeScript, we blend the mobile and web worlds to create impressive experiences that get you results",
  },
  {
    title: "Enterprise Angular Apps",
    description:
      "Leverage our cross-industry expertise in building large-scale enterprise applications with Angular. Our enterprise-grade Angular solutions are robust, scalable, and designed to enhance efficiency while aligning with your business strategy. We know how to harness Angular's full potential to deliver maximum value for your business.",
  },
  {
    title: "Modernization",
    description:
      "Use our full-stack Angular development services to seamlessly capabilities or migrating to a newer version. Our Angular development company excels at complex projects. We will be happy to help you accelerate your digital transformation by boosting your app performance or security",
  },
  {
    title: "Maintenance & Support",
    description:
      "Let us handle your Angular app's maintenance and upgrades while you focus on your business. Whether the application is built by us or another team, we ensure improved productivity and usability. Need to fix an issue? We’ve successfully resolved complex Angular challenges across various domains and are ready to help.",
  },
];
const AngularServices = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Our Angular development services — What we can do" />
        <p className="py-4 text-lg">
          With an agile mindset and a business-driven approach, our skilled
          Angular developers can bring your ideas to life using Angular`&apos;`s
          robust ecosystem of libraries and tools. Elevate your business with a
          high-performance Angular application optimized for speed and
          scalability. We offer end-to-end Angular development services for both
          startups and enterprises across various industries.
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {angularServices.map((service, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <HireButton />
      </div>
    </div>
  );
};

export default AngularServices;
