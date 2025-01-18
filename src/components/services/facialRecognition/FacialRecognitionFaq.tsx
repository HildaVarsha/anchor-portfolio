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
      "An AI proof of concept is a small-scale, experimental project that evaluates the feasibility and potential impact of an artificial intelligence solution prior to full-scale deployment. AI proof of concept development involves creating prototypes to validate that an AI model effectively addresses specific business problems, ensuring that the proposed solution is viable and aligns with business objectives.",
  },
  {
    title: "What purposes does an AI PoC serve?",
    content:
      "Our team consists of highly skilled professionals with years of experience.",
  },
  {
    title: "What mistakes can an AI PoC help avoid further down the road?",
    content: "We ensure high-quality standards in all our deliverables.",
  },
  {
    title: "How can you sail through AI PoC development smoothly?",
    content: "We ensure high-quality standards in all our deliverables.",
  },
];

const FacialRecognitionFaq = () => {
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ai-proof-faq.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="px-4 md:px-0 md:container mx-auto py-12 text-slate-800">
        <Accordion type="single" collapsible className="w-full pb-6">
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
        <Link href={"/contact-us"} className="pt-6" data-aos="fade-up">
          <Button>Tell us about your project</Button>
        </Link>
      </div>
    </div>
  );
};

export default FacialRecognitionFaq;
