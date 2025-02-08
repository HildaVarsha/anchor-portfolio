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
      "An AI proof of concept is a small-scale, experimental project designed to evaluate the feasibility and potential impact of an artificial intelligence solution before full-scale deployment. It involves creating prototypes to confirm that an AI model addresses specific business problems effectively, ensuring the solution is viable and aligns with business goals.",
  },
  {
    title: "What purposes does an AI PoC serve?",
    content:
      "Our team comprises highly skilled professionals with years of experience, dedicated to ensuring the success of AI PoC implementations.",
  },
  {
    title: "What mistakes can an AI PoC help avoid in the future?",
    content:
      "We uphold high-quality standards in all our deliverables, preventing costly mistakes in your AI journey.",
  },
  {
    title: "How can you sail through AI PoC development smoothly?",
    content:
      "We ensure high-quality standards in all our deliverables, helping you navigate AI PoC development with ease.",
  },
];

const NlpFaq = () => {
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
      <div className="px-4 lg:px-0 lg:container mx-auto py-12 text-slate-800">
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

export default NlpFaq;
