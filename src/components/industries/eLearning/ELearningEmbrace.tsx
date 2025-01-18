import { ServicesCard } from "@/components/componentShared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import React from "react";

const accordionItems = [
  {
    title: "Full-cycle services",
    content: "We provide end-to-end solutions for your business needs.",
  },
  {
    title: "Top expertise",
    content:
      "Our team consists of highly skilled professionals with years of experience.",
  },
  {
    title: "Quality management",
    content: "We ensure high-quality standards in all our deliverables.",
  },
  {
    title: "Agility",
    content: "We adapt quickly to meet changing business requirements.",
  },
  {
    title: "Innovation",
    content: "We focus on innovative solutions to stay ahead in the industry.",
  },
  {
    title: "Utmost flexibility",
    content: "We offer flexible approaches tailored to your specific needs.",
  },
];
const ELearningEmbrace = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/e-learning-embrace.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Embracing the possibilities
          <span className="text-amber-400 pl-2">
            of educational technology to the fullest
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We design feature-rich educational software solutions that help
          learners hone essential skills faster, bring a human touch to online
          learning, boost educational content delivery, and enhance the learner
          experience.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800 py-12">
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map(({ title, content }, index) => (
            <AccordionItem
              key={index}
              value={title}
              data-aos="fade-up"
              className="border-b border-[#00000026] py-6"
            >
              <AccordionTrigger
                className="text-lg font-semibold w-full"
                data-aos="fade-up"
              >
                {title}
              </AccordionTrigger>
              <AccordionContent className="pt-6" data-aos="fade-up">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ELearningEmbrace;
