import Image from "next/image";
import Link from "next/link";

import SlideImageContainer from "./SlideImageContainer";
import SlideDescriptionContainer from "./SlideDescriptionContainer";
import ShopNowLink from "./ShopNowLink";

type TSlideContentProps = {
  desktopImgSrc: any;
  mobileImgSrc?: any;
  imgAlt: string;
  title: string;
  description: string;
};

export default function SlideContent({
  desktopImgSrc,
  mobileImgSrc,
  imgAlt,
  title,
  description,
}: TSlideContentProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white md:flex-row">
      <SlideImageContainer>
        <Image
          className="block h-full w-full object-cover"
          src={desktopImgSrc}
          alt={imgAlt}
        />
      </SlideImageContainer>
      <SlideDescriptionContainer>
        <h1 className="text-2xl font-[600] leading-none tracking-tight text-black xs:text-3xl 2xl:text-4xl">
          {title}
        </h1>

        <p className="text-sm font-[500] leading-snug text-dark-gray xs:text-base">
          {description}
        </p>

        <ShopNowLink />
      </SlideDescriptionContainer>
    </div>
  );
}
