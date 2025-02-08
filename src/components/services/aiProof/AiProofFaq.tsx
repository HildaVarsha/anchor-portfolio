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
      "An AI proof of concept (PoC) is a small-scale, experimental project designed to evaluate the feasibility and potential impact of an AI solution before its full-scale deployment. The process involves creating prototypes to validate that the AI model effectively addresses specific business problems. By testing the concept in a controlled environment, businesses can determine whether the proposed AI solution aligns with their objectives and is viable in real-world scenarios.",
  },
  {
    title: "What purposes does an AI PoC serve?",
    content:
      "An AI PoC serves several important purposes: it allows businesses to assess the feasibility of AI solutions, identify potential challenges, and test their impact on business goals. Additionally, it helps in building stakeholder confidence by demonstrating the viability of the AI solution, reducing risks before committing to large-scale implementation.",
  },
  {
    title: "What mistakes can an AI PoC help avoid further down the road?",
    content:
      "An AI PoC helps businesses avoid costly mistakes by validating the solution before full-scale implementation. It reduces the risk of misalignment with business objectives, ensures the right data is being used, and uncovers potential performance or technical issues. By testing the AI model early, businesses can avoid wasting resources on ineffective solutions.",
  },
  {
    title: "How can you sail through AI PoC development smoothly?",
    content:
      "To ensure smooth AI PoC development, it's crucial to clearly define objectives, set realistic success metrics, and collaborate closely with experienced AI developers. An effective PoC requires careful planning, a solid data strategy, and consistent testing to align the AI solution with business goals. Continuous feedback from stakeholders and a phased approach to testing can help ensure that the AI model delivers the expected results.",
  },
];

const AiProofFaq = () => {
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

export default AiProofFaq;
