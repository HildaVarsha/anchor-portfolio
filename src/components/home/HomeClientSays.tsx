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
    <div className="px-8 lg:px-0 lg:container mx-auto py-12" data-aos="fade-up">
      <Carousel className="w-full">
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-4"
        >
          <PageHeaderText label={"What clients say about us"} />
        </div>
        <CarouselContent className="pt-4">
          {TESTIMONIALS.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-4 flex  flex-col lg:flex-row items-center justify-between gap-12">
                <div
                  data-aos="fade-up"
                  className="flex items-center gap-6 w-full"
                >
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback data-aos="fade-up">
                      {item.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm" data-aos="fade-up">
                      {item.name}
                    </p>
                    <p data-aos="fade-up">{item.company}</p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="text-lg font-semibold w-full"
                >
                  {item.text}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious data-aos="fade-up" className=" -left-1 lg:-left-12" />
        <CarouselNext data-aos="fade-up" className="right-1 lg:-right-12" />
      </Carousel>
    </div>
  );
};

export default HomeClientSays;
