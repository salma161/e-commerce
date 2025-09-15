"use client";
import React from "react";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function CategoriesSwipper({ data }) {
  
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={7}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {data.map((category) => (
          <SwiperSlide key={category._id}>
            <Image
              src={category.image}
              alt="category"
              className="object-cover w-full h-[150px]"
              width={500}
              height={500}
            />
            <p className="text-center  text-gray-600 mt-3">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
