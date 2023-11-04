import { twMerge } from "tailwind-merge";

type TSlideDescriptionContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SlideDescriptionContainer({
  className,
  children,
}: TSlideDescriptionContainerProps) {
  return (
    <div
      className={twMerge(
        "lg:py-18 flex h-[65vh] min-h-[400px] w-full flex-col gap-4 px-6 py-12 md:h-full md:min-h-0 md:w-1/2 lg:w-[40%] lg:px-12 xl:gap-6 2xl:px-20 2xl:py-32",
        className,
      )}
    >
      {children}
    </div>
  );
}
