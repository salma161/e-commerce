import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SingleProductDetails({ data }) {
  return (
    <>
      <div className="container w-[80%] mx-auto mt-16 flex items-center">
        <div className="md:w-1/2 lg:w-1/3">
          <div className="images p-4 w-full ms-3">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src={data.images[0]} alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img src={data.images[1]} alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img src={data.images[2]} alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img src={data.images[3]} alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="desc"></div>
        </div>
      </div>
    </>
  );
}
