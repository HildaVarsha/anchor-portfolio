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

const HomeLatestTechnology = () => {
  const technologies = [
    {
      src: "https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI-powered Retail Solutions",
      description:
        "A cutting-edge AI system delivering seamless integration and data aggregation, enabling a global retailer to process 13 million requests daily and make informed decisions efficiently.",
    },
    {
      src: "https://images.pexels.com/photos/17486102/pexels-photo-17486102/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-artificial-general-intelligence-or-agi-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "General AI Innovations",
      description:
        "Empowering businesses with advanced AGI technologies designed to tackle versatile challenges, ensuring efficiency and scalability in their operations.",
    },
    {
      src: "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Neural Network Excellence",
      description:
        "Leveraging neural network technologies inspired by human cognition to deliver intelligent and adaptive solutions tailored for deep learning applications.",
    },
    {
      src: "https://images.pexels.com/photos/17483869/pexels-photo-17483869/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI in Neuroscience",
      description:
        "Pioneering machine learning solutions influenced by neuroscience principles, providing groundbreaking insights and capabilities.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-slate-800">
        <PageHeaderText
          label={"Latest Technologies"}
          className="text-slate-800"
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {technologies?.map((tech, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
                <div className="p-1 w-full">
                  <Image
                    src={tech.src}
                    alt={tech.title}
                    width={400}
                    height={400}
                  />
                  <p className="py-3 font-semibold text-gray-700">
                    {tech.title}
                  </p>
                  <p className="text-gray-500">{tech.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-blue-600 w-12 h-12 text-white top-32 left-4" />
          <CarouselNext className="bg-blue-600  w-12 h-12 text-white top-32 right-4" />
        </Carousel>
        <div className="flex items-center justify-center mt-4">
          <Button>Start your innovation journey</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestTechnology;
