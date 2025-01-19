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
    title: "Comprehensive services",
    content: "We offer complete solutions to address all your business needs.",
  },
  {
    title: "Expert professionals",
    content: "Our team is composed of highly experienced and skilled experts.",
  },
  {
    title: "Excellence in quality",
    content: "We uphold strict quality standards across all our deliverables.",
  },
  {
    title: "Adaptability",
    content: "We quickly adjust to meet evolving business demands.",
  },
  {
    title: "Creative solutions",
    content: "We prioritize innovation to stay ahead in the market.",
  },
  {
    title: "Maximum flexibility",
    content:
      "We provide customized approaches that cater to your unique requirements.",
  },
];

const AboutWorkWithUs = () => {
  return (
    <div className="bg-amber-300 py-12 text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText label="Why work with us" className="text-slate-800" />
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

export default AboutWorkWithUs;
