import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import { PageHeaderText } from "../shared";
import { TESTIMONIALS } from "@/lib/constants/Testimonials";

const HomeClientSays = () => {
  return (
    <div className="px-8 md:px-0 md:container mx-auto py-12" data-aos="fade-up">
      <Carousel className="w-full">
        <div
          data-aos="fade-up-left"
          className="flex items-center justify-between gap-4"
        >
          <PageHeaderText label={"What clients say about us"} />
        </div>
        <CarouselContent className="pt-4">
          {TESTIMONIALS.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-4 flex  flex-col md:flex-row items-center justify-between gap-12">
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="flex items-center gap-6 w-full"
                >
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{item.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p>{item.company}</p>
                  </div>
                </div>
                <div
                  data-aos="fade-up-right"
                  data-aos-delay="600"
                  className="text-lg font-semibold w-full"
                >
                  {item.text}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" -left-1 md:-left-12" />
        <CarouselNext className="right-1 md:-right-12" />
      </Carousel>
    </div>
  );
};

export default HomeClientSays;
