import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/ui";
import Link from "next/link";
import { PageHeaderText } from "@/components/shared";

const LowCodeFaq = () => {
  const accordionItems = [
    {
      title: "What is low-code development?",
      content:
        "Low-code development is an approach to software development that uses visual interfaces with drag-and-drop functionality and pre-built components. It minimizes the need for manual coding, enabling faster application development and deployment.",
    },
    {
      title: "What are the benefits of low-code development?",
      content:
        "Low-code platforms offer numerous benefits, including accelerated development timelines, reduced costs, improved collaboration between developers and business teams, and the ability to quickly adapt to changing business needs.",
    },
    {
      title: "Who can benefit from low-code development?",
      content:
        "Low-code development is beneficial for businesses of all sizes, especially those looking to build applications quickly. It empowers both professional developers and non-technical users (citizen developers) to contribute to application creation.",
    },
    {
      title: "What types of applications can be built with low-code platforms?",
      content:
        "Low-code platforms can be used to build a variety of applications, including web and mobile apps, workflow automation tools, customer relationship management (CRM) systems, and industry-specific solutions like inventory management systems.",
    },
    {
      title: "What are the limitations of low-code development?",
      content:
        "While low-code platforms are versatile, they may not be suitable for highly complex or performance-intensive applications. Additionally, customization options can be limited compared to traditional coding methods.",
    },
    {
      title: "How secure are applications built with low-code platforms?",
      content:
        "Most reputable low-code platforms prioritize security, offering features like built-in authentication, data encryption, and compliance with industry standards. However, it's essential to follow best practices during development to ensure robust security.",
    },
    {
      title: "Can low-code platforms integrate with existing systems?",
      content:
        "Yes, modern low-code platforms support seamless integration with third-party services, APIs, and legacy systems, enabling businesses to extend and enhance their existing technology stack.",
    },
    {
      title: "What is the difference between low-code and no-code development?",
      content:
        "Low-code platforms are designed for professional developers and allow for custom coding when needed, while no-code platforms are targeted at non-technical users, relying entirely on visual interfaces without any coding required.",
    },
  ];

  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ai-proof-faq.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PageHeaderText
          label="FAQs"
          className="px-4 md:px-0 md:container mx-auto "
        />
      </div>
      <div className="px-4 md:px-0 md:container mx-auto py-12 text-slate-800">
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

export default LowCodeFaq;
