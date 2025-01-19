import { PageHeaderText } from "@/components/shared";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

const MachineSolutions = () => {
  const accordionItems = [
    {
      title: "Financial services",
      content:
        "We provide intelligent ML solutions for fraud detection, risk assessment, algorithmic trading, and customer insights. Streamline operations and enhance decision-making with our custom-built financial tools.",
    },
    {
      title: "Healthcare",
      content:
        "Our ML solutions in healthcare include predictive analytics, personalized patient care, medical imaging analysis, and operational optimization. Enhance patient outcomes and reduce costs with AI-powered innovations.",
    },
    {
      title: "Transportation & Logistics",
      content:
        "Optimize routes, improve fleet management, and enhance supply chain visibility with our ML-driven solutions in transportation and logistics. We help businesses reduce costs and improve operational efficiency.",
    },
    {
      title: "Media & Entertainment",
      content:
        "Leverage ML to deliver personalized content recommendations, automate video and audio editing, analyze viewer preferences, and optimize advertising strategies for a dynamic media landscape.",
    },
    {
      title: "Retail",
      content:
        "Transform the retail experience with ML solutions for demand forecasting, personalized shopping, inventory management, and dynamic pricing. Boost customer engagement and drive sales growth.",
    },
    {
      title: "Education",
      content:
        "Empower educators and learners with intelligent tutoring systems, automated grading, adaptive learning platforms, and sentiment analysis, fostering a personalized and engaging educational environment.",
    },
    {
      title: "Insurance",
      content:
        "Mitigate risks and enhance operations with ML applications in claim fraud detection, underwriting automation, customer retention strategies, and personalized policy recommendations.",
    },
    {
      title: "Automotive",
      content:
        "Drive innovation in the automotive industry with ML-powered autonomous driving systems, predictive maintenance, supply chain optimization, and customer behavior analysis.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ml-solutions.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Custom ML Solutions Designed for{" "}
          <span className="text-amber-400">Your Industry Needs</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400 ">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          As a machine learning services provider with over 230 cross-functional
          experts, we stay ahead of your industry challenges and leverage
          emerging ML opportunities to drive success for your business.
        </p>
      </div>
      <div className="mt-12 px-4 md:px-0 md:p-12 md:container mx-auto text-slate-800 bg-white flex flex-col gap-8">
        <div className="bg-white py-16 text-slate-800">
          <div className="px-4 md:container mx-auto ">
            <Accordion
              type="single"
              collapsible
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16"
            >
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
                  <AccordionContent className="pt-6">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineSolutions;
