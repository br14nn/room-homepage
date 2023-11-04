import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

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
    <motion.button
      whileHover={{ backgroundColor: "hsl(0 0% 27%)" }}
      className={twMerge("bg-black p-5 text-white 2xl:p-8", className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
