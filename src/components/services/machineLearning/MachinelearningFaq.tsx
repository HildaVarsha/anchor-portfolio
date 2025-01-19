import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/ui";
import Link from "next/link";

const accordionItems = [
  {
    title: "What is an AI proof of concept?",
    content:
      "An AI proof of concept (PoC) is a small-scale initiative aimed at showcasing the feasibility, functionality, and potential value of an AI solution. It acts as a pilot project to verify that the AI model can effectively address specific business challenges before moving to full-scale deployment.",
  },
  {
    title: "What purposes does an AI PoC serve?",
    content:
      "An AI PoC allows organizations to assess the technical viability of a solution, estimate its ROI, and identify any potential obstacles. It provides stakeholders with the insights needed to make informed decisions about scaling the solution, reducing risks, and optimizing resource allocation.",
  },
  {
    title: "What mistakes can an AI PoC help avoid in the future?",
    content:
      "An AI PoC helps prevent costly errors, such as choosing inappropriate algorithms, underestimating data preparation needs, or neglecting infrastructure requirements. It ensures that the solution is aligned with both business objectives and technical capabilities.",
  },
  {
    title: "How can you ensure smooth AI PoC development?",
    content:
      "To ensure a seamless PoC development process, begin with well-defined goals, engage stakeholders from the start, and use high-quality data. Collaborating with skilled AI experts and adopting a flexible, iterative approach will help address challenges effectively.",
  },
];

const MachinelearningFaq = () => {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-0 md:container mx-auto pb-12 text-slate-800">
        <Accordion type="single" collapsible className="w-full pb-6">
          {accordionItems.map(({ title, content }, index) => (
            <AccordionItem
              key={index}
              value={title}
              data-aos="fade-up"
              className="border-b border-[#00000026] py-6"
            >
              <AccordionTrigger className="text-lg font-semibold w-full">
                {title}
              </AccordionTrigger>
              <AccordionContent className="pt-6">{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link href={"/contact-us"} className="pt-6">
          <Button>Tell us about your project</Button>
        </Link>
      </div>
    </div>
  );
};

export default MachinelearningFaq;
