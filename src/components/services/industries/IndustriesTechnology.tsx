import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Digital Marketing",
    description: `
      Our tailored digital marketing strategies are designed to capture
      your audience's attention, enhance your brand presence, and drive
      measurable growth. From compelling content creation to targeted
      campaigns, we offer end-to-end solutions that inspire action and
      deliver results.
    `,
  },
  {
    title: "Software Development and Re-Development",
    description: `
      We create resilient, flexible, and scalable software architectures,
      choosing the ideal tech stacks to bring them to life—all while
      aligning with your strategic vision, business goals, and available
      resources.
    `,
  },
  {
    title: "Web Development & Re-Designing",
    description: `
      With our technology consulting services, you can pivot to new
      technology rapidly and at minimal risks while getting the most out
      of your legacy systems and fully capitalizing on your tech investments.
    `,
  },
  {
    title: "Designing",
    description: `
      These industry-leading design tools offer a wide range of creative
      possibilities, from image editing and graphic design to vector art
      and layout creation. Whether you're designing for print, web, or
      mobile, they provide the flexibility and precision needed for any
      project. Each tool caters to unique design needs, empowering creators
      at all skill levels.
    `,
  },
  {
    title: "App Development",
    description: `
      If you're currently working on an app, you'll need to decide what
      kind of app you want to produce. There will be some features that
      are best for one sort of software but not for another.
    `,
  },
  {
    title: "Hosting Service",
    description: `
      Partner with us for reliable, high-performance hosting solutions
      that scale with your business needs. From secure cloud hosting to
      dedicated server options, we ensure seamless connectivity and robust
      uptime. Let us handle the technical complexities so you can focus
      on growth and innovation.
    `,
  },
];

const IndustriesTechnology = () => {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-0 md:container mx-auto py-16 text-slate-800 grid grid-cols-1 md:grid-cols-3 gap-12">
        {industries.map((industry, index) => (
          <div key={index} data-aos="fade-up">
            <p className="font-semibold text-3xl pb-4" data-aos="fade-up">
              {industry.title}
            </p>
            <p className="py-4" data-aos="fade-up">
              {industry.description}
            </p>
          </div>
        ))}
        <Link href={"/contact-us"}>
          <Button className="w-fit" data-aos="fade-up">
            Talk to tech consultants <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IndustriesTechnology;
