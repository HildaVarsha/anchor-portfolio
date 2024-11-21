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

const HomeClientSays = () => {
  return (
    <div className="px-8 md:px-0 md:container mx-auto py-12">
      <Carousel className="w-full">
        <div className="flex items-center justify-between gap-4">
          <PageHeaderText label={"What clients say about us"} />
        </div>
        <CarouselContent className="pt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-4 flex  flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex items-center gap-6 w-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">Jeff Block</p>
                    <p>VP of Process and Technology PotentiaMetrics, Inc.</p>
                  </div>
                </div>
                <div className="text-lg font-semibold w-full">
                  Working with Anchor Informatics was a transformative
                  experience for our organization. Their team of professionals
                  brought unmatched expertise to the table, turning our
                  challenges into opportunities for growth. From the first
                  meeting to the project handoff, they demonstrated a deep
                  understanding of our requirements and provided innovative
                  solutions tailored to our needs. The software development
                  services they delivered were nothing short of exceptional,
                  ensuring that our platform was robust, scalable, and
                  future-proof. Their attention to detail and commitment to
                  quality stood out throughout the process.
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
