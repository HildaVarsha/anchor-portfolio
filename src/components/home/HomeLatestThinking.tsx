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

const HomeLatestThinkings = () => {
  const technologies = [
    {
      src: "https://images.pexels.com/photos/5155361/pexels-photo-5155361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "What Are AI Agents and How to Implement Them?",
      description:
        "Discover what AI agents are, how they can revolutionize industries like healthcare and finance, and how ITRex can assist you in deploying them effectively.",
    },
    {
      src: "https://images.pexels.com/photos/18069693/pexels-photo-18069693/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Generative AI in Business: Top 5 Use Cases to Explore",
      description:
        "Interested in incorporating generative AI into your business? Explore these top AI applications to inspire your next technological breakthrough.",
    },
    {
      src: "https://images.pexels.com/photos/19319639/pexels-photo-19319639/free-photo-of-boston-dynamics-robot-in-a-car-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Generative AI in Banking: Key Applications and Challenges",
      description:
        "Generative AI is poised to transform the banking industry. Learn how financial institutions can adopt AI to optimize operations and overcome challenges.",
    },
    {
      src: "https://images.pexels.com/photos/17485741/pexels-photo-17485741/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-benefits-and-flaws-of-large-language-models-it-was-created-by-tim-west-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "How to Implement AI in Your Organization: A Comprehensive Guide",
      description:
        "Looking to integrate AI into your business and maximize ROI? This guide will show you the steps to successfully implement AI and harness its full potential.",
    },
  ];

  return (
    <div className="bg-white py-12" data-aos="fade-up">
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div data-aos="fade-up">
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
                <div data-aos="fade-up" className="p-1 w-full">
                  <div className="group">
                    <Image
                      src={tech.src}
                      alt={tech.title}
                      width={400}
                      height={400}
                      className="max-h-72 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <p
                    data-aos="fade-up"
                    className="py-3 font-semibold text-gray-700"
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
            className="bg-lime-500 w-12 h-12 text-white top-32 left-4"
          />
          <CarouselNext
            data-aos="fade-right"
            className="bg-lime-500  w-12 h-12 text-white top-32 right-4"
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

export default HomeLatestThinkings;
