import { ServicesCard } from "@/components/componentShared";
import React from "react";
const services = [
  {
    title: "Cross-platform mobile applications",
    description:
      "Anchor Informatics Ltd helps clients develop low-code solutions using FlutterFlow. By utilizing the platform's pre-built widgets, templates, and backend integration tools, we build fully functional cross-platform mobile applications, providing a solid foundation for custom development.",
  },
  {
    title: "Web applications",
    description:
      "Anchor Informatics Ltd will help you develop no-code and low-code web solutions using Retool and Bubble.io. Retool is the perfect low-code solution for creating internal applications and business tools that require seamless integration and customization.",
  },
  {
    title: "Workflow automation solutions",
    description:
      "Our offering includes AirOps-powered low-code workflow automation solutions. With the platform’s drag-and-drop development interface, pre-built integrations with services like Google Workspace and Slack, along with conditional logic and reporting features, Anchor Informatics Ltd creates custom workflows that scale seamlessly with your business.",
  },
];
const LowCodeTypes = () => {
  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Types of low-code solutions
          <span className="text-green-500 px-2">we create</span>
        </p>
      </div>
      <div className="bg-white pt-16 text-slate-800">
        <div className="md:container mx-auto px-4">
          <p data-aos="fade-up">
            We leverage secure, efficient, and feature-rich low-code and no-code
            development solutions—complete with integrated backends,
            preconfigured modules, and drag-and-drop UI design tools—to create
            enterprise-grade software at a fraction of the cost of traditional
            custom development.
          </p>
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowCodeTypes;
