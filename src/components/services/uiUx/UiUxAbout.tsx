import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import { title } from "process";
import React from "react";
const services = [
  {
    title: "User Research",
    description:
      "Our human-centered UI/UX design process starts with comprehensive user research. We collaborate closely with internal and external stakeholders to define your software product's functional and non-functional requirements,   conduct competitor analysis, and develop low-fidelity prototypes.",
  },
  {
    title: "Prototyping",
    description:
      "To validate the insights from the previous stage, our UI/UX design team develops high-fidelity prototypes using trusted tools. These prototypes are refined through multiple iterations to ensure they perfectly align with your requirements and your customers’ expectations.",
  },
  {
    title: "UX Design",
    description:
      "Our UX design services encompass crafting customer journey maps, user flows, and diagrams to analyze how and in what context users interact with UI elements, ensuring alignment with the solution's key features. Additionally, we assist in developing detailed design guidelines to enhance and solidify your brand identity.",
  },
  {
    title: "UI design",
    description:
      "Anchor Informatics Ltd provides a comprehensive range of UI design services, covering everything from typography and color schemes to layouts, UI elements, and custom imagery—handling it all with expertise. Our UI/UX specialists work closely with software engineers to deliver solutions tailored to your requirements, within budget, and optimized to speed up your time to market.",
  },
  {
    title: "UI/UX audit and consulting",
    description:
      "At our UI/UX design company, we see user experience as essential to successful customer acquisition and retention. To help you enhance yours, we provide expert UI/UX audit and consulting services, including usability evaluations of your software, buyer journey analysis, A/B testing before app redesigns or functionality updates, and more!",
  },
  {
    title: "Usability testing",
    description:
      "Throughout the project, we recommend leveraging our usability testing services to observe how target customer segments engage with your apps in real-world scenarios. These insights help simplify the digital customer journey by eliminating unnecessary steps, allowing users to achieve their goals more efficiently.",
  },
];

const UiUxAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Next-Level UI/UX Design Services That Drive Success" />
        <p data-aos="fade-up">
          If you’re a startup gearing up to launch a new product, collaborating
          with our UI/UX design company is a strategic choice. Here’s how we can
          help craft your brand’s story, set it apart from the competition, and
          build meaningful, lasting relationships with your clients:
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
  );
};

export default UiUxAbout;
