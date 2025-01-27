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
    title: "Web Development and Redesign",
    description:
      "Elevate your online presence with our custom web development and redesign services. We ensure your website is up-to-date, responsive, and optimized for a great user experience.",
  },
  {
    id: 2,
    imageSrc: "/help-design.png",
    title: "Creative Design Services",
    description:
      "Craft powerful designs that reflect your brand identity. From UI/UX design to graphic design, we offer visually appealing and intuitive solutions.",
  },
  {
    id: 3,
    imageSrc: "/help-digital.png",
    title: "Online Marketing Solutions",
    description:
      "Increase your brand’s visibility and interaction through our digital marketing strategies. We specialize in SEO, social media marketing, and content development.",
  },
  {
    id: 4,
    imageSrc: "/help-re-dev.png",
    title: "Software Development and Updates",
    description:
      "Create or enhance software solutions tailored to your specific requirements. Our team ensures the development of reliable, scalable, and high-performance software products.",
  },
  {
    id: 5,
    imageSrc: "/help-hosting.png",
    title: "Reliable Hosting Solutions",
    description:
      "Experience dependable and secure hosting services designed to keep your website running efficiently with minimal downtime.",
  },
  {
    id: 6,
    imageSrc: "/help-app.png",
    title: "Mobile App Development",
    description:
      "Transform your app concepts into reality with our comprehensive app development services, focusing on performance, usability, and user satisfaction.",
  },
];

const HomeHowCanHelp = () => {
  return (
    <div className="bg-lime-500 py-12" data-aos="fade-up">
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
            {/* Image with Animation */}
            <div className="w-full mb-4 md:mb-0 image-draw-container">
              <div className="image-mask">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={50}
                  height={38}
                  className="image-draw"
                />
              </div>
            </div>

            <div data-aos="fade-up" className="w-full flex gap-8">
              <p>{service.id < 10 ? `0${service.id}.` : `${service.id}.`}</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${service.id}`}>
                  <AccordionTrigger
                    className="text-lg font-semibold w-full"
                    data-aos="fade-up"
                  >
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-6" data-aos="fade-up">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ))}
        <div data-aos="fade-up" className="mt-8">
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
