import React from "react";
import { PageHeaderText } from "../shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HomeLatestTechnology = () => {
  const technologies = [
    {
      src: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI-Powered Data Analytics",
      description:
        "Leverage AI-driven tools to analyze vast amounts of business data, uncover actionable insights, and optimize decision-making processes.",
    },
    {
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI in Cybersecurity",
      description:
        "Advanced AI systems that detect and prevent cybersecurity threats in real-time, safeguarding sensitive data and infrastructure.",
    },
    {
      src: "https://images.pexels.com/photos/260581/pexels-photo-260581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cloud-Based AI Solutions",
      description:
        "Scalable cloud-based AI platforms designed to integrate seamlessly with IT infrastructures, providing cost-efficient and high-performance solutions.",
    },
    {
      src: "https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI-Driven DevOps Automation",
      description:
        "Automate IT operations with AI, ensuring faster deployments, real-time monitoring, and reduced downtime for critical systems.",
    },
  ];

  return (
    <div
      className="bg-white py-12"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
    >
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div data-aos="fade-up">
          <PageHeaderText
            label={"Latest Technologies"}
            className="text-slate-800"
          />
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {technologies?.map((tech, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
                <div
                  data-aos-delay={(index + 1) * 200}
                  data-aos="fade-up"
                  className="p-1 w-full group"
                >
                  <Image
                    src={tech.src}
                    alt={tech.title}
                    width={400}
                    height={400}
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <p
                    data-aos="fade-up"
                    className="py-4 font-semibold text-gray-700"
                  >
                    {tech.title}
                  </p>
                  <p data-aos="fade-up" className="text-gray-500">
                    {tech.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            data-aos="fade-left"
            className="bg-green-500 w-12 h-12 text-white top-32 left-4"
          />
          <CarouselNext
            data-aos="fade-right"
            className="bg-green-500  w-12 h-12 text-white top-32 right-4"
          />
        </Carousel>
        <div
          data-aos="flip-down"
          data-aos-delay="800"
          className="flex items-center justify-center mt-4"
        >
          <Link href={"/contact-us"}>
            <Button>
              Start your innovation journey{" "}
              <MoveRight data-aos="fade-right" data-aos-delay="500" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestTechnology;
