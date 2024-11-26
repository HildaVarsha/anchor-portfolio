import React from "react";
import { PageHeaderText } from "../shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

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

const AboutWorkWithUs = () => {
  return (
    <div className="bg-amber-300 py-12 text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText label="Why work with us" className="text-slate-800" />
        <Accordion type="single" collapsible className="w-full ">
          {accordionItems.map(({ title, content }, index) => (
            <AccordionItem
              key={index}
              value={title}
              className="border-b border-[#00000026] py-6"
            >
              <AccordionTrigger className="text-lg font-semibold w-full">
                {title}
              </AccordionTrigger>
              <AccordionContent className="pt-6">{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AboutWorkWithUs;
