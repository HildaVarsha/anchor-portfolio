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

const HomeLatestThinkings = () => {
  const technologies = [
    {
      src: "https://images.pexels.com/photos/5155361/pexels-photo-5155361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "What are AI agents, and how do you implement them?",
      description:
        "Learn what AI agents are, what they can do for healthcare, finance, and other fields, and how ITRex can help you implement one.",
    },
    {
      src: "https://images.pexels.com/photos/18069693/pexels-photo-18069693/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title:
        "Generative AI in business: top 5 use cases every company should consider",
      description:
        "Looking to make generative AI part of your company’s tech stack? Discover these promising generative AI applications in business to get inspired!",
    },
    {
      src: "https://images.pexels.com/photos/19319639/pexels-photo-19319639/free-photo-of-boston-dynamics-robot-in-a-car-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title:
        "Generative AI in banking: promising use cases and potential hurdles",
      description:
        "Generative AI is set to change the traditional banking paradigm. Learn about how banks can transform their operations with Gen AI.",
    },
    {
      src: "https://images.pexels.com/photos/17485741/pexels-photo-17485741/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-benefits-and-flaws-of-large-language-models-it-was-created-by-tim-west-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "How to implement AI in your organization: the definitive guide",
      description:
        "How to implement AI in your business and achieve a substantial return on your artificial intelligence investments?",
    },
  ];

  return (
    <div
      className="bg-white py-12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div data-aos="flip-down">
          <PageHeaderText
            label={"Latest Thinkings"}
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
                  // data-aos-delay={(index + 1) * 200}
                  data-aos="zoom-out"
                  className="p-1 w-full"
                >
                  <Image
                    data-aos="zoom-in"
                    src={tech.src}
                    alt={tech.title}
                    width={400}
                    height={400}
                    className="max-h-72 oject-contain"
                  />
                  <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="py-3 font-semibold text-gray-700"
                  >
                    {tech.title}
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-gray-500"
                  >
                    {tech.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            data-aos="fade-left"
            className="bg-blue-600 w-12 h-12 text-white top-32 left-4"
          />
          <CarouselNext
            data-aos="fade-right"
            className="bg-blue-600  w-12 h-12 text-white top-32 right-4"
          />
        </Carousel>
        <div
          data-aos="flip-down"
          data-aos-delay="800"
          className="flex items-center justify-center mt-4"
        >
          <Button>
            Start your innovation journey{" "}
            <MoveRight data-aos="fade-right" data-aos-delay="500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestThinkings;
