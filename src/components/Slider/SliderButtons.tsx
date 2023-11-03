import { useSwiper } from "swiper/react";

export default function SliderButtons() {
  const swiper = useSwiper();

  return (
    <>
      <div className="absolute bottom-0 left-[60%] z-[999] flex flex-row items-center justify-center">
        <button
          className="bg-black p-8 text-white hover:bg-very-dark-gray"
          onClick={() => swiper.slidePrev()}
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="bg-black p-8 text-white hover:bg-very-dark-gray"
          onClick={() => swiper.slideNext()}
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
