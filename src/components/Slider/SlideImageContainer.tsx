import { twMerge } from "tailwind-merge";

type TSlideImageContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SlideImageContainer({
  className,
  children,
}: TSlideImageContainerProps) {
  return (
    <div
      className={twMerge(
        "h-[65vh] min-h-[400px] w-full md:h-full md:min-h-0 md:w-1/2 lg:w-[60%]",
        className,
      )}
    >
      {children}
    </div>
  );
}
