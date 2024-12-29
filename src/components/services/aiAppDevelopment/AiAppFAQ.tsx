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
    title: "How much does it cost to build an AI app?",
    content: "We provide end-to-end solutions for your business needs.",
  },
  {
    title: "How can I discuss my AI app idea with you?",
    content:
      "Our team consists of highly skilled professionals with years of experience.",
  },
  {
    title: "What is your tech stack for AI app development?",
    content: "We ensure high-quality standards in all our deliverables.",
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
