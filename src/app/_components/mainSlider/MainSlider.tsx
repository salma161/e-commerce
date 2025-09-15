"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import s1 from "../../../../public/images/slider2.jpg";
import s2 from "../../../../public/images/slider1.jpg";
import s3 from "../../../../public/images/slider3.jpg";
import s4 from "../../../../public/images/slider4.jpg";
import Image from "next/image";
import "swiper/css/pagination";

export default function MainSlider() {
  return (
    <>
      <div className="mt-24 mb-28 border-2 border-gray-200 dark:border-gray-500">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !border-2 !border-white !size-5",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-main-lighter",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <Image
              className="w-full object-cover h-[350px]"
              src={s1}
              alt="mainSlider"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={s2}
              className="w-full object-cover h-[350px]"
              alt="mainSlider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={s3}
              className="w-full object-cover h-[350px]"
              alt="mainSlider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={s4}
              className="w-full object-cover h-[350px]"
              alt="mainSlider"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
