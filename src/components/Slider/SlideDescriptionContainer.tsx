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
        "flex h-full w-[40%] flex-col gap-6 px-16 py-20 2xl:px-20 2xl:py-32",
        className,
      )}
    >
      {children}
    </div>
  );
}
