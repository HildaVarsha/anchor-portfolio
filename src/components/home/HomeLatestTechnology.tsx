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

const HomeLatestTechnology = () => {
  const technologies = [
    {
      src: "https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI-Driven Retail Solutions",
      description:
        "An advanced AI system that seamlessly integrates and aggregates data, enabling global retailers to handle 13 million daily requests and make efficient, data-driven decisions.",
    },
    {
      src: "https://images.pexels.com/photos/17486102/pexels-photo-17486102/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-artificial-general-intelligence-or-agi-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Innovations in General AI",
      description:
        "Equipping businesses with cutting-edge AGI technologies designed to solve a wide range of challenges, ensuring scalable and efficient operations.",
    },
    {
      src: "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Excellence in Neural Networks",
      description:
        "Harnessing the power of neural network technologies, inspired by human cognitive processes, to deliver adaptive, intelligent solutions for deep learning applications.",
    },
    {
      src: "https://images.pexels.com/photos/17483869/pexels-photo-17483869/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "AI and Neuroscience Integration",
      description:
        "Developing pioneering machine learning solutions based on neuroscience principles, offering innovative insights and advanced capabilities.",
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
                  className="p-1 w-full"
                >
                  <Image
                    src={tech.src}
                    alt={tech.title}
                    width={400}
                    height={400}
                  />
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

export default HomeLatestTechnology;
