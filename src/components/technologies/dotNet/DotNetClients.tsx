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
} from "../../ui";
import { PageHeaderText } from "../../shared";

const DotNetClients = () => {
  return (
    <div className="bg-white">
      <PageHeaderText
        label={"Our Clients"}
        className="text-slate-800 px-4 lg:px-0 lg:container mx-auto"
      />

      <div className="px-8 lg:px-0  py-12 bg-black">
        {" "}
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent className="bg-black py-12 " data-aos="fade-up">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} data-aos="fade-up">
                <div className="p-4 flex  flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="flex items-center gap-6 w-full">
                    <Avatar data-aos="fade-up">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-amber-600" data-aos="fade-up">
                        Ashley Lewis
                      </p>
                      <p className="text-sm text-amber-600" data-aos="fade-up">
                        Director of Product Management Dollar Shave Club
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-2xl font-semibold w-full"
                    data-aos="fade-up"
                  >
                    Anchor Informatics Ltd is an outstanding partner. They
                    don&apos;t even feel like a contractor, but more like a
                    fully integrated team.”
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className=" -left-1 lg:-left-12"
            data-aos="fade-up"
          />
          <CarouselNext className="right-1 lg:-right-12" data-aos="fade-up" />
        </Carousel>
      </div>
    </div>
  );
};

export default DotNetClients;
