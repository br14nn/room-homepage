import { useSwiper } from "swiper/react";

import CustomButton from "./CustomButton";

export default function SliderButtons() {
  const swiper = useSwiper();

  return (
    <>
      <div className="absolute bottom-0 left-[60%] z-[999] flex flex-row items-center justify-center">
        <CustomButton onClick={() => swiper.slidePrev()}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </CustomButton>
        <CustomButton onClick={() => swiper.slideNext()}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </CustomButton>
      </div>
    </>
  );
}
