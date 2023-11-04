import { twMerge } from "tailwind-merge";

type TSlideImageContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SlideImageContainer({
  className,
  children,
}: TSlideImageContainerProps) {
  return <div className={twMerge("h-full w-[60%]", className)}>{children}</div>;
}
