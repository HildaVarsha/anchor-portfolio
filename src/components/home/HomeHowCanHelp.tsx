import React from "react";
import { PageHeaderText } from "../shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "../ui";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const services = [
  {
    id: 1,
    imageSrc: "/help-web-dev.png",
    title: "Web Development and Redesigning",
    description:
      "Enhance your online presence with tailored web development and redesigning services. We ensure your website is modern, responsive, and optimized for user engagement.",
  },
  {
    id: 2,
    imageSrc: "/help-design.png",
    title: "Designing",
    description:
      "Create impactful designs that resonate with your brand. From UI/UX to graphic design, we deliver visually stunning and user-friendly solutions.",
  },
  {
    id: 3,
    imageSrc: "/help-digital.png",
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and engagement with our digital marketing strategies. We specialize in SEO, social media marketing, and content creation.",
  },
  {
    id: 4,
    imageSrc: "/help-re-dev.png",
    title: "Software Development and Redevelopment",
    description:
      "Develop or upgrade software solutions tailored to your needs. Our expertise ensures reliable, scalable, and efficient software products.",
  },
  {
    id: 5,
    imageSrc: "/help-hosting.png",
    title: "Hosting Service",
    description:
      "Enjoy secure and reliable hosting services to keep your website running smoothly with minimal downtime.",
  },
  {
    id: 6,
    imageSrc: "/help-app.png",
    title: "App Development",
    description:
      "Bring your app ideas to life with our end-to-end app development services, ensuring functionality, performance, and user satisfaction.",
  },
];

const HomeHowCanHelp = () => {
  return (
    <div className="bg-amber-400 py-12" data-aos="fade-up">
      <div className="px-4 md:px-0 md:container mx-auto text-slate-900">
        <PageHeaderText
          label="How we can help you"
          className="text-slate-800"
        />
        {services.map((service, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 200}
            key={service.id}
            className={`${
              index === 0 ? "border-y" : "border-b"
            } border-[#00000026] flex flex-col md:flex-row justify-between w-full py-4`}
          >
            <div className="w-full mb-4 md:mb-0">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={50}
                height={38}
                data-aos="fade-left"
                className=""
              />
            </div>
            <div data-aos="fade-right" className="w-full flex gap-8">
              <p>{service.id < 10 ? `0${service.id}.` : `${service.id}.`}</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${service.id}`}>
                  <AccordionTrigger className="text-lg font-semibold w-full">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-6">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ))}
        <div data-aos="flip-down" data-aos-delay="400" className="mt-8">
          <Link href={"/contact-us"}>
            <Button>
              Discuss my project
              <MoveRight data-aos="fade-right" data-aos-delay="400" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHowCanHelp;
