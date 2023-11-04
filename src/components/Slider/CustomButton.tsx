import { twMerge } from "tailwind-merge";

type TCustomButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
};

export default function CustomButton({
  className,
  onClick,
  children,
}: TCustomButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-black p-5 text-white hover:bg-very-dark-gray 2xl:p-8",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
