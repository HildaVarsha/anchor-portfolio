import { PageHeaderText } from "@/components/shared";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

const accordionItems = [
  {
    title: "What is the cost of developing an AI app?",
    content:
      "We offer comprehensive solutions tailored to your business requirements.",
  },
  {
    title: "How can I share my AI app idea with your team?",
    content:
      "Our team is made up of highly experienced professionals with years of expertise in the field.",
  },
  {
    title: "What technologies do you use for AI app development?",
    content: "We maintain high-quality standards in all our deliverables.",
  },
];

const AiAppFAQ = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 md:container mx-auto">
        <PageHeaderText label="FAQ about Anchorinformatics AI app development services" />
        <div className="pt-6">
          <Accordion type="single" collapsible className="w-full ">
            {accordionItems.map(({ title, content }, index) => (
              <AccordionItem
                key={index}
                value={title}
                className="border-b border-[#00000026] py-6"
                data-aos="fade-up"
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
    </div>
  );
};

export default AiAppFAQ;
