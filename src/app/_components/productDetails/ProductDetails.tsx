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
      <div className="flex flex-wrap mt-28 dark:text-white">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="images p-4 ms-3">
            <Carousel>
              <CarouselContent>
                {data.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={data.images[index]} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 ">
          <div className="desc px-16 py-5">
            <h1 className="text-2xl dark:text-white text-gray-900 font-semibold mb-3.5">
              {data.title}
            </h1>
            <div className="mb-3.5">
              <span className="text-sm text-gray-600 dark:text-gray-200 ">
                <i className="fa-solid fa-star text-yellow-500 me-1 text-[13px]"></i>
                {data.ratingsAverage}
              </span>
              <span className="text-sm ms-1 text-gray-600 dark:text-gray-200">
                ({data.ratingsQuantity})
              </span>
            </div>
            <h3 className="text-2xl text-main-dark dark:text-main-lighter mb-5">
              {data.price} EGP
            </h3>
            <h2 className="text-gray-400 mb-3.5">{data.category.name}</h2>
            <p className="w-full mb-5">{data.description}</p>
            <button
              type="button"
              className="cursor-pointer text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
