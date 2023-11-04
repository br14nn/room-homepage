type TAboutContentContainerProps = {
  children?: React.ReactNode;
};

export default function AboutContentContainer({
  children,
}: TAboutContentContainerProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 bg-white px-6 py-12 md:w-[50%] xl:w-[40%] xl:px-12 xl:py-18 2xl:px-20 2xl:py-32">
      {children}
    </div>
  );
}
