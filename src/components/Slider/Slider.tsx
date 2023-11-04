"use client";

import { nanoid } from "nanoid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SliderButtons from "./SliderButtons";
import SlideContent from "./SlideContent";

type TSliderProps = {
  data: TSliderData[];
};

export default function Slider({ data }: TSliderProps) {
  return (
    <Swiper
      className="relative h-full w-full"
      slidesPerView={1}
      spaceBetween={0}
      modules={[Navigation]}
      allowTouchMove={false}
      loop={true}
    >
      {data.map((room) => (
        <SwiperSlide key={nanoid()}>
          <SlideContent
            desktopImgSrc={room.desktopImgSrc}
            mobileImgSrc={room.mobileImgSrc}
            imgAlt={room.imgAlt}
            title={room.title}
            description={room.description}
          />
        </SwiperSlide>
      ))}

      <SliderButtons />
    </Swiper>
  );
}
