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
      "An AI proof of concept (PoC) is a small-scale project designed to demonstrate the feasibility, functionality, and potential value of an AI solution. It serves as a test case to validate that the AI model addresses specific business challenges effectively before committing to full-scale implementation.",
  },
  {
    title: "What purposes does an AI PoC serve?",
    content:
      "An AI PoC helps organizations evaluate the technical viability of a solution, estimate ROI, and identify potential roadblocks. It allows stakeholders to make informed decisions about scaling the solution, minimizing risks, and optimizing resource allocation.",
  },
  {
    title: "What mistakes can an AI PoC help avoid further down the road?",
    content:
      "By conducting an AI PoC, you can avoid costly mistakes such as selecting unsuitable algorithms, underestimating data preparation needs, or overlooking infrastructure requirements. It ensures the solution is well-aligned with business goals and technical capabilities.",
  },
  {
    title: "How can you sail through AI PoC development smoothly?",
    content:
      "To ensure smooth PoC development, start with clear objectives, engage stakeholders early, and leverage high-quality data. Partnering with experienced AI experts and maintaining a flexible, iterative approach can also help navigate challenges effectively.",
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
