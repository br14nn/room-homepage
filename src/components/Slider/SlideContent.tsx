import Image from "next/image";
import Link from "next/link";

type TSlideContentProps = {
  desktopImgLink: any;
  mobileImgLink?: any;
  imgAlt: string;
  title: string;
  description: string;
};

export default function SlideContent({
  desktopImgLink,
  mobileImgLink,
  imgAlt,
  title,
  description,
}: TSlideContentProps) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center bg-white">
      <div className="h-full w-[60%]">
        <Image
          className="h-full w-full object-cover"
          src={desktopImgLink}
          alt={imgAlt}
        />
      </div>
      <div className="flex h-full w-[40%] flex-col gap-6 px-20 py-32">
        <h1 className="text-4xl font-[600] leading-none  tracking-tight text-black">
          {title}
        </h1>
        <p className="font-[500] text-dark-gray">{description}</p>

        <Link
          className="group/shopNowLink flex w-fit flex-row items-center justify-center gap-6 font-[500]"
          href="#"
        >
          <p className="text-lg tracking-[0.5em] group-hover/shopNowLink:text-very-dark-gray">
            SHOP NOW
          </p>
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-black group-hover/shopNowLink:fill-very-dark-gray"
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="#000"
              fillRule="nonzero"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
